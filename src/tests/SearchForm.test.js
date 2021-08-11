import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    handleCityInput: () => {},
    handleCitySearch: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        handleCityInput={validProps.handleCityInput}
        handleCitySearch={validProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <SearchForm
        handleCityInput={validProps.handleCityInput}
        handleCitySearch={validProps.handleCitySearch}
      />
    );

    expect(getByText("Search")).toHaveClass("search-form__button");
  });
});
