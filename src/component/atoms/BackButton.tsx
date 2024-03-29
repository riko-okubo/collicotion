import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onClick={() => navigate(-1)}
      style={{
        color: "#BDBDBD",
        fontFamily: "Caveat, cursive, sans-serif",
        fontSize: "1em",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "2em",
      }}
    >
      <ArrowBackIosIcon style={{ fontSize: "small" }} />
      back
    </IconButton>
  );
};
