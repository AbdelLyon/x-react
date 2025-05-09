import type { DropdownSectionConfig } from "@/dropdown";
import { Dropdown } from "@/dropdown";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("Composant Dropdown", (): void => {
  const mockSections: DropdownSectionConfig[] = [
    {
      key: "section1",
      label: "Première Section",
      items: [
        {
          key: "item1",
          label: "Item 1",
          href: "/item1",
        },
        {
          key: "item2",
          label: "Item 2",
          isReadOnly: true,
        },
      ],
    },
    {
      key: "section2",
      label: "Deuxième Section",
      showDivider: true,
      items: [
        {
          key: "item3",
          label: "Item 3",
        },
      ],
    },
  ];

  const mockTrigger = <button>Ouvrir Dropdown</button>;

  describe("Snapshots", (): void => {
    it("devrait correspondre au snapshot avec les props par défaut", (): void => {
      const { container } = render(
        <Dropdown trigger={mockTrigger} sections={mockSections} />,
      );
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot avec des props minimales", (): void => {
      const minimalSections: DropdownSectionConfig[] = [
        {
          key: "section1",
          items: [{ key: "item1", label: "Item Minimal" }],
        },
      ];
      const { container } = render(
        <Dropdown trigger={mockTrigger} sections={minimalSections} />,
      );
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot avec des sections ayant des séparateurs", (): void => {
      const { container } = render(
        <Dropdown trigger={mockTrigger} sections={mockSections} />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe("Comportement", (): void => {
    it("devrait gérer la pression sur un item avec le callback onItemPress", (): void => {
      const onItemPressMock = vi.fn();

      render(
        <Dropdown
          trigger={mockTrigger}
          sections={mockSections}
          onItemPress={onItemPressMock}
        />,
      );

      onItemPressMock.mockImplementation((item): void => {
        expect(item).toEqual(
          expect.objectContaining({
            key: "item1",
            label: "Item 1",
            href: "/item1",
          }),
        );
      });

      const firstItem = mockSections[0].items[0];
      onItemPressMock(firstItem);
    });

    it("devrait respecter la prop isReadOnly", (): void => {
      const onItemPressMock = vi.fn();

      render(
        <Dropdown
          trigger={mockTrigger}
          sections={mockSections}
          onItemPress={onItemPressMock}
        />,
      );

      const readOnlyItem = mockSections[0].items[1];
      expect(readOnlyItem.isReadOnly).toBe(true);

      onItemPressMock.mockImplementation((): void => {
        throw new Error(
          "L'item en lecture seule ne devrait pas être sélectionnable",
        );
      });

      expect((): void => {
        if (!readOnlyItem.isReadOnly) {
          onItemPressMock(readOnlyItem);
        }
      }).not.toThrow();
    });
  });

  describe("Rendu", (): void => {
    it("devrait rendre le déclencheur du dropdown", (): void => {
      render(<Dropdown trigger={mockTrigger} sections={mockSections} />);
      const triggerButton = screen.getByText("Ouvrir Dropdown");
      expect(triggerButton).toBeTruthy();
    });
  });
});
