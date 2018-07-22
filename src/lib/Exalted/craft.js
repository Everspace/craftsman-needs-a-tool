/**
 * @param {Number} rating Artifact's rating 6 for N/A
 */
export const artifactRatingToSuccessesNeeded = rating => {
  switch (rating) {
    case 2:
      return 25
    case 3:
      return 50
    case 4:
      return 75
    case 5:
    default:
      return 100
    case 6: // N/A
      return 200
  }
}