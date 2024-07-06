import { Link } from "react-router-dom"
import { Text } from "../Typography"

export const Landing = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <AboutCritterSheets />
        <AboutMausritter />
        <HowToUse />
        <Support />
      </div>
      <div className="">
        <SheetActions />
      </div>
    </div>
  )
}

const AboutCritterSheets = () => {
  return (
    <>
      <Text>Critter Sheets is a lightweight and free online tool to keep track of character sheets for the online tabletop RPG Mausritter. This is not affiliated with Mausritter or Losing Games as official content in any way.</Text>
    </>
  )
}

const AboutMausritter = () => {
  return (
    <>
      <Text>Mausritter is an easy to pick up game where you explore the world as mice adventurers. By using wacky items and strange magics to navigate the big world, there is a unique physical card-based inventory system to keep things limited, but fun.</Text>
    </>
  )
}

const HowToUse = () => {
  return (
    <>
      <Text>Critter Sheets aims to bridge the gap of not having the physical box copy by giving an alternative online way to play the game.</Text>
      <Text>By using drag-and-drop equipment slots and quality of life features like dice rolling, quick access to rules, and creating custom components on the fly, hopefully this is a useful tool for you!</Text>
    </>
  )
}

const Support = () => {
  return (
    <>
      <Text>This is a personal project so it will always remain free and open-source. We really enjoy Mausritter so we're hoping this can be a tool for players to easily get into it.</Text>
    </>
  )
}

const SheetActions = () => {
  return (
    <div className="flex flex-col">
      <Link to="/create">Create Character</Link>
      <Link to="/sheet">Load Character</Link>
    </div>
  )
}