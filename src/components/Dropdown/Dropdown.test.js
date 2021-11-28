import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Dropdown from "./index";

describe("Dropdown", () => {
  test("dropdown will show the options when options list length greater than 0", () => {
    const dropdown = renderer
      .create(
        <Dropdown
          label="Address"
          name="Address"
          onChange={(e) => {}}
          options={["option1"]}
        />
      )
      .toJSON();
    expect(dropdown.children[1].children.length).toBe(1);
  });
});
