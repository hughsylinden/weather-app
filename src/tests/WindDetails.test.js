import React from "react";
import { render } from "@testing-library/react";
import WindDetails from "../components/WindDetails";

describe("WindDetails", () => {
  const validProps = {
    speed: 5,
    direction: "ne",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <WindDetails speed={validProps.speed} direction={validProps.direction} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <WindDetails speed={validProps.speed} direction={validProps.direction} />
    );

    expect(getByText("5ms")).toHaveClass("wind-details");
    expect(getByTestId("wind-details-image")).toHaveClass("wind-details__img");
  });
});
