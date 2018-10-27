import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar"
import { connect } from "react-redux"

let mapStateToProps = state => {
  let available = state.motes.personal + state.motes.peripheral
  let totalPool = state.motes.personalPool + state.motes.peripheralPool;

  let personalBar = {
    value: state.motes.personal,
    text: state.motes.personal,
    className: cssClass.primary.main,
  }

  let peripheralBar = {
    value: state.motes.peripheral,
    text: state.motes.peripheral,
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
