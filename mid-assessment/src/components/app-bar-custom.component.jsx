import { Toolbar, AppBar, Typography, Box, IconButton, Drawer, ClickAwayListener } from "@mui/material";
import { useState } from "react";
import RightDrawer from "./right-drawer.component";

// Icons / Images
import ZapIcon from "../assets/images/zap-icon.svg";
import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger-icon.svg";

const AppBarCustom = ({ appDrawerState }) => {
    const { appDrawerOpen, setAppDrawerOpen } = appDrawerState;
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

    const AppBarStyling = {
        width: `calc(100% - ${appDrawerOpen ? 0 : 255}px)`,
        position: "fixed",
        marginLeft: appDrawerOpen ? 0 : 255,
        height: 55,
        left: appDrawerOpen && 0,
        background: "white",
        boxShadow: "none",
    };

    return (
        <>
            <AppBar
                sx={AppBarStyling}
            >
                <Toolbar style={ToolbarStyling}>
                    <Box>
                        {
                            appDrawerOpen && (
                                <IconButton onClick={() => setAppDrawerOpen(false)} sx={HamburgerIconStyling}>
                                    <HamburgerIcon />
                                </IconButton>
                            )
                        }
                        <Typography
                            variant="p"
                            fontSize="17px"
                            fontWeight={500}
                            lineHeight="22px"
                        >Dashboard</Typography>
                    </Box>
                    <Box sx={TopRightContentBoxStyling}>
                        <IconButton onClick={() => setRightDrawerOpen(true)}>
                            <img src={ZapIcon} alt="zap icon" />
                        </IconButton>
                        <Typography variant="p" fontSize="15px" fontWeight={300}>What's new</Typography>
                        <Typography variant="body1" sx={NotificationBubbleStyling}>
                            2
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <RightDrawer
                rightDrawerOpen={rightDrawerOpen}
                setRightDrawerOpen={setRightDrawerOpen}
            />
        </>
    )
};

const HamburgerIconStyling = {
    position: "relative",
    left: "-30px",
    top: "-2px",
};

const TopRightContentBoxStyling = {
    position: "relative",
};

const ToolbarStyling = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingRight: 37,
    paddingBottom: 20,
    paddingLeft: 37,
};

const ZapIconStyling = {
    position: "relative",
    top: "6px",
    width: "24px",
    height: "24px",
    marginRight: "3px",
};

const NotificationBubbleStyling = {
    position: "absolute !important",
    right: "-14px",
    top: "-4px",
    borderRadius: "50%",
    backgroundColor: "red",
    color: "white",
    width: "22px",
    height: "22px",
    textAlign: "center",
};

export default AppBarCustom;