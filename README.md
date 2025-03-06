# Material-UI Theme Editor

## Overview

The **Material-UI Theme Editor** is a full-featured theme customization tool built with React and TypeScript. It allows users to dynamically modify every aspect of a Material-UI theme in real time, including colors, typography, spacing, and component overrides. The customized theme is saved and persists across sessions.

## Live Preview

- A preview of the default Material-UI theme is available at `/`
- The full theme editor interface is accessible at `/customize`, where users can modify theme settings and see live updates.

## Features

### **Theme Editor Functionality**

✅ **Color Customization:** Modify all color properties in the Material-UI palette, including background and text colors. ✅ **Typography Settings:**

- Change font family (upload or link to new fonts via Google Fonts).
- Modify font sizes for headings (h1–h6), body text, and captions.
- Adjust font weights and letter spacing. ✅ **Spacing & Breakpoints:**
- Customize the spacing scale (e.g., 4px, 8px, etc.).
- Edit breakpoints for responsive design (xs, sm, md, lg, xl). ✅ **Component Overrides:** Modify default styles of Material-UI components (e.g., Buttons, AppBar, TextField). ✅ **Custom CSS Injection:** Add global CSS styles via an embedded editor (auto-saved without a save button). ✅ **Dark & Light Mode Toggle:**
- Fully independent customization for dark and light themes.
- Seamlessly switch between themes with saved settings. ✅ **Font Management:**
- Upload custom fonts or input a Google Font URL.
- Apply loaded fonts dynamically. ✅ **Export & Import Theme:**
- Export the current theme configuration as a JSON file.
- Import a JSON theme to apply saved settings. ✅ **Persistent Storage:**
- Theme settings are saved to local storage and persist between sessions.

## **Editor UI Layout**

### **Customization Panel (**\`\`**)**

- **Left Sidebar:**
  - Modify theme colors, typography, spacing, and component overrides.
  - Upload Google Fonts (one per link) and apply them.
  - Manage loaded fonts.
- **Top Panel:**
  - **Light/Dark Mode Toggle:** Switch between theme modes (each has independent settings).
  - **Upload/Download JSON:** Export or import a theme configuration.
  - **Reset Theme:** Revert to the default Material-UI theme.
  - **Save Theme:** Write current settings to local storage for persistence.
  - **Custom CSS Editor:** Auto-saves without requiring a save button.

## **Setup Instructions**

### **Requirements**

- Node.js (v16 or later)
- npm or yarn

### **Installation**

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/mui-theme-editor.git
   cd mui-theme-editor
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open `http://localhost:5173/` in your browser.

## **Technical Stack**

- **Frontend:** React + TypeScript
- **Styling:** Material-UI v5
- **State Management:** React Context
- **Build Tooling:** Vite
- **Additional Libraries:**
  - `@mui/lab` (for advanced UI components)
  - `react-color` (for color pickers)
  - `CodeMirror` or `Monaco Editor` (for CSS editing)

## **Contributing**

Pull requests and issues are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit them.
4. Push to your fork and submit a PR.


---

Let us know if you have any questions or need additional features! 🚀

