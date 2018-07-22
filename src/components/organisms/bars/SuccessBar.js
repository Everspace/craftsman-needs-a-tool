import { cssClass } from "styles/Colors"
import StatBar from "components/molecules/StatBar";
import { connect } from "react-redux";
import { artifactRatingToSuccessesNeeded } from "lib/Exalted/craft";

const mapStateToProps = state => {
  let target = artifactRatingToSuccessesNeeded(state.artifactRating)
  let current = state.successes.current
  let available = state.successes.available
  let used = current - available
  let remaining = target - current

  let usedBar = {
    value: used,
    text: used,
    className: cssClass.primary.main,
  }

  let availableBar = {
    value: available,
    text: available,
    className: cssClass.primary.light,
    rounded: true,
    style: {zIndex: 1},
  }

  let remainingBar = {
    value: remaining,
    text: remaining,
    className: cssClass.grey500,
  }

  let bars = [usedBar, availableBar, remainingBar]
  return {
    bars,
    current,
    total: target,
  }
}

export default connect(mapStateToProps)(StatBar)
