import "react"
import { ReactElement, Ref } from "react"

declare module "react" {
  /**
   * Eventually will result in type T
   */
  type Resolvable<T> = T | (() => T | Promise<T>)

  /**
   * initial state can be a function to update lazily on the inital render.
   * @returns [state, setState]
   */
  export const useState: <T>(
    initialState: Resolvable<T> | null,
    memorizer?: any[],
  ) => [T, (newState: any) => void]

  type OptionalCleanupFunction = void | (() => void)

  /**
   * Uses an effect that will run only when the dependantValues change
   *
   * @example
   * useEffect(() => {
   * const subscription = props.source.subscribe()
   *   // Clean up the subscription
   *   return () => { subscription.unsubscribe() }
   * })
   */
  export const useEffect: (
    effectConsumer: () => OptionalCleanupFunction,
    dependantValues?: any[],
  ) => void

  export const useContext: <T>(context: Context<T>) => ProviderProps<T>

  type Reducer = (state: object, action: any) => object

  /**
   * @returns [state, dispatch]
   */
  export const useReducer: (
    reducer: Reducer,
    initialState: object,
  ) => [object, (any) => void]

  export const useCallback
  export const useMemo

  type Reference = { current: Element | null }

  /**
   * returns a mutable ref object that is initialized to the passed argument.
   *
   * The returned object will persist for the full lifetime of the component
   */
  export const useRef: (any) => Reference

  // export const useImperativeMethods
  // export const useMutationEffect
  // export const useLayoutEffect
}
