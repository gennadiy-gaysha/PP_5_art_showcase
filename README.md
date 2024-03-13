Downgrading react and react-dom to avoid compatibility issues.

To avoid compatibily issues with React Router Library a previous versions of react and react-dom, i. e. `"^17.0.2"` were installed instead of `react@18 react-dom@18`. The steps were as follows:

- Create a New React App:
  `npx create-react-app .`
  This command creates a new React application in a root folder of a project with the latest version of React.

- Uninstall the current versions of react and react-dom:
  `npm uninstall react react-dom`

- To avoid dependency conflict between the downgradeded version of React project and the version required by `@testing-library/react@13.4.0`, uninstall it using the command:
  `npm uninstall @testing-library/react`

- Install the specific version of react and react-dom:
  `npm install react@17.0.2 react-dom@17.0.2`

- Install downgraded version `@testing-library/react` compatible with React 17:
  `npm install @testing-library/react@^12.0.0`

- Ensure React 17 is installed. Verify your React version in package.json:

  ```
  "dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  ...
  }
  ```

- Manually adjust index.js to use ReactDOM.render instead of ReactDOM.createRoot as shown below:

  ```
  ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
  ```

This will be fully compatible with `react-router-dom@5.3.0`
