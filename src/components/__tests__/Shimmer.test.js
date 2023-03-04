import { render } from "@testing-library/react"
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

test("Shimmer should load on initial rendering of the page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  )

  const shimmer = body.getByTestId("shimmer-ui");

  expect(shimmer.children.length).toBe(16);
})