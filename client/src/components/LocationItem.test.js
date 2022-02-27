import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import LocationItem from "./LocationItem";

test("Location item displays correct name and country that it receives from location prop", () => {
    let component;
    const location = {
      name: "someName",
      country: "someCountry",
    };
    component = render(<LocationItem location={location} />);
    expect(component.container).toHaveTextContent("someName" && "someCountry");
  });
