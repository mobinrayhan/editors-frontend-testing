// import node module libraries
import { Folder2, FolderFill } from "react-bootstrap-icons";
import { File } from "react-feather";
import { v4 as uuid } from "uuid";

export const fileStructureData = [
  {
    id: uuid(),
    name: "GeeksUI",
    desc: "The root folder geeks-nextjs-app-router contains the below project structure of a GeeksUI Next.js application",
    icon: <FolderFill className="text-body" size={20} />,
    children: [
      {
        id: uuid(),
        name: "app",
        desc: "App Router director contains all pages",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "components",
        desc: "All common components",
        icon: <Folder2 className="text-body" size={20} />,
      },

      {
        id: uuid(),
        name: "data",
        desc: "JSON formatted data files",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "helper",
        desc: "It holds the utility functions",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "hooks",
        desc: "It holds custom hooks",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "layout",
        desc: "It contains your app's layouts",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "public",
        desc: "",
        icon: <Folder2 className="text-body" size={20} />,
        children: [
          {
            id: uuid(),
            name: "images",
            desc: "It contains all the images which are used in the theme",
            icon: <Folder2 className="text-body" size={20} />
          },
        ],
      },
      {
        id: uuid(),
        name: "routes",
        desc: "All navigations' route structure",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "store",
        desc: "A store holds the whole Redux state tree of your application",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "styles",
        desc: "All SASS files and folders included in it",
        icon: <Folder2 className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: ".eslintrc.json",
        desc: "Configuration file for ESLint",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: ".gitignore",
        desc: "Git files and folders to ignore",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "app.config.js",
        desc: "Application configuration which includes theme settings",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "jsconfig.json",
        desc: "Configuration file for JavaScript",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "next.config.js",
        desc: "Configuration file for Next.js",
        icon: <File className="text-body" size={20} />,
      },
      {
        id: uuid(),
        name: "package.json",
        desc: "Project dependencies and scripts",
        icon: <File className="text-body" size={20} />,
      },
    ],
  },
];
