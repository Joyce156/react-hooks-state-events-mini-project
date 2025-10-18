import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  const task = { text: "text!", category: "category!" }; // Create task object
  render(<Task task={task} onDelete={() => {}} />); // Pass as prop
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  const task = { text: "text!", category: "category!" }; // Create task object
  render(<Task task={task} onDelete={() => {}} />); // Pass as prop
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", async () => {
  render(<App />);

  // Find the task element (wait for it to appear if necessary)
  const task = await screen.findByText(/Buy rice/);

  // Find the delete button related to this task
  const deleteButton = task.closest(".task").querySelector("button.delete");

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // Assert that the task is no longer in the document
  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
