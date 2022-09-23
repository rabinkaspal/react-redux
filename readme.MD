# Setting up React Ecosystem from Scratch

**Create Folder "React-Ecosystem"**

Run following command in terminal to create `package.json` file

    npm init -y

## **ES6 support**

run following command:

    npm instal @babel/core @babel/cli @babel/preset-env @babel/preset-react

### Create `.babelrc` file.

Tell babel transpiler what presets and plugins to use to transpile our files

    {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
    }

## Install React and React DOM

Run `npm install react react-dom`

# src

Inside `src` folder create `index.js`, `App.js` and `App.css`

Inside `App.js`:

```
import React from "react";
import "./App.css";

const App = () => {
    <div className="App">
        <h1>Hello, World.</h1>
    </div>;
};

```

# Setting up Webpack to build and serve our app

What does webpack do?

-   convert ES6 and JSX in src folder to common JS
-   host our public directory, so that it can be viewed in browser

### Install packages for webpack

Run following command:

    npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
