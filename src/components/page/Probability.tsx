/** @jsxImportSource @emotion/react */
import tw from "twin.macro"
import Material from "components/atoms/Material"
import ProbabilityDisplay from "components/page/Probability/ProbabilityDisplay"
import { grey } from "styles/Colors"
import {
  difficultyAtom,
  targetNumberAtom,
  terminusAtom,
  autosuccessAtom,
  diceAtom,
  toggleRerollAtom,
  doubleAtom,
  willpowerAtom,
  challengeStateAtom,
  rollStateAtom,
  artifactDifficulties,
  targetAtom,
} from "components/page/Probability/state"
import { useUpdateAtom, useAtomValue } from "jotai/utils"
import Incrementer from "components/molecules/Incrementer"
import { ToggleButton } from "components/molecules/ToggleButton"
import InteractiveGroup from "components/atoms/InteractiveGroup"
import { allFaces } from "lib/dice"
import { useAtom } from "jotai"
import { useCallback, useState } from "react"
import Button from "components/atoms/Button"
import { PresetPools } from "./Probability/PresetPools"
import {
  ButtonHolderPanel,
  Label,
  ButtonBlock,
  InnerBlock,
} from "./ButtonBlock"

// const round = (number, decimals) => Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)

const ProbabilityPage = () => {
  const willpower = useAtomValue(willpowerAtom)
  const setWillpower = useUpdateAtom(willpowerAtom)
  const setRollState = useUpdateAtom(rollStateAtom)
  const setChallengeState = useUpdateAtom(challengeStateAtom)
  const toggleWP = useCallback(() => setWillpower(wp => !wp), [setWillpower])
  const [rerollState, toggleRerollState] = useAtom(toggleRerollAtom)
  const [showPresets, setShowPresets] = useState(false)
  const toggleShowPreset = () => setShowPresets(x => !x)

  return (
    <div css={grey.grey500.cssClass}>
      <Material rounded spaced css={grey.grey400.cssClass}>
        <ProbabilityDisplay />
        <ButtonHolderPanel>
          <div>
            <Label label="The Challenge" />
            <ButtonBlock label="Difficulty">
              <InteractiveGroup>
                {[1, 3, 5, 7, 10].map(v => (
                  <Button
                    key={v}
                    colour="secondary"
                    onClick={() =>
                      setChallengeState({
                        target: v,
                        difficulty: 0,
                        terminus: 1,
                      })
                    }
                  >
                    {v}
                  </Button>
                ))}
              </InteractiveGroup>
            </ButtonBlock>
            <ButtonBlock label="Artifact">
              <InteractiveGroup>
                {Object.entries(artifactDifficulties).map(
                  ([rating, challenge]) => (
                    <Button
                      key={rating}
                      colour="secondary"
                      onClick={() => setChallengeState(challenge)}
                    >
                      {rating}
                    </Button>
                  ),
                )}
              </InteractiveGroup>
            </ButtonBlock>
          </div>
          <InnerBlock>
            <ButtonBlock label="Target">
              <Incrementer atom={targetAtom} min={1} max={200} />
            </ButtonBlock>
            <ButtonBlock label="Difficulty">
              <Incrementer atom={difficultyAtom} min={0} />
            </ButtonBlock>
            <ButtonBlock label="Terminus">
              <Incrementer atom={terminusAtom} min={1} />
            </ButtonBlock>
          </InnerBlock>
        </ButtonHolderPanel>
        <ButtonHolderPanel>
          <Label label="Dice Pool" />
          <div>
            <ToggleButton on={showPresets} onToggle={toggleShowPreset}>
              Show Presets
            </ToggleButton>
            <Button
              colour="secondary"
              tw="m-1"
              onClick={() => setRollState({})}
            >
              Reset Pools
            </Button>
          </div>
          {showPresets ? <PresetPools /> : null}
          <InnerBlock>
            <ButtonBlock label="Dice">
              <Incrementer atom={diceAtom} min={0} />
            </ButtonBlock>
            <ButtonBlock label="Autosuccesses">
              <Incrementer atom={autosuccessAtom} />
            </ButtonBlock>
            <ButtonBlock>
              <ToggleButton key="wp" on={willpower} onToggle={toggleWP}>
                Willpower
              </ToggleButton>
            </ButtonBlock>
          </InnerBlock>
        </ButtonHolderPanel>
        <ButtonHolderPanel>
          <Label label="Roll Effects" />
          <InnerBlock>
            <ButtonBlock label="Double">
              <Incrementer atom={doubleAtom} min={7} max={10} />
            </ButtonBlock>
            <ButtonBlock label="Target Number">
              <Incrementer atom={targetNumberAtom} min={4} max={9} />
            </ButtonBlock>
            <ButtonBlock label="Reroll">
              <InteractiveGroup css={tw`border-2 border-yellow-700`}>
                {allFaces.map(face => (
                  <ToggleButton
                    key={`${face}s`}
                    on={rerollState[face]}
                    onToggle={() => toggleRerollState(face)}
                  >
                    {face}s
                  </ToggleButton>
                ))}
              </InteractiveGroup>
            </ButtonBlock>
          </InnerBlock>
        </ButtonHolderPanel>
      </Material>
    </div>
  )
}

export { ProbabilityPage }
