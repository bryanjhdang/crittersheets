import { Link } from "react-router-dom"
import { Text, Title } from "../Typography"

export const Landing = () => {
  return (
    <div className="flex flex-row">
      <div>
        <AboutCritterSheets />
        <Support />
      </div>
      <div>
        <SheetActions />
      </div>
    </div>
  )
}

const AboutCritterSheets = () => {
  return (
    <>
      <Title>What is CritterSheets?</Title>
      <div className="flex flex-col space-y-4">
        <Text>CritterSheets is a light-weight and free online tool to keep track of character sheets for the tabletop RPG Mausritter. </Text>
        <Text>This is not affiliated as official content with Mausritter or Losing Games in any way, and is solely meant as a hobby project.</Text>
        <Text>Mausritter is a game where you explore the world as mice adventurers. By using wacky items and strange magics to navigate the big world, you must survive by carefully rationing your items in a unique physical card-based inventory system.</Text>
        <Text>By using drag-and-drop equipment slots and features like automatic dice rolling, quick access to rules, and the ability to create custom items on the fly, CritterSheets is here to enhance your Mausritter sessions!</Text>
      </div>
    </>
  )
}

const Support = () => {
  return (
    <>
      <Title>Support</Title>
      <div className="flex flex-col space-y-4">
        <Text>This is a hobby project so it will always remain free and open-source.</Text>
        <Text>If you find any bugs or recommendations with the app, feel free to bring it up in the Issues tab on our public GitHub repository!</Text>
      </div>
    </>
  )
}

const DownloadButton = () => {
  const handleDownload = () => {

    const filename = "test";
    const dataObjToWrite = { name: 'john '};

    const blob = new Blob([JSON.stringify(dataObjToWrite)], { type: "application/json" });
    const link = document.createElement("a");

    link.download = filename;
    link.href = window.URL.createObjectURL(blob);
    link.dataset.downloadurl = ["application/json", link.download, link.href].join(":");

    const evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    });

    link.dispatchEvent(evt);
    link.remove()
  };

  return (
    <button onClick={handleDownload}>
      Download JSON test
    </button>
  );
};

const SheetActions = () => {
  return (
    <div className="space-y-10">
      <div>
        <Title>Start</Title>
        <Text><Link to="/create" className="text-blue-600 hover:underline">New Character</Link></Text>
        <Text><Link to="/sheet" className="text-blue-600 hover:underline">Open Character</Link></Text>
      </div>
      <div>
        <Title>Recent</Title>
        <Text>Looks like there are no characters!</Text>
      </div>
      <DownloadButton />
    </div>
  )
}