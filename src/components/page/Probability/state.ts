import { atom } from "jotai"
import { allFaces, ChallengeState, ProbabilityState, RollState } from "lib/dice"

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

export const challengeStateAtom = atom<ChallengeState, ChallengeState>(
  get => {
    const difficulty = get(difficultyAtom)
    const terminus = get(terminusAtom)
    const target = get(targetAtom)
    return {
      difficulty,
      terminus,
      target,
    }
  },
  (get, set, update) => {
    const { difficulty, terminus, target } = update
    set(difficultyAtom, difficulty)
    set(terminusAtom, terminus)
    set(targetAtom, target)
  },
)

export const artifactDifficulties = {
  2: {
    target: 30,
    difficulty: 5,
    terminus: 6,
  },
  3: {
    target: 50,
    difficulty: 5,
    terminus: 6,
  },
  4: {
    target: 75,
    difficulty: 5,
    terminus: 6,
  },
  5: {
    target: 100,
    difficulty: 5,
    terminus: 6,
  },
  "N/A": {
    target: 200,
    difficulty: 5,
    terminus: 6,
  },
}

export const rollStateAtom = atom<
  RollState,
  Partial<RollState & { willpower: boolean }>
>(
  get => {
    const targetNumber = get(targetNumberAtom)
    const double = get(doubleAtom)
    const dice = get(diceAtom)
    const reroll = get(rerollAtom)
    const wp = get(willpowerAtom)
    const autoSuccesses = get(autosuccessAtom) + (wp ? 1 : 0)
    return {
      targetNumber,
      double,
      dice,
      reroll,
      autoSuccesses,
    }
  },
  (get, set, update) => {
    const {
      targetNumber = 7,
      double = 10,
      dice = 10,
      reroll = [],
      autoSuccesses = 0,
      willpower = false,
    } = update
    set(autosuccessAtom, autoSuccesses)
    set(targetNumberAtom, targetNumber)
    set(doubleAtom, double)
    set(diceAtom, dice)
    set(rerollAtom, reroll)
    set(willpowerAtom, willpower)
  },
)

export const probabilityState = atom<ProbabilityState>(get => {
  const challenge = get(challengeStateAtom)
  const roll = get(rollStateAtom)
  return { ...challenge, ...roll }
})
