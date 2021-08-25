/** @jsxImportSource @emotion/react */
import "twin.macro"
import { rollStateAtom } from "components/page/Probability/state"
import { useUpdateAtom } from "jotai/utils"
import Button from "components/atoms/Button"
import { ButtonBlock } from "../ButtonBlock"

const DragonBlooded = () => {
  const setRollState = useUpdateAtom(rollStateAtom)
  return (
    <ButtonBlock label="Dragon Blooded">
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 10 + 5 + 1 + 1,
            reroll: [6],
            willpower: false,
          })
        }
      >
        Brawl
      </Button>
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 10 + 5 + 1 + 1,
            willpower: false,
          })
        }
      >
        Die Excellency
      </Button>
      <Button
        tw="m-1"
        colour="secondary"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 10 + 1,
            autoSuccesses: 3,
            willpower: false,
          })
        }
      >
        Success Excellency
      </Button>
    </ButtonBlock>
  )
}
const Solar = () => {
  const setRollState = useUpdateAtom(rollStateAtom)
  return (
    <ButtonBlock label="Solar">
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 21,
            willpower: true,
          })
        }
      >
        Max
      </Button>
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 5 + 5 + 1 + 10 - 2,
            autoSuccesses: 1,
            reroll: [1],
            willpower: false,
          })
        }
      >
        Excellent Strike
      </Button>
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 5 + 5 + 10 + 1 + 1 + 5,
            double: 7,
            autoSuccesses: 1,
            reroll: [1, 10],
            willpower: true,
          })
        }
      >
        Craft Supernal 6power
      </Button>
    </ButtonBlock>
  )
}

const Lunar = () => {
  const setRollState = useUpdateAtom(rollStateAtom)
  return (
    <ButtonBlock label="Lunar">
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Attribute + Attribute + Other Attribute
            dice: 5 + 10,
            willpower: true,
          })
        }
      >
        0 Ability Max
      </Button>
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 5 + 3 + 10 + 1,
            willpower: true,
          })
        }
      >
        Ability 3 Max
      </Button>
      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 5 + 5 + 10 + 1,
            willpower: true,
          })
        }
      >
        Max
      </Button>

      <Button
        colour="secondary"
        tw="m-1"
        onClick={() =>
          setRollState({
            // Ability + Specialty
            dice: 5 + 5 + 10 + 1,
            double: 7,
            reroll: [1],
            willpower: true,
          })
        }
      >
        Craft e3
      </Button>
    </ButtonBlock>
  )
}

export function PresetPools() {
  return (
    <div>
      <Solar />
      <Lunar />
      <DragonBlooded />
    </div>
  )
}
