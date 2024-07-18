import { act } from "react";
import { render } from "@testing-library/react";
import NumberList from "../components/NumberList";

test("renders nothing when number is undefined", () => {
  let container: HTMLElement | null = null;
  act(() => {
    const result = render(<NumberList number={undefined} />);
    container = result.container;
  });
  expect(container!.firstChild).toBeNull();
});

test("renders the correct numbers", () => {
  let getByText: ((id: string) => HTMLElement) | null = null;
  act(() => {
    const result = render(<NumberList number={5} />);
    getByText = result.getByText;
  });
  expect(getByText!("1, 2, 3, 4, 5")).toBeInTheDocument();
});

test("renders a single number correctly", () => {
  let getByText: ((id: string) => HTMLElement) | null = null;
  act(() => {
    const result = render(<NumberList number={1} />);
    getByText = result.getByText;
  });
  expect(getByText!("1")).toBeInTheDocument();
});

test("renders nothing for zero", () => {
  let container: HTMLElement | null = null;
  act(() => {
    const result = render(<NumberList number={0} />);
    container = result.container;
  });
  expect(container!.firstChild).toBeNull();
});

test("renders nothing for negative numbers", () => {
  let container: HTMLElement | null = null;
  act(() => {
    const result = render(<NumberList number={-1} />);
    container = result.container;
  });
  expect(container!.firstChild).toBeNull();
});
