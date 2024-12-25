import { Button, Buttons } from "@/button";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { userEvent } from "@testing-library/user-event";
import type { ComponentType, AnchorHTMLAttributes } from "react";

describe("Composant Button", () => {
  describe("Rendu de base", () => {
    it("devrait afficher un bouton avec les classes par défaut", () => {
      render(<Button>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "transition-none",
        "font-normal",
        "border-1",
        "rounded-md",
      );
    });

    it("devrait afficher le texte passé en children", () => {
      render(<Button>Test</Button>);
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });

  describe("Gestion des liens", () => {
    const MockLink: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>> = (
      props,
    ) => <a {...props} />;

    it("devrait rendre un lien si `href` et `LinkComponent` sont fournis", () => {
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

    it("devrait rendre un bouton classique sans `LinkComponent`", () => {
      render(<Button href="/test">Test</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("href");
    });
  });

  describe("Contenus personnalisés", () => {
    it("devrait afficher un contenu au début avec la classe appropriée", () => {
      render(<Button startContent={<span>Début</span>}>Test</Button>);
      const startContent = screen.getByText("Début");
      expect(startContent.parentElement).toHaveClass("mr-2");
    });

    it("devrait afficher un contenu à la fin avec la classe appropriée", () => {
      render(<Button endContent={<span>Fin</span>}>Test</Button>);
      const endContent = screen.getByText("Fin");
      expect(endContent.parentElement).toHaveClass("ml-2");
    });
  });

  describe("États", () => {
    it("devrait gérer l'état `fullWidth`", () => {
      render(<Button fullWidth>Test</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-full");
    });

    it("devrait gérer l'état `isLoading`", () => {
      render(<Button isLoading>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("opacity-50", "cursor-not-allowed");
    });

    it("devrait gérer l'état désactivé", () => {
      render(<Button isDisabled>Test</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });

  describe("Gestion des événements", () => {
    it("devrait appeler la fonction `onPress` au clic", () => {
      const handleClick = vi.fn();
      render(<Button onPress={handleClick}>Test</Button>);

      act(() => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("ne devrait pas appeler `onPress` si le bouton est désactivé", () => {
      const handleClick = vi.fn();
      render(
        <Button isDisabled onPress={handleClick}>
          Test
        </Button>,
      );

      act(() => {
        fireEvent.click(screen.getByRole("button"));
      });

      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});

describe("Composant Buttons", () => {
  const mockButtons = [
    { key: "1", label: "Bouton 1", buttonProps: { onPress: vi.fn() } },
    { key: "2", label: "Bouton 2", buttonProps: { isDisabled: true } },
  ];

  describe("Rendu de base", () => {
    it("devrait afficher un groupe de boutons", () => {
      render(<Buttons buttons={mockButtons} />);
      expect(screen.getByRole("group")).toBeInTheDocument();
      expect(screen.getAllByRole("button")).toHaveLength(mockButtons.length);
    });

    it("devrait afficher les bons labels pour chaque bouton", () => {
      render(<Buttons buttons={mockButtons} />);
      mockButtons.forEach((button) => {
        expect(screen.getByText(button.label)).toBeInTheDocument();
      });
    });
  });

  describe("Gestion des props", () => {
    it("devrait transmettre les props au conteneur de groupe", () => {
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

    it("devrait transmettre les props à chaque bouton", () => {
      render(<Buttons buttons={mockButtons} />);
      const buttons = screen.getAllByRole("button");
      expect(buttons[1]).toHaveAttribute("data-disabled");
    });
  });

  describe("Interactions", () => {
    it("devrait appeler `onPress` lorsque le bouton est cliqué", async () => {
      const user = userEvent.setup();
      render(<Buttons buttons={mockButtons} />);

      const button = screen.getByText("Bouton 1");
      await act(async () => {
        await user.click(button);
      });

      expect(mockButtons[0].buttonProps?.onPress).toHaveBeenCalledTimes(1);
    });
  });

  describe("Accessibilité", () => {
    it("devrait inclure les attributs ARIA nécessaires", () => {
      render(<Buttons buttons={mockButtons} aria-label="Groupe de boutons" />);
      const group = screen.getByRole("group");
      expect(group).toHaveAttribute("aria-label", "Groupe de boutons");
    });
  });

  describe("Cas limites", () => {
    it("devrait gérer un tableau vide de boutons sans erreur", () => {
      render(<Buttons buttons={[]} />);
      expect(screen.queryAllByRole("button")).toHaveLength(0);
    });

    it("devrait gérer des labels avec contenu React complexe", () => {
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
