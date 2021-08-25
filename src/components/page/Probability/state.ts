import { atom } from "jotai"
import { allFaces, RollState } from "lib/dice"

export const targetNumberAtom = atom(7)
export const doubleAtom = atom(10)
export const diceAtom = atom(10)
export const difficultyAtom = atom(0)
export const terminusAtom = atom(1)
export const targetAtom = atom(5)
export const rerollAtom = atom<number[]>([])
export const willpowerAtom = atom(false)
export const toggleRerollAtom = atom<Record<number, boolean>, number>(
  get => {
    const reroll = get(rerollAtom)
    return allFaces.reduce((memo, num) => {
      memo[num] = reroll.includes(num)
      return memo
    }, {} as Record<number, boolean>)
  },
  (get, set, update) => {
    const reroll = get(rerollAtom)
    if (reroll.includes(update)) {
      return set(
        rerollAtom,
        reroll.filter(n => n !== update),
      )
    }
    set(rerollAtom, [...reroll, update])
  },
)

export const autosuccessAtom = atom(0)

export const rollstateAtom = atom<RollState>(get => {
  const targetNumber = get(targetNumberAtom)
  const double = get(doubleAtom)
  const dice = get(diceAtom)
  const difficulty = get(difficultyAtom)
  const terminus = get(terminusAtom)
  const target = get(targetAtom)
  const reroll = get(rerollAtom)
  const wp = get(willpowerAtom)
  const autoSuccesses = get(autosuccessAtom) + (wp ? 1 : 0)
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
})

export const defaultRollState: RollState = {
  targetNumber: 7,
  double: 10,
  dice: 10,
  difficulty: 0,
  terminus: 1,
  target: 5,
  reroll: [],
  autoSuccesses: 0,
}
