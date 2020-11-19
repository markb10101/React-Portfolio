import React from "react";
import { render } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills tests", () => {
  it("should render", () => {
    expect(render(<Skills />)).toBeTruthy();
  });
});
