## 🚀 Deployment Guide: From Local to GitHub Pages

This guide outlines the steps to successfully deploy this React application to GitHub Pages. The key to a smooth deployment is correctly configuring the build and routing to work with a static hosting environment.

-----

### Step 1: Install the `gh-pages` Package

First, you need to install the `gh-pages` package as a development dependency. This tool automates the process of creating a build and pushing it to a special `gh-pages` branch. Run the command locally on terminal

```bash
yarn add gh-pages --dev
```

-----

### Step 2: Configure `package.json` for Deployment

Next, you'll update your `package.json` file to include the project's homepage URL and add the necessary deployment scripts.

1.  **Add `homepage` URL**: Add a `homepage` field to the top-level of your `package.json` file. Replace `<username>` and `<repository-name>` with your GitHub details.

    ```json
    "homepage": "https://<username>.github.io/<repository-name>/",
    ```

2.  **Add Deployment Scripts**: Add the `predeploy` and `deploy` scripts to the `scripts` section. The `predeploy` script runs the build command, and `deploy` pushes the build to the `gh-pages` branch.

    ```json
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "predeploy": "yarn build",
      "deploy": "gh-pages -d build"
    },
    ```

-----

### Step 3: Update React Router for Static Hosting

To fix the `No routes matched location` error, we switched from `BrowserRouter` to `HashRouter`. This is crucial because GitHub Pages is a static server that can't handle client-side routing. `HashRouter` uses the URL hash (`#`) to manage routes, which is ignored by the server.

  - In your main routing file (`App.js`), replace `BrowserRouter` with `HashRouter`.

<!-- end list -->

```jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//...
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
```

-----

### Step 4: Fix Asset Paths

To resolve `404 Not Found` errors for images and other assets, we use the `process.env.PUBLIC_URL` variable. This ensures asset paths are correctly built for both local development and the live GitHub Pages site.

  - For any assets (images, PDFs) in your `public` folder, update the `src` or `href` attribute to use `process.env.PUBLIC_URL`.

<!-- end list -->

```jsx
// For images
<img src={`${process.env.PUBLIC_URL}/assets/profile_photo.jpg`} alt="Profile" />

```

-----

### Step 5: Deploy the Project

Once all the above steps are completed, run a single command to build and deploy your application.

```bash
yarn deploy
```

This command will:

1.  Run the build script (`yarn build`).
2.  Push the contents of the `build` directory to the `gh-pages` branch.

-----

### Step 6: Final GitHub Pages Configuration

After the deployment is complete, go to your GitHub repository and finalize the settings:

1.  Navigate to **Settings** \> **Pages**.
2.  Under "Build and deployment," ensure the **Source** is set to **`gh-pages` branch** and the folder is set to **`/ (root)`**.

Your site will now be live and fully functional at your GitHub Pages URL.
