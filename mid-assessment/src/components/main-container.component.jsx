import { Box } from "@mui/material";
import WelcomeContainer from "./welcome-container.component";
import ContentContainer from "./content-container.component";

const MainContainer = () => {
    return (
        <Box id="main-container" sx={MainContainerStyling}>
            <WelcomeContainer />
            <ContentContainer />
        </Box>
    )
};

const MainContainerStyling = {
    position: "absolute",
    left: 255,
    width: `calc(100vw - ${255}px)`,
    top: 60,
    height: "auto",
};

export default MainContainer;