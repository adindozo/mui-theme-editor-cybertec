# Material-UI Theme Editor

## Overview

The **Material-UI Theme Editor** is a full-featured theme customization tool built with React and TypeScript. It allows users to dynamically modify every aspect of a Material-UI theme in real time, including colors, typography, spacing, and component overrides. The customized theme is saved and persists across sessions.

## Live Preview

- A preview of the default Material-UI theme is available at `/`
- The full theme editor interface is accessible at `/customize`, where users can modify theme settings and see live updates in real-time dynamically.

## Features

### **Theme Editor Functionality**

✅ **Color Customization:** 
- Modify all color properties in the Material-UI palette, including background and text colors. 

✅ **Typography Settings:**
- Change font family (upload or link to new fonts via Google Fonts).
- Modify font sizes for headings (h1–h6), body text, and captions.
- Adjust font weights and letter spacing. 

✅ **Spacing & Breakpoints:**
- Customize the spacing scale (e.g., 4px, 8px, etc.).
- Edit breakpoints for responsive design (xs, sm, md, lg, xl). 

✅ **Component Overrides:** Modify default styles of Material-UI components (e.g., Buttons, AppBar, TextField). 

✅ **Custom CSS Injection:** Add global CSS styles via an embedded editor (auto-saved without a save button). 

✅ **Reset Theme:** Revert to the default Material-UI theme settings.

✅ **Save Theme:** Persist the current theme settings to local storage.

✅ **Live Preview:** See real-time updates to the theme as you modify settings.

✅ **Dark & Light Mode Toggle:**
- Fully independent customization for dark and light themes.
- Seamlessly switch between themes with saved settings. 

✅ **Font Management:**
- Input a Google Font URL (one font per one url).
- Apply loaded fonts dynamically. 

✅ **Export & Import Theme:**
- Export the current theme configuration as a JSON file.
- Import a JSON theme to apply saved settings.

 ✅ **Persistent Storage:**
- Theme settings are saved to local storage and persist between sessions.

## **Editor UI Layout**

### **Customization Panel **

- **Left Sidebar:**
  - Modify theme colors, typography, spacing, component overrides, etc.
  - Upload Google Fonts (one per link) and apply them.
  - Manage loaded fonts.
  - **Custom CSS Editor:** Auto-saves without requiring a save button.

- **Top Panel:**
  - **Light/Dark Mode Toggle:** Switch between theme modes (each has independent settings).
  - **Upload/Download JSON:** Export or import a theme configuration.
  - **Reset Theme:** Revert to the default Material-UI theme.
  - **Save Theme:** Write current settings to local storage for persistence.

## **Setup Instructions**

### **Requirements**

- Node.js (v16 or later)
- npm or yarn

### **Installation**

1. Clone the repository:
   ```sh
   git clone https://github.com/adindozo/mui-theme-editor-cybertec
   cd mui-theme-editor
   ```
2. Install dependencies:
   ```sh
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
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
- **Styling:** Material-UI 
- **State Management:** React Context
- **Build Tooling:** Vite
- **Additional Libraries:**
  - `@mui/lab` (for advanced UI components)
  - `react-color` (for color pickers)
  - `CodeMirror` (for CSS editing)

## **Contributing**

Pull requests and issues are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit them.
4. Push to your fork and submit a PR.


---

Let me know (contact info at adindozo.info) if you have any questions or need additional features! 🚀

