import React from "react";
import { render } from "@testing-library/react";
import Hobbies from "./Hobbies";

describe("Hobbies tests", () => {
  it("should render", () => {
    expect(render(<Hobbies />)).toBeTruthy();
  });
});
