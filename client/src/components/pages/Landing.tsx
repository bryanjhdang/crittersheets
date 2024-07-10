import { Link } from "react-router-dom"
import { Text, Title } from "../Typography"

export const Landing = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <AboutCritterSheets />
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
      <Title>What is <span className="text-[#0066FF]">CritterSheets?</span></Title>
      <Text>CritterSheets is a light-weight and free online tool to keep track of character sheets for the online TTRPG Mausritter. </Text> 
      <Text>This is not affiliated as official content with Mausritter or Losing Games in any way.</Text>
      <Text>Mausritter is a game where you explore the world as mice adventurers. By using wacky items and strange magics to navigate the big world, you must survive by carefully rationing your items in a unique physical card-based inventory system.</Text>
      <Text>By using drag-and-drop equipment slots and features like automatic dice rolling, quick access to rules, and the ability to create custom items on the fly, CritterSheets is here to enhance your Mausritter sessions!</Text>
    </>
  )
}

const Support = () => {
  return (
    <div>
      <Title>Support</Title>
      <Text>This is a personal project so it will always remain free and open-source. If you find any bugs or recommendations with the app, feel free to bring it up in the Issues tab on our public GitHub repository!</Text>
    </div>
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