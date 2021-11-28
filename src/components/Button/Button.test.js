import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "./index";

describe("Button", () => {
  test("button should be display the title", () => {
    render(<Button title={"Add Sender"} onClick={() => {}} disabled={false} />);
    const buttonTitle = screen.getByText("Add Sender");
    buttonTitle.children;
    expect(buttonTitle).toHaveTextContent("Add Sender");
  });
  test("button should be disabled when disabled prop will false", () => {
    const button = renderer
      .create(
        <Button title={"Add Sender"} onClick={() => {}} disabled={false} />
      )
      .toJSON();
    expect(button.props.disabled).toBe(false);
  });
});
