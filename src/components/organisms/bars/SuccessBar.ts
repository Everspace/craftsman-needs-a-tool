import { grey, primary } from "styles/Colors"
import StatBar from "components/molecules/StatBar"
import { connect } from "react-redux"
import { artifactRatingToSuccessesNeeded } from "lib/Exalted/craft"
import { BarSegmentDefintion } from "components/atoms/ProgressBar"

const mapStateToProps = state => {
  const target = artifactRatingToSuccessesNeeded(state.artifactRating)
  const current = state.successes.current
  const available = state.successes.available
  const used = current - available
  const remaining = target - current

  const usedBar = {
    value: used,
    text: used,
    className: primary.main.cssClass,
  }

  const availableBar: BarSegmentDefintion = {
    value: available,
    text: available,
    className: primary.light.cssClass,
    roundedCorners: "true",
    style: { zIndex: 1 },
  }

  const remainingBar = {
    value: remaining,
    text: remaining,
    className: grey.grey500.cssClass,
  }

  const bars = [usedBar, availableBar, remainingBar]
  return {
    bars,
    current,
    total: target,
  }
}

export default connect(mapStateToProps)(StatBar)
