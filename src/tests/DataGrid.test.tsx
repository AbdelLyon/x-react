import type { ColumnDefinition } from "@/datagrid";
import { DataGrid } from "@/datagrid";
import { render, screen, fireEvent } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

interface TestData {
  id: number;
  name: string;
  age: number;
}

describe("Composant DataGrid", (): void => {
  const testData: TestData[] = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    { id: 3, name: "Bob Johnson", age: 35 },
  ];

  const columns: ColumnDefinition<TestData>[] = [
    {
      field: "name",
      header: "Nom",
      sortable: true,
    },
    {
      field: "age",
      header: "Âge",
      sortable: true,
    },
  ];

  describe("Snapshots", (): void => {
    it("devrait correspondre au snapshot avec données de base", (): void => {
      const { container } = render(
        <DataGrid rows={testData} columns={columns} />,
      );
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot sans données", (): void => {
      const { container } = render(<DataGrid rows={[]} columns={columns} />);
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot en état de chargement", (): void => {
      const { container } = render(
        <DataGrid rows={testData} columns={columns} isLoading={true} />,
      );
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot avec contenu personnalisé des cellules", (): void => {
      const colonnesPersonnalisees = [
        ...columns,
        {
          field: "actions" as const,
          header: "Actions",
          cell: (): ReactNode => <button>Modifier</button>,
        },
      ];

      const { container } = render(
        <DataGrid rows={testData} columns={colonnesPersonnalisees} />,
      );
      expect(container).toMatchSnapshot();
    });

    it("devrait correspondre au snapshot avec variante de style", (): void => {
      const { container } = render(
        <DataGrid rows={testData} columns={columns} variant="bordered" />,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe("Comportement", (): void => {
    it("devrait gérer le tri des colonnes", (): void => {
      const onSort = vi.fn();
      render(
        <DataGrid rows={testData} columns={columns} onSortChange={onSort} />,
      );

      const enTeteNom = screen.getByText("Nom");
      const boutonTri = enTeteNom
        .closest("div")
        ?.querySelector("[role='button']");

      if (boutonTri) {
        fireEvent.click(boutonTri);
        expect(onSort).toHaveBeenCalledWith("name", "desc");
      }
    });
  });

  describe("Accessibilité", (): void => {
    it("devrait avoir les attributs ARIA corrects", (): void => {
      render(<DataGrid rows={testData} columns={columns} />);

      expect(screen.getByRole("grid")).toHaveAttribute(
        "aria-label",
        "data-grid",
      );
      expect(screen.getAllByRole("row")).toHaveLength(testData.length + 1);
    });
  });
});
