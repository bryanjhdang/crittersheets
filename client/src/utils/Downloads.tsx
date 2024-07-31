export const saveTemplateAsFile = (filename: string, dataObjToWrite: string) => {
  const handleDownload = () => {
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