import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  screen.debug(); // This will print the DOM to the console
  const welcomeElement = screen.getByText(/Welcome to Cake Creations!/i);
  expect(welcomeElement).toBeInTheDocument();
});
