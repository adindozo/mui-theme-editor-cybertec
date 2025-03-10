import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";

const AddGoogleFont = () => {
  const handleKeyDown = (event) => {
    event.stopPropagation();
  };

  const context = useContext(ThemeContext);
  const [fontUrl, setFontUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!context) {
    return <p>Loading...</p>;
  }

  const { googlefonts, setGooglefonts } = context;

  const isValidGoogleFontUrl = (url: string) => {
    return /^https:\/\/fonts\.googleapis\.com\/css2\?family=[A-Za-z0-9+,-]+(:[A-Za-z]+(?:,[A-Za-z]+)?@[0-9]+(?:\.\.[0-9]+)?(?:,[0-9]+(?:\.\.[0-9]+)?)*)?(?:&(?:display|subset)=[A-Za-z0-9,_-]+)*$/.test(
      url,
    );
  };

  const handleAddFont = async () => {
    if (!fontUrl.trim()) return;
    setErrorMessage("");

    if (!isValidGoogleFontUrl(fontUrl)) {
      setErrorMessage("Invalid Google Font URL. Please use a valid CSS link.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(fontUrl, { method: "HEAD" });

      if (response.ok) {
        const contentType = response.headers.get("content-type") || "";

        if (contentType.includes("text/css")) {
          if (!googlefonts.includes(fontUrl)) {
            setGooglefonts([...googlefonts, fontUrl]);
          }
          setFontUrl("");
        } else {
          setErrorMessage(
            "Invalid Google Fonts URL. Please use a valid Font CSS link.",
          );
        }
      } else {
        setErrorMessage("Invalid URL. Please provide a valid Google Font URL.");
      }
    } catch (error) {
      setErrorMessage("Network error. Unable to fetch font.");
    }

    setLoading(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "stretch", gap: 1, mt: 2 }}>
        <TextField
          onKeyDown={handleKeyDown}
          sx={{ ml: 2, flexGrow: 1 }}
          label="Google Font URL (one per url)"
          variant="outlined"
          value={fontUrl}
          onChange={(e) => setFontUrl(e.target.value)}
        />
        {loading ? (
          <CircularProgress size={24} sx={{ alignSelf: "center", ml: 1 }} />
        ) : (
          <Button onClick={handleAddFont} variant="contained">
            Add +
          </Button>
        )}
      </Box>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </>
  );
};

export default AddGoogleFont;
