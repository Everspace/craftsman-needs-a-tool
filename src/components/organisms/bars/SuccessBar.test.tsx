import React from "react"
import SuccessBar from "./SuccessBar"
import { Provider } from "react-redux"
import { render } from "react-testing-library"
import { createStore } from "redux";

const base = {
  successes: {
    current: 7,
    available: 2,
  },
}

let store = createStore(state => base)

const substring = { exact: false }

it("has the correct math", () => {
  let { getByText } = render(
    <Provider store={store}>
      <SuccessBar />
    </Provider>,
  )

  // It shows the 2 successes available
  expect(getByText("2", substring)).toBeTruthy()

  // 7 successes - 2 availble means there should be a display of 5 used successes
  expect(getByText("5", substring)).toBeTruthy()

  // 100 - 7 = 93 successes to go
  expect(getByText("93", substring)).toBeTruthy()

  // Displays 7/100 as the "total" gotten
  expect(getByText(/7.*\/.*100/, substring)).toBeTruthy()
})
