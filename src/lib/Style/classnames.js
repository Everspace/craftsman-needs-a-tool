/**
 * Smooshes classnames together
 * @param names Array of classnames
 */
export default (...names) => {

  let uniqueNames = []

  names.forEach(name => {
    if (!uniqueNames.includes(name) && name) {
      uniqueNames.push(name)
    }
  })

  return uniqueNames.join(' ')
}
