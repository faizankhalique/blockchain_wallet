import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./index";

describe("TextInput", () => {
  test("text input will take only valid number values", () => {
    render(<TextInput value={"23"} />);
    const input = screen.getByTestId("input");
    fireEvent.change(input, {
      target: { value: () => (!isNaN(input.value) ? input.value : "") },
    });
    console.log(`input.value`, input.value);
    expect(!isNaN(input.value)).toBe(!isNaN("23"));
  });
});
