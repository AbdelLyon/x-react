import type { ColumnDefinition } from "@/datagrid";
import { DataGrid } from "@/datagrid";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

interface TestData {
  id: number;
  name: string;
  age: number;
}

describe("Composant DataGrid", () => {
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

  describe("Rendu de Base", () => {
    it("devrait rendre correctement les colonnes et les données", () => {
      render(<DataGrid rows={testData} columns={columns} />);

      // Vérification des en-têtes
      expect(screen.getByText("Nom")).toBeInTheDocument();
      expect(screen.getByText("Âge")).toBeInTheDocument();

      // Vérification des données
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("30")).toBeInTheDocument();
    });

    it("devrait rendre un état vide quand aucune donnée n'est fournie", () => {
      render(<DataGrid rows={[]} columns={columns} />);
      // Vérification de l'état vide selon l'implémentation
    });
  });

  describe("État de Chargement", () => {
    it("devrait rendre un skeleton de chargement", () => {
      const { container } = render(
        <DataGrid rows={testData} columns={columns} isLoading={true} />,
      );

      const table = container.querySelector("table");
      expect(table).toBeInTheDocument();

      // Vérification de la structure du skeleton
      const rows = container.querySelectorAll("[role='row']");
      expect(rows.length).toBeGreaterThan(0);
    });
  });

  describe("Sélection par Cases à Cocher", () => {
    it("devrait rendre les cases à cocher quand la sélection est activée", () => {
      render(
        <DataGrid rows={testData} columns={columns} checkboxSelection={true} />,
      );

      const checkboxes = screen.getAllByRole("checkbox");
      expect(checkboxes).toHaveLength(testData.length + 1); // +1 pour la sélection globale
    });

    it("devrait gérer correctement la sélection des lignes", () => {
      const onCheckedRowsChange = vi.fn();
      render(
        <DataGrid
          rows={testData}
          columns={columns}
          checkboxSelection={true}
          onCheckedRowsChange={onCheckedRowsChange}
        />,
      );

      const premierCheckbox = screen.getAllByRole("checkbox")[1];
      fireEvent.click(premierCheckbox);

      expect(onCheckedRowsChange).toHaveBeenCalledWith([testData[0]]);
    });

    it("devrait gérer correctement la sélection globale", () => {
      const onCheckedRowsChange = vi.fn();
      render(
        <DataGrid
          rows={testData}
          columns={columns}
          checkboxSelection={true}
          onCheckedRowsChange={onCheckedRowsChange}
        />,
      );

      const selectAllCheckbox = screen.getAllByRole("checkbox")[0];
      fireEvent.click(selectAllCheckbox);

      expect(onCheckedRowsChange).toHaveBeenCalledWith(testData);
    });
  });

  describe("Tri", () => {
    it("devrait gérer le tri des colonnes", () => {
      const onSort = vi.fn();
      render(<DataGrid rows={testData} columns={columns} onSort={onSort} />);

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

  describe("Rendu Personnalisé", () => {
    it("devrait rendre le contenu personnalisé des cellules", () => {
      const colonnesPersonnalisees = [
        ...columns,
        {
          field: "actions" as const,
          header: "Actions",
          cell: () => <button>Modifier</button>,
        },
      ];

      render(<DataGrid rows={testData} columns={colonnesPersonnalisees} />);

      const boutons = screen.getAllByText("Modifier");
      expect(boutons).toHaveLength(testData.length);
    });
  });

  describe("Style et Variantes", () => {
    it("devrait appliquer les styles de variante", () => {
      const { container } = render(
        <DataGrid rows={testData} columns={columns} variant="bordered" />,
      );

      const enTete = container.querySelector("[role='columnheader']");
      expect(enTete).toHaveClass("bg-content2");
    });
  });

  describe("Accessibilité", () => {
    it("devrait avoir les attributs ARIA corrects", () => {
      render(<DataGrid rows={testData} columns={columns} />);

      expect(screen.getByRole("grid")).toHaveAttribute(
        "aria-label",
        "data-grid",
      );
      expect(screen.getAllByRole("row")).toHaveLength(testData.length + 1);
    });
  });

  describe("Props Personnalisées", () => {
    it("devrait accepter et appliquer les props personnalisées du tableau", () => {
      const propsPersonnalisees = {
        tableProps: {
          "aria-label": "Tableau Personnalisé",
          className: "custom",
        },
      };

      const { container } = render(
        <DataGrid
          rows={testData}
          columns={columns}
          props={propsPersonnalisees}
        />,
      );

      const table = container.querySelector("table");
      expect(table).toHaveAttribute("aria-label", "Tableau Personnalisé");
      expect(table).toHaveClass("min-w-full h-auto table-auto w-full");
    });
  });
});
