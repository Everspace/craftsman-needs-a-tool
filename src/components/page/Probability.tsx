/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro"
import Material, { Panel } from "components/atoms/Material"
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
} from "components/page/Probability/state"
import { useUpdateAtom } from "jotai/utils"
import Incrementer from "components/molecules/Incrementer"
import { ToggleButton } from "components/molecules/ToggleButton"
import InteractiveGroup from "components/atoms/InteractiveGroup"
import { allFaces } from "lib/dice"
import { useAtom } from "jotai"
import { useCallback } from "react"

// const round = (number, decimals) => Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)

const spacing = css({
  padding: 10,
  margin: 5,
})

const ButtonBlock: React.FC<{ label?: string }> = ({
  label,
  children,
  ...props
}) => (
  <Material
    css={[
      grey.grey300.cssClass,
      {
        display: "inline-block",
      },
      spacing,
    ]}
    {...props}
  >
    {label ? label + ":" : null} {children}
  </Material>
)

const InnerBlock = props => (
  <div css={[grey.grey400.cssClass, spacing]} {...props} />
)

export type ButtonHolderPanelProps = { label?: String; children }

const ButtonHolderPanel: React.FC<ButtonHolderPanelProps> = ({
  label,
  children,
  ...props
}) => (
  <Panel {...props} css={tw`pt-2.5 pb-5`}>
    {label ? <h2 css={spacing}>{label}</h2> : null}
    <InnerBlock>{children}</InnerBlock>
  </Panel>
)

const ProbabilityPage = () => {
  const setWillpower = useUpdateAtom(willpowerAtom)
  const toggleWP = useCallback(() => setWillpower(wp => !wp), [setWillpower])
  const [rerollState, toggleRerollState] = useAtom(toggleRerollAtom)

  return (
    <div css={grey.grey500.cssClass}>
      <Material rounded spaced css={grey.grey400.cssClass}>
        {/* <Panel key="toggle area">
              <Button onClick={()=>this.setState({...defaultRegularState})}>
                Difficulty 5
              </Button>
              <Button onClick={()=>this.setState({...defaultCraftState})}>
                Craft 5 dot Artifact
              </Button>
            </Panel> */}
        {/* TODO: Remember to add in willpower this.stateAutosuccesses += (state.willpower ? 1 : 0) */}
        <ProbabilityDisplay />
        <ButtonHolderPanel label="The Challenge">
          <ButtonBlock label="Target">
            <Incrementer atom={targetNumberAtom} min={1} max={200} />
          </ButtonBlock>
          <ButtonBlock label="Difficulty">
            <Incrementer atom={difficultyAtom} min={0} />
          </ButtonBlock>
          <ButtonBlock label="Terminus">
            <Incrementer atom={terminusAtom} min={1} />
          </ButtonBlock>
        </ButtonHolderPanel>
        <ButtonHolderPanel label="Dice Pool">
          <ButtonBlock label="Dice">
            <Incrementer atom={diceAtom} min={1} />
          </ButtonBlock>
          <ButtonBlock label="Autosuccesses">
            <Incrementer atom={autosuccessAtom} />
          </ButtonBlock>
          <ButtonBlock>
            <ToggleButton key="wp" onToggle={toggleWP}>
              Willpower
            </ToggleButton>
          </ButtonBlock>
        </ButtonHolderPanel>
        <ButtonHolderPanel label="Roll Effects">
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
        </ButtonHolderPanel>
      </Material>
    </div>
  )
}

export { ProbabilityPage }
