import React, { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "codemirror";
import { css } from "@codemirror/lang-css";

const CustomCssEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const styleTagId = "custom-css-style";

  useEffect(() => {
    const savedCss = localStorage.getItem("customCSS") || "";

    const state = EditorState.create({
      doc: savedCss,
      extensions: [
        basicSetup,
        css(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const newCss = update.state.doc.toString();
            applyGlobalCss(newCss);
            // localStorage.setItem("customCSS", newCss);
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current!,
    });

    return () => {
      view.destroy(); // Clean up editor instance on unmount
    };
  }, []);

  const applyGlobalCss = (cssCode: string) => {
    let styleTag = document.getElementById(styleTagId);

    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleTagId;
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = cssCode;
  };

  return (
    <div>
      <h3>Custom CSS</h3>
      <div
        onKeyDown={(e) => e.stopPropagation()}
        ref={editorRef}
        style={{ border: "1px solid #ddd", minHeight: "200px" }}
      ></div>
    </div>
  );
};

export default CustomCssEditor;
