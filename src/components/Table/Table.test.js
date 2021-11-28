import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Table from "./index";

const headerRows = [
  {
    id: "firstName",
    label: "FirstName",
    type: "text",
  },
  {
    id: "lastName",
    label: "LastName",
    type: "text",
  },
  {
    id: "city",
    label: "City",
    type: "text",
  },
];
const bodyRows = [
  { id: 1, firstName: "faizan", lastName: "khalique", city: "Islamabad" },
  { id: 2, firstName: "M", lastName: "Ali", city: "Islamabad" },
];
describe("Table", () => {
  test("table header rows and body will be show when header rows length greater then 0", () => {
    const tableHeader = renderer
      .create(
        <Table headerRows={headerRows} rows={bodyRows} onDelete={(id) => {}} />
      )
      .toJSON();
    expect(tableHeader.children[0].children.length).toBe(3);
  });
  test("table header rows and body will be show when header rows length less then 1 or undefined", () => {
    const tableHeader = renderer
      .create(<Table rows={bodyRows} onDelete={(id) => {}} />)
      .toJSON();
    expect(tableHeader.children[0].children?.length).toBe(undefined);
  });
});
