import { render, waitFor } from "@testing-library/react";
import Joke from "../Joke";

describe("Test Joke Component", () => {
  test("render joke text", async () => {
    const { getByTestId } = render(<Joke />);
    const jokeHeading = getByTestId("jokeHeadline");

    // expect(jokeHeading.innerHTML).toBeTruthy();
    // async function

    await waitFor(() => expect(jokeHeading.innerHTML).toBeTruthy());
  });
});
