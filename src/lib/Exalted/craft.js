export const artifactRatingToSuccessesNeeded = rating => {
  switch (rating) {
    case 2:
      return 30
    case 3:
      return 50
    case 4:
      return 75
    case 5:
      return 100
    case 6: // N/A
      return 200
    default:
      return 100
  }
}
