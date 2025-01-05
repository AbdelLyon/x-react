import { Button } from "@/button";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import type { ComponentType, AnchorHTMLAttributes, JSX } from "react";
import { Buttons } from "@/buttons";

describe("Composant Button", (): void => {
  describe("Rendu de base", (): void => {
    it("devrait afficher un bouton avec les classes par défaut", (): void => {
      render(<Button>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "transition-none",
        "font-normal",
        "border-1",
        "rounded-md",
      );
    });

    it("devrait afficher le texte passé en children", (): void => {
      render(<Button>Test</Button>);
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });

  describe("Gestion des liens", (): void => {
    const MockLink: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> = (
      props,
    ): JSX.Element => <a {...props} />;

    it("devrait rendre un lien si `href` et `LinkComponent` sont fournis", (): void => {
      render(
        <Button href="/test" LinkComponent={MockLink} target="_blank">
          Lien
        </Button>,
      );
      const link = screen.getByRole("button");
      expect(link).toHaveAttribute("href", "/test");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("devrait rendre un bouton classique sans `LinkComponent`", (): void => {
      render(<Button href="/test">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("href");
    });
  });

  describe("Contenus personnalisés", (): void => {
    it("devrait afficher un contenu au début avec la classe appropriée", (): void => {
      render(<Button startContent={<span>Début</span>}>Test</Button>);
      const startContent = screen.getByText("Début");
      expect(startContent.parentElement).toHaveClass("mr-2");
    });

    it("devrait afficher un contenu à la fin avec la classe appropriée", (): void => {
      render(<Button endContent={<span>Fin</span>}>Test</Button>);
      const endContent = screen.getByText("Fin");
      expect(endContent.parentElement).toHaveClass("ml-2");
    });
  });

  describe("États", (): void => {
    it("devrait gérer l'état `fullWidth`", (): void => {
      render(<Button fullWidth>Test</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-full");
    });

    it("devrait gérer l'état `isLoading`", (): void => {
      render(<Button isLoading>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    });

    it("devrait gérer l'état désactivé", (): void => {
      render(<Button isDisabled>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("Gestion des événements", (): void => {
    it("devrait appeler la fonction `onPress` au clic", (): void => {
      const handleClick = vi.fn();
      render(<Button onPress={handleClick}>Test</Button>);

      act((): void => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("ne devrait pas appeler `onPress` si le bouton est désactivé", (): void => {
      const handleClick = vi.fn();
      render(
        <Button isDisabled onPress={handleClick}>
          Test
        </Button>,
      );

      act((): void => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});

describe("Composant Buttons", (): void => {
  const mockButtons = [
    { key: "1", label: "Bouton 1", buttonProps: { onPress: vi.fn() } },
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
    it("devrait appeler `onPress` lorsque le bouton est cliqué", async (): Promise<void> => {
      const user = userEvent.setup();
      render(<Buttons buttons={mockButtons} />);

      const button = screen.getByText("Bouton 1");
      await act(async (): Promise<void> => {
        await user.click(button);
      });

      expect(mockButtons[0].buttonProps?.onPress).toHaveBeenCalledTimes(1);
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
