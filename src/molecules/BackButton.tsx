import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from "@mui/material";

export const BackButton = () => {
    const navigate = useNavigate();

    return(
        <IconButton 
        onClick={() => navigate('/')} 
        style={{color: "#BDBDBD",
                fontSize: "small",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto", 
                padding: "2em"}} >
        <ArrowBackIosIcon 
            style={{fontSize: "small"}} />    
        back
        </IconButton>
    )
}