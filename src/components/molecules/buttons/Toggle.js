import React from "react"
import Button from "components/atoms/Button"
import { connect } from "react-redux"

const mapState = state => state

export default connect(
  mapState,
  {},
)(<Button />)
