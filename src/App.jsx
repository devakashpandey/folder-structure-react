import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FileExplorer } from "./components/FileExplorer";
import fileExplorer from "./components/FileFolderName";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [fileExplorerData, setFileExplorerData] = useState(fileExplorer);

  const { insertNode, updateNode, deleteNode } = useTraverseTree();

  // insert node func
  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedTree = insertNode(fileExplorerData, folderId, item, isFolder);

    setFileExplorerData({ ...updatedTree });
  };

  // update node func
  const handleUpdateNode = (nodeId, newName) => {
    const newTree = updateNode(fileExplorerData, nodeId, newName);

    setFileExplorerData({ ...newTree });
  };

  // delete node func
  const handleDeleteNode = (nodeId) => {
    const newTree = deleteNode(fileExplorerData, nodeId);

    setFileExplorerData({ ...newTree });
  };

  return (
    <>
      <div className="app-container">
        {" "}
        <FileExplorer
          explorerData={fileExplorerData}
          handleInsertNode={handleInsertNode}
          handleUpdateNode={handleUpdateNode}
          handleDeleteNode={handleDeleteNode}
        />
      </div>
    </>
  );
}

export default App;
