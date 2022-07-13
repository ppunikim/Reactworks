import { render, screen } from "@testing-library/react";
import ReactJS from "./React";

test("renders learn react link", () => {
  render(<ReactJS />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
