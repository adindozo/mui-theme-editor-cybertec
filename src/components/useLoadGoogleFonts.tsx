import { useEffect } from "react";

const useLoadGoogleFonts = (fontUrls: string[]) => {
  useEffect(() => {
    fontUrls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    });
  }, [fontUrls]);
};

export default useLoadGoogleFonts;
