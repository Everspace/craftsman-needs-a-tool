import React from "react"
import SuccessBar from "components/organisms/bars/SuccessBar"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { render, cleanup } from "react-testing-library"

let store = createStore(state => state, {
  successes: {
    current: 7,
    available: 2,
  },
})

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
