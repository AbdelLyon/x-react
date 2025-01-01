// Chart.test.tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import * as ReactChartJS2 from "react-chartjs-2";
import { Chart } from "@/chart";

vi.mock("react-chartjs-2", () => ({
  Chart: vi.fn(({ options }) => (
    <div data-testid="mock-chart">{options?.plugins?.title?.text}</div>
  )),
}));

describe("Chart Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockBarData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Bar Dataset",
        data: [10, 20, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const mockLineData = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Line Dataset",
        data: [5, 10, 15],
        borderColor: "#FF6384",
        tension: 0.1,
      },
    ],
  };

  const mockDoughnutData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const mockPolarAreaData = {
    labels: ["Rouge", "Bleu", "Jaune"],
    datasets: [
      {
        data: [11, 16, 7],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"],
      },
    ],
  };

  // Tests existants
  it("devrait se rendre avec les props par défaut", () => {
    const { container } = render(<Chart type="bar" data={mockBarData} />);
    expect(container.firstChild).toHaveClass("relative");
  });

  it("devrait se rendre avec un titre personnalisé", () => {
    render(<Chart type="bar" data={mockBarData} title="Test Chart" />);

    const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
      typeof vi.fn
    >;
    const options = chartComponent.mock.calls[0][0].options;
    expect(options.plugins.title.text).toBe("Test Chart");
  });

  describe("Types de graphiques", () => {
    it("devrait rendre un graphique en ligne avec les options appropriées", () => {
      render(
        <Chart
          type="line"
          data={mockLineData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />,
      );

      const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
        typeof vi.fn
      >;
      const props = chartComponent.mock.calls[0][0];

      expect(props.type).toBe("line");
      expect(props.data).toEqual(mockLineData);
      expect(props.options.scales.y.beginAtZero).toBe(true);
    });

    it("devrait rendre un graphique en donut avec la configuration correcte", () => {
      render(
        <Chart
          type="doughnut"
          data={mockDoughnutData}
          options={{
            cutout: "70%",
          }}
        />,
      );

      const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
        typeof vi.fn
      >;
      const props = chartComponent.mock.calls[0][0];

      expect(props.type).toBe("doughnut");
      expect(props.data).toEqual(mockDoughnutData);
      expect(props.options.cutout).toBe("70%");
    });

    it("devrait rendre un graphique en aire polaire avec les options spécifiques", () => {
      render(
        <Chart
          type="polarArea"
          data={mockPolarAreaData}
          options={{
            scales: {
              r: {
                beginAtZero: true,
              },
            },
          }}
        />,
      );

      const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
        typeof vi.fn
      >;
      const props = chartComponent.mock.calls[0][0];

      expect(props.type).toBe("polarArea");
      expect(props.data).toEqual(mockPolarAreaData);
      expect(props.options.scales.r.beginAtZero).toBe(true);
    });

    it("devrait gérer correctement les options de légende spécifiques au type", () => {
      render(
        <Chart
          type="doughnut"
          data={mockDoughnutData}
          options={{
            plugins: {
              legend: {
                position: "right",
                labels: {
                  padding: 20,
                },
              },
            },
          }}
        />,
      );

      const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
        typeof vi.fn
      >;
      const options = chartComponent.mock.calls[0][0].options;

      expect(options.plugins.legend.position).toBe("right");
      expect(options.plugins.legend.labels.padding).toBe(20);
    });

    it("devrait fusionner correctement les options par défaut avec les options personnalisées", () => {
      const customOptions = {
        responsive: false,
        plugins: {
          legend: {
            position: "bottom" as const,
          },
        },
      };

      render(<Chart type="bar" data={mockBarData} options={customOptions} />);

      const chartComponent = ReactChartJS2.Chart as unknown as ReturnType<
        typeof vi.fn
      >;
      const options = chartComponent.mock.calls[0][0].options;

      expect(options.responsive).toBe(false);
      expect(options.plugins.legend.position).toBe("bottom");
      expect(options.maintainAspectRatio).toBe(false);
    });
  });
});
