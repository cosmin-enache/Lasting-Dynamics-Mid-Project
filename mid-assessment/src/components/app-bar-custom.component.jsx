import { Toolbar, AppBar, Typography, Box } from "@mui/material";

// Icons / Images
import ZapIcon from "../assets/images/zap-icon.svg";

const AppBarCustom = () => {
    return (
        <AppBar
            sx={AppBarStyling}
        >
            <Toolbar style={ToolbarStyling}>
                <Typography
                    variant="p"
                    fontSize="17px"
                    fontWeight={500}
                    lineHeight="22px"
                >Dashboard</Typography>
                <Box sx={TopRightContentBoxStyling}>
                    <img style={ZapIconStyling} src={ZapIcon} alt="zap icon" />
                    <Typography variant="p" fontSize="15px" fontWeight={300}>What's new</Typography>
                    <Typography variant="body1" sx={NotificationBubbleStyling}>
                        2
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

const AppBarStyling = {
    width: `calc(100% - ${255}px)`,
    position: "fixed",
    marginLeft: 255,
    height: 60,
    background: "white",
    boxShadow: "none"
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