import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { location, forecasts } from "../data/forecast.json";

test("renders learn react link", () => {
  render(<App location={location} forecasts={forecasts} />);
  const linkElement = screen.getByText(/Manchester, UK/i);
  expect(linkElement).toBeInTheDocument();
});
