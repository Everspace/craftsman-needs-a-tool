import { atom } from "jotai"
import { RollState } from "lib/dice"

export const targetNumberAtom = atom(7)
export const doubleAtom = atom(10)
export const diceAtom = atom(10)
export const difficultyAtom = atom(0)
export const terminusAtom = atom(1)
export const targetAtom = atom(5)
export const rerollAtom = atom<number[]>([])
export const autosuccessAtom = atom(0)

export const rollstateAtom = atom<RollState, RollState>(
  get => {
    const targetNumber = get(targetNumberAtom)
    const double = get(doubleAtom)
    const dice = get(diceAtom)
    const difficulty = get(difficultyAtom)
    const terminus = get(terminusAtom)
    const target = get(targetAtom)
    const reroll = get(rerollAtom)
    const autoSuccesses = get(autosuccessAtom)
    return {
      targetNumber,
      double,
      dice,
      difficulty,
      terminus,
      target,
      reroll,
      autoSuccesses,
    }
  },
  (get, set, update) => {
    const {
      targetNumber,
      double,
      dice,
      difficulty,
      terminus,
      target,
      reroll,
      autoSuccesses,
    } = update

    set(targetNumberAtom, targetNumber)
    set(doubleAtom, double)
    set(diceAtom, dice)
    set(difficultyAtom, difficulty)
    set(terminusAtom, terminus)
    set(targetAtom, target)
    set(rerollAtom, reroll)
    set(autosuccessAtom, autoSuccesses)
  },
)
