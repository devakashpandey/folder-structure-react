const fileExplorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "index.html",
          isFolder: false,
        },
        {
          id: "4",
          name: "index.css",
          isFolder: false,
        },
      ],
    },

    {
      id: "5",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "6",
          name: "App.jsx",
          isFolder: false,
        },
        {
          id: "7",
          name: "main.jsx",
          isFolder: false,
        },
        {
          id: "8",
          name: "assets",
          isFolder: true,
          items: [
            {
              id: "9",
              name: "react.svg",
              isFolder: false,
            },
            {
              id: "10",
              name: "vite.svg",
              isFolder: false,
            },
          ],
        },

        {
          id: "11",
          name: "components",
          isFolder: true,
          items: [
            {
              id: "12",
              name: "FileExploerer.jsx",
              isFolder: false,
            },
            {
              id: "13",
              name: "FileFolderName.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ], // aray of objects of files and folders
};

export default fileExplorer;
