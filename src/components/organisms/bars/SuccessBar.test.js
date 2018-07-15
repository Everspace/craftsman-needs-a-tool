import React from 'react'
import SuccessBar from 'components/organisms/bars/SuccessBar'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

let store = createStore((state)=>state, {
  successes: {
    current: 7,
    available: 2,
  }
})

it("doesn't explode", ()=>{
  mount(
    <Provider store={store}>
      <SuccessBar/>
    </Provider>
  )
})
