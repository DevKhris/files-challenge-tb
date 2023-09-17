import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App Component", () => {
  it("should render a navbar with a text", () => {
    render(<App />);
    const navBrandElement = screen.getByText(/React Test App/i);
    expect(navBrandElement).toBeInTheDocument();
  });

  it("should render a input field for search", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Search a file/i);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "test3.csv" } });
    expect(inputElement.value).toBe("test3.csv");
  });

  it("shoulder render a table with rows", () => {
    render(<App />);
    const tableElement = screen.getByRole("table");
    const tableRows = screen.getAllByRole("row");
    const tableColumnHeader = screen.getAllByRole("columnheader");
    expect(tableElement).toBeInTheDocument();
    expect(tableRows.length).toBe(1);
    expect(tableColumnHeader.length).toBe(4);
  });
});

