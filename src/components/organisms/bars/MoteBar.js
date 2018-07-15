import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar"
import { connect } from "react-redux"

let mapStateToProps = state => {
  let available = state.personal + state.peripheral
  let totalPool = state.personalPool + state.peripheralPool;

  let personalBar = {
    value: state.personal,
    text: state.personal,
    className: cssClass.primary.main,
  }

  let peripheralBar = {
    value: state.peripheral,
    text: state.peripheral,
    className: cssClass.primary.light,
  }

  return {
    title: "Motes",
    bars: [
      personalBar,
      peripheralBar
    ],
    current: available,
    total: totalPool,
  }
}

export default connect(mapStateToProps)(StatBar)
