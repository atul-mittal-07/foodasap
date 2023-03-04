import { fireEvent, render, waitFor } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux";
import store from "./../../utils/store";
import Body from "./../Body";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import RESTAURANT_DATA from "../../mocks/RestaurantData.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA)
    }
  })
})

test("Search is working on main page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  await waitFor(() => body.getByTestId("res-list"));

  const input = body.getByTestId("input");

  fireEvent.change(input, {
    target: {
      value: "habit"
    }
  })
  const resNames = body.getAllByTestId("res-name");
  expect(resNames[0].innerHTML).toBe("Falhari - A fruitful habit");
})

