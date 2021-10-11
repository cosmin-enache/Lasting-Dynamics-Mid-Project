import { Box } from "@mui/material";
import WelcomeContainer from "./welcome-container.component";
import ContentContainer from "./content-container.component";

const MainContainer = ({ appDrawerOpen }) => {
    const MainContainerStyling = {
        position: "absolute",
        left: `${appDrawerOpen ? 55 : 255}px`,
        width: `calc(100vw - ${appDrawerOpen ? 55 : 255}px)`,
        top: 55,
        height: "auto",
        background: "#F8F9FB",
        zIndex: 2,
        transition: "0.075s",
    };

    return (
        <Box id="main-container" sx={MainContainerStyling}>
            <WelcomeContainer />
            <ContentContainer />
        </Box>
    )
};

export default MainContainer;