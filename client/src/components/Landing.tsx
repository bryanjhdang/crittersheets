import { Text } from "./Typography"

export const Landing = () => {
  return (
    <>
      <AboutCritterSheets />
      <AboutMausritter />
      <HowToUse />
      <Support />
    </>
  )
}

const AboutCritterSheets = () => {
  return (
    <>
      <Text>CritterSheets is a lightweight and free online tool to keep track of character sheets for the online tabletop RPG Mausritter. This is not affiliated with Mausritter or Losing Games as official content in any way.</Text>
    </>
  )
}

const AboutMausritter = () => {
  return (
    <>
      <Text>Mausritter is an easy to pick up game where you explore the world as mice adventurers. By using wacky items and magic to find your way, there is a unique physical card-based inventory system reminiscent of Resident Evil to keep things fun.</Text>
    </>
  )
}

const HowToUse = () => {
  return (
    <>
      <Text>CritterSheets aims to bridge the gap between not having the physical box copy by giving an alternative online way to play the game.</Text>
      <Text>By using drag-and-drop equipment slots and quality of life features like dice rolling, quick access to rules, and creating custom components on the fly, hopefully this is a useful tool for you!</Text>
    </>
  )
}

const Support = () => {
  return (
    <>
      <Text>This is a personal project made by two friends so it will always remain free and open-source. We really enjoy Mausritter so we're hoping this can be a tool for new players to easily get into it.</Text>
    </>
  )
}