import { act } from "react";
import { render, fireEvent, RenderResult, screen } from "@testing-library/react";
import App from "./App";

test("test renders elements", () => {
  act(() => {
    render(<App />);
  });
  expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Width/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Height/i)).toBeInTheDocument();
});

test("updates NumberList based on number input", async () => {
  render(<App />);

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Number/i), { target: { value: "5" } });
  });

  expect(screen.getByText("1, 2, 3, 4, 5")).toBeInTheDocument();
});

test("updates TriangleArea based on height and width input", async () => {
  render(<App />);

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: "10" } });
    fireEvent.change(screen.getByLabelText(/Width/i), { target: { value: "5" } });
  });

  expect(screen.getByText("Triangle Area: 25")).toBeInTheDocument();
});

test("handles invalid number input gracefully", async () => {
  render(<App />);

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Number/i), { target: { value: "-5" } });
  });

  expect(screen.getByLabelText(/Number/i)).toHaveValue(-5);
  expect(screen.queryByText(/1, 2, 3, 4, 5/i)).toBeNull();
});

test("handles invalid height and width input gracefully", async () => {
  render(<App />);

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: "-10" } });
    fireEvent.change(screen.getByLabelText(/Width/i), { target: { value: "-5" } });
  });

  expect(screen.getByLabelText(/Height/i)).toHaveValue(-10);
  expect(screen.getByLabelText(/Width/i)).toHaveValue(-5);
  expect(screen.queryByText("Triangle Area: 25")).toBeNull();
});
