import { Button } from "@/button";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { forwardRef } from "react";
import { Buttons } from "@/buttons";

import type { JSX } from "react";
const MockLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(
  (props, ref): JSX.Element => (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  ),
);

MockLink.displayName = "MockLink";
describe("Composant Button", (): void => {
  describe("Rendu de base", (): void => {
    it("devrait afficher un bouton avec les classes par défaut", (): void => {
      render(<Button>Test</Button>);
      const button = screen.getByRole("button");

      const expectedClasses = [
        "transition-none",
        "font-normal",
        "border-1",
        "rounded",
        "border-default",
      ];

      expectedClasses.forEach((className): void => {
        expect(button).toHaveClass(className);
      });
    });

    it("devrait afficher le contenu du bouton", (): void => {
      render(<Button>Test Content</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Test Content");
    });
  });

  describe("Props et styles", (): void => {
    it("devrait appliquer la classe fullWidth", (): void => {
      render(<Button fullWidth>Test</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-full");
    });

    it("devrait appliquer les styles de chargement", (): void => {
      render(<Button isLoading>Test</Button>);
      expect(screen.getByRole("button")).toHaveClass(
        "opacity-50",
        "cursor-not-allowed",
      );
    });

    it("devrait fusionner les classNames personnalisés", (): void => {
      render(
        <Button
          classNames={{
            base: "custom-base",
            content: "custom-content",
          }}
        >
          Test
        </Button>,
      );

      const button = screen.getByRole("button");
      expect(button).toHaveClass("custom-base");
      expect(button.querySelector("span")).toHaveClass("custom-content");
    });
  });

  describe("Contenu additionnel", (): void => {
    it("devrait rendre le startContent", (): void => {
      render(
        <Button startContent={<span data-testid="start">Start</span>}>
          Test
        </Button>,
      );

      const startContent = screen.getByTestId("start");
      expect(startContent).toBeInTheDocument();
      expect(startContent.parentElement).toHaveClass("mr-2");
    });

    it("devrait rendre le endContent", (): void => {
      render(
        <Button endContent={<span data-testid="end">End</span>}>Test</Button>,
      );

      const endContent = screen.getByTestId("end");
      expect(endContent).toBeInTheDocument();
      expect(endContent.parentElement).toHaveClass("ml-2");
    });
  });

  describe("Gestion des liens", (): void => {
    it("devrait rendre un lien quand href et LinkComponent sont fournis", (): void => {
      render(
        <Button href="/test" LinkComponent={MockLink} target="_blank">
          Test Link
        </Button>,
      );

      // Chercher l'élément par son tag 'a' plutôt que par le rôle
      const link = screen.getByText("Test Link").closest("a");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("devrait avoir le rôle button même en tant que lien", (): void => {
      render(
        <Button href="/test" LinkComponent={MockLink}>
          Test Link
        </Button>,
      );

      const element = screen.getByRole("button");
      expect(element.tagName.toLowerCase()).toBe("a");
    });

    it("ne devrait pas rendre un lien si LinkComponent est manquant", (): void => {
      render(<Button href="/test">Test</Button>);
      const button = screen.getByRole("button");
      expect(button.tagName.toLowerCase()).toBe("button");
    });
  });

  describe("Gestion des événements", (): void => {
    it("devrait appeler onClick quand cliqué", (): void => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Test</Button>);

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("ne devrait pas déclencher onClick si isLoading est true", (): void => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} isLoading>
          Test
        </Button>,
      );

      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});

describe("Composant Buttons", (): void => {
  const mockButtons = [
    { key: "1", label: "Bouton 1", buttonProps: { onClick: vi.fn() } },
    { key: "2", label: "Bouton 2", buttonProps: { isDisabled: true } },
  ];

  describe("Rendu de base", (): void => {
    it("devrait afficher un groupe de boutons", (): void => {
      render(<Buttons buttons={mockButtons} />);
      expect(screen.getByRole("group")).toBeInTheDocument();
      expect(screen.getAllByRole("button")).toHaveLength(mockButtons.length);
    });

    it("devrait afficher les bons labels pour chaque bouton", (): void => {
      render(<Buttons buttons={mockButtons} />);
      mockButtons.forEach((button): void => {
        expect(screen.getByText(button.label)).toBeInTheDocument();
      });
    });
  });

  describe("Gestion des props", (): void => {
    it("devrait transmettre les props au conteneur de groupe", (): void => {
      render(
        <Buttons
          buttons={mockButtons}
          className="w-full"
          data-testid="button-group"
        />,
      );
      const group = screen.getByTestId("button-group");
      expect(group).toHaveClass("w-full");
    });

    it("devrait transmettre les props à chaque bouton", (): void => {
      render(<Buttons buttons={mockButtons} />);
      const buttons = screen.getAllByRole("button");
      expect(buttons[1]).toHaveAttribute("data-disabled");
    });
  });

  describe("Interactions", (): void => {
    it("devrait appeler `onClick` lorsque le bouton est cliqué", async (): Promise<void> => {
      const user = userEvent.setup();
      render(<Buttons buttons={mockButtons} />);

      const button = screen.getByText("Bouton 1");
      await act(async (): Promise<void> => {
        await user.click(button);
      });

      expect(mockButtons[0].buttonProps?.onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibilité", (): void => {
    it("devrait inclure les attributs ARIA nécessaires", (): void => {
      render(<Buttons buttons={mockButtons} aria-label="Groupe de boutons" />);
      const group = screen.getByRole("group");
      expect(group).toHaveAttribute("aria-label", "Groupe de boutons");
    });
  });

  describe("Cas limites", (): void => {
    it("devrait gérer un tableau vide de boutons sans erreur", (): void => {
      render(<Buttons buttons={[]} />);
      expect(screen.queryAllByRole("button")).toHaveLength(0);
    });

    it("devrait gérer des labels avec contenu React complexe", (): void => {
      const buttonsWithReactContent = [
        {
          key: "1",
          label: <span data-testid="custom-content">Label complexe</span>,
        },
      ];

      render(<Buttons buttons={buttonsWithReactContent} />);
      expect(screen.getByTestId("custom-content")).toBeInTheDocument();
    });
  });
});
