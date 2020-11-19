import React from "react";
import { render } from "@testing-library/react";
import Photograph from "./Photograph";

describe("Photograph tests", () => {
  it("should render", () => {
    expect(render(<Photograph />)).toBeTruthy();
  });
});
