import App from "./App"
import { render } from "react-testing-library"

it("renders without crashing", () => {
  expect(render(<App />))
})
