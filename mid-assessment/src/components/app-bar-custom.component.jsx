import { Toolbar, AppBar, Typography, Box } from "@mui/material";

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
                <Box>
                    <Typography variant="p" fontSize="15px" fontWeight={300}>What's new</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

const AppBarStyling = {
    width: `calc(100% - ${255}px)`,
    position: "absolute",
    marginLeft: 255,
    height: 60,
    background: "white",
    boxShadow: "none"
};

const ToolbarStyling = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingRight: 37,
    paddingBottom: 20,
    paddingLeft: 37,
};

export default AppBarCustom;