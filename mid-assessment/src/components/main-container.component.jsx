import { Box } from "@mui/material";
import DashboardPage from "../pages/dashboard.page";
import LinkPage from "../pages/link.page";
import { Switch, Route } from "react-router-dom";

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
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/*" component={LinkPage} />
            </Switch>
        </Box>
    )
};

export default MainContainer;