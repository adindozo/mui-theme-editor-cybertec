import { useContext } from "react";
import { ThemeContext } from "../App";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { X } from "lucide-react";

const GoogleFontsList = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { googlefonts, setGooglefonts } = context;

  const removeFont = (fontUrl: string) => {
    const updatedFonts = googlefonts.filter((font) => font !== fontUrl);
    setGooglefonts(updatedFonts);
    // localStorage.setItem("googlefonts", JSON.stringify(updatedFonts));
  };

  if (!googlefonts) {
    return <p>Loading...</p>;
  }
  console.log(googlefonts);

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      {googlefonts.length > 0 && <h3>Added Google Fonts:</h3>}
      {googlefonts.length === 0 ? (
        <p>No Google Fonts added.</p>
      ) : (
        googlefonts.map((fontUrl, index) => {
          const fontName =
            new URL(fontUrl).searchParams.get("family") || "Unknown Font";

          return (
            <Card
              key={index}
              style={{ display: "flex", alignItems: "center", padding: "10px" }}
            >
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6">
                  {fontName.replace(/\+/g, " ")}
                </Typography>
              </CardContent>
              <IconButton onClick={() => removeFont(fontUrl)}>
                <X />
              </IconButton>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default GoogleFontsList;
