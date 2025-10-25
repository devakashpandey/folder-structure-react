const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now().toString(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let newNode = [];
    newNode = tree?.items?.map((nod) =>
      insertNode(nod, folderId, item, isFolder)
    );

    return { ...tree, items: newNode };
  }

  const updateNode = (tree, nodeId, newName) => {
    if (tree.id === nodeId) {
      tree.name = newName;
      return tree;
    }

    const updatedNodes = tree?.items?.map((nod) =>
      updateNode(nod, nodeId, newName)
    );
    return { ...tree, items: updatedNodes };
  };
  const deleteNode = (tree, nodeId) => {
    const filteredItems = tree?.items
      ?.filter((item) => item.id !== nodeId)
      ?.map((nod) => deleteNode(nod, nodeId));

    return { ...tree, items: filteredItems };
  };

  return { insertNode, updateNode, deleteNode };
};

export default useTraverseTree;
