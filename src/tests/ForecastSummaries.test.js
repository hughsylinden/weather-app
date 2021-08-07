import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1525046400000,
      description: "Stub decription 1",
      icon: "211",
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 1525132800000,
      description: "Stub decription 2",
      icon: "800",
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
