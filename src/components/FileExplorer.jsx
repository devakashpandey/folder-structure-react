import React, { useState } from "react";

export const FileExplorer = ({
  explorerData,
  handleInsertNode,
  handleUpdateNode,
  handleDeleteNode,
}) => {
  const [expandItem, setExpandItem] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const [renameInput, setRenameInput] = useState(false);
  const [newName, setNewName] = useState("");

  const addNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const onRename = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleUpdateNode(explorerData.id, e.target.value);
      setRenameInput(false);
    }
  };

  const onDelete = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorerData.id);
  };

  if (explorerData.isFolder) {
    return (
      <div className="main-container">
        <div className="folder" onClick={() => setExpandItem(!expandItem)}>
          <span className="folder-name">
            {expandItem ? "⌄" : "›"} 🗂️ {explorerData.name}
          </span>

          <div className="button-container">
            <button onClick={(e) => addNewFolder(e, true)}>+ Folder</button>
            <button onClick={(e) => addNewFolder(e, false)}>+ File</button>

            <button onClick={onDelete}>🗑️ Delete</button>
          </div>
        </div>

        <div
          className="map-container"
          style={{ display: expandItem ? "block" : "none" }}
        >
          {showInput.visible && (
            <div className="input-container">
              <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                type="text"
                name="input"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                placeholder={
                  showInput.isFolder ? "Enter Folder name" : "Enter File name"
                }
                className="main-input"
                autoFocus
              />
            </div>
          )}

          {explorerData?.items?.map((item) => (
            // <div key={item.id} className="file-container">
            //   <span className="file">📄 {item.name}</span>
            // </div>

            <FileExplorer
              key={item.id}
              explorerData={item}
              handleInsertNode={handleInsertNode}
              handleUpdateNode={handleUpdateNode}
              handleDeleteNode={handleDeleteNode}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="inner-button-container">
        <div className="file">
          📄{" "}
          {renameInput ? (
            <input
              type="text"
              autoFocus
              defaultValue={explorerData.name}
              onKeyDown={onRename}
              onBlur={() => setRenameInput(false)}
            />
          ) : (
            <>
              {" "}
              {explorerData.name} <br />
            </>
          )}
        </div>
        <div className="button-container">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setRenameInput(true);
            }}
          >
            {" "}
            ✏️ Edit
          </button>
          <button onClick={onDelete}>🗑️ Delete</button>
        </div>
      </div>
    );
  }
};
