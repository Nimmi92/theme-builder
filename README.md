# theme-builder
Theme builder for UI components

## Features
  - Provides a tool to show different state of UI components like buttons.
  - Ability to change attrubutes of a component and see how it will be displayed in the UI.
  - Two themes are available:  Theme Blue, Theme Orange

### Architure
  - `react` and `typescript` to create the front end of this application.
  - `styled-compnents` to provide stylings for the react components. 
  - `webpack` as a module bundler, static files loader.
  - `prettier` as a code formatter
  - `eslint` as a static code analyser for typescript and javascript code.

#### Project structure
  - All the code is placed inside `src` folder.
  - `client` folder has pages of the application
  - `components` folder has reusable components that can be used accross the application.
  - `theme` folder has schema.json which has specifications for theme1(Theme Blue) and theme2(Theme Orange).  It also has `useTheme.ts` file which is used to 
    get the theme, set the theme using `utils/storage.ts`.
  - `utils` folder has the utitlity fuctions that are needed for this application.  `storage.ts` file stores the theme specification in local storage, also used to set the theme.
  - `index.tsx` is the entry file of the application.
  - `App.tsx` is the root component.  It is appened to the `index.html`.


##### How to run the application
  - Requirements: Node version 12+, npm version 6+.
  - `npm i` to install the dependencies
  - `npm start` to start the project on http://localhost:3000/
  - `npm run build` to create a production build
