import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBar from "./SearchBar";
import userEvent from "@testing-library/user-event";

describe("SearchBar component renders", () => {
  test("SearchBar displays an error if numbers or special characters are used", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Enter location here");
    userEvent.type(input, "test2");
    const element = screen.getByText("Only letters and spaces allowed");
    expect(element).toBeDefined();
  });

  test("SearchBar does not displays an error if only letters and spaces are used", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Enter location here");
    userEvent.type(input, "test test test");
    const element = screen.queryByText("Only letters and spaces allowed");
    expect(element).toBeFalsy();
  });
});
