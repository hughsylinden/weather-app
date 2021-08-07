import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProp = {
    date: 1525132800000,
    description: "stubDescription",
    icon: "800",
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 40,
    wind: {
      speed: 5,
      direction: "ne",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProp} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={validProp} />
    );

    expect(getByText("stubDescription")).toHaveClass(
      "forecast-details__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-details__icon");
    expect(getByText("Tue 1st May")).toHaveClass("forecast-details__date");
    expect(getByText("stubDescription")).toHaveClass(
      "forecast-details__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-details__icon");
    expect(getByTestId("forecast-temperature")).toHaveClass(
      "forecast-details__temperature"
    );
  });
});
