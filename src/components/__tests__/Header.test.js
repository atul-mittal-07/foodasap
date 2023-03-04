import { render } from "@testing-library/react"
import { StaticRouter } from "react-router-dom/server"
import { Provider } from "react-redux";
import store from "./../../utils/store";
import Header from "./../Header";
import { toBeInTheDocument } from "@testing-library/jest-dom";

test("Logo is loading on Rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});

test("Cart should have 0 items on Rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0")
});

