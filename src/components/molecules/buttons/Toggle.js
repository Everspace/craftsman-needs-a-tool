import React from "react"
import Button from "components/atoms/Button"
import { connect } from "react-redux"

const mapState = state => state;

const Toggle = props => {
  return <Button {...this.props} />
}

export default connect(mapState, {})(Toggle)
