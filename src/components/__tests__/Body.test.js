import { render, waitFor } from "@testing-library/react"
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

test("Body should have data on the rendering of the page", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  await waitFor(() => body.getByTestId("res-list"));

  const resList = body.getByTestId("res-list");

  expect(resList.children.length).toBe(16);
})