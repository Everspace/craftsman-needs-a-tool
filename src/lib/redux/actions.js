/**
 * Poop out a simple action creator.
 *
 * use like `export const addTodo = makeActionCreator(ADD_TODO, text)`
 *
 * @param {string} type
 * @param {string} argNames
 */
export const makeActionCreator = (type, ...argNames) => {
  // This is from the redux documentation
  return (...args) => {
    const action = { type }
    argNames.forEach((_, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}
