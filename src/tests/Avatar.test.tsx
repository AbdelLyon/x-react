import { Avatar, AvatarGroup, User } from "@/avatar";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Composants Avatar", () => {
  describe("Avatar", () => {
    describe("Rendu de base", () => {
      it("devrait rendre un avatar sans props", () => {
        render(<Avatar />);
        const avatar = screen.getByRole("img", { name: "avatar" });
        expect(avatar).toBeInTheDocument();
      });

      it("devrait rendre une image quand src est fourni", () => {
        const testSrc = "test.jpg";
        render(<Avatar src={testSrc} alt="Mon avatar" />);

        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", testSrc);
        expect(img).toHaveAttribute("alt", "Mon avatar");
      });

      it("devrait afficher le texte du nom", () => {
        render(<Avatar name="John Doe" />);
        const avatar = screen.getByRole("img", { name: "John Doe" });
        expect(avatar).toHaveTextContent("Joh");
      });
    });

    describe("Styles et variants", () => {
      it("devrait appliquer les classes de base", () => {
        const { container } = render(<Avatar />);
        const avatar = container.firstChild;
        expect(avatar).toHaveClass(
          "flex",
          "relative",
          "justify-center",
          "items-center",
        );
      });

      it("devrait supporter différentes tailles", () => {
        render(<Avatar size="lg" />);
        const avatar = screen.getByRole("img").parentElement;
        expect(avatar).toHaveClass("w-14", "h-14");
      });
    });

    describe("Comportements", () => {
      it("devrait afficher le fallback si spécifié", () => {
        render(
          <Avatar
            src="invalid.jpg"
            fallback={<div data-testid="fallback">FB</div>}
            showFallback
          />,
        );
        expect(screen.getByTestId("fallback")).toBeInTheDocument();
      });
    });
  });

  describe("AvatarGroup", () => {
    it("devrait rendre un groupe simple", () => {
      render(
        <AvatarGroup>
          <Avatar name="User 1" />
          <Avatar name="User 2" />
        </AvatarGroup>,
      );

      const group = screen.getByRole("group");
      expect(group).toBeInTheDocument();
      expect(screen.getAllByRole("img")).toHaveLength(2);
    });

    it("devrait respecter la limite max", () => {
      render(
        <AvatarGroup max={1} total={3}>
          <Avatar name="User 1" />
          <Avatar name="User 2" />
          <Avatar name="User 3" />
        </AvatarGroup>,
      );

      const avatars = screen.getAllByRole("img");
      // Un avatar visible + compteur
      expect(avatars).toHaveLength(2);
      // Le dernier est le compteur avec le total
      expect(avatars[avatars.length - 1]).toHaveTextContent("+3");
    });

    it("devrait appliquer les styles de groupe", () => {
      render(
        <AvatarGroup className="size-6">
          <Avatar />
        </AvatarGroup>,
      );

      const group = screen.getByRole("group");
      expect(group).toHaveClass("size-6");
    });
  });

  describe("User", () => {
    it("devrait rendre les informations de base", () => {
      render(<User name="John Doe" description="Developer" />);

      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Developer")).toBeInTheDocument();
    });

    it("devrait inclure un avatar", () => {
      render(
        <User
          name="John Doe"
          avatarProps={{
            src: "test.jpg",
            alt: "John",
          }}
        />,
      );

      const avatar = screen.getByRole("img");
      expect(avatar).toHaveAttribute("alt", "John");
    });

    it("devrait accepter des contenus personnalisés", () => {
      render(
        <User
          name={<span data-testid="custom-name">John</span>}
          description={<span data-testid="custom-desc">Info</span>}
        />,
      );

      expect(screen.getByTestId("custom-name")).toBeInTheDocument();
      expect(screen.getByTestId("custom-desc")).toBeInTheDocument();
    });
  });
});
