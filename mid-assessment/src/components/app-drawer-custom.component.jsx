import { Drawer } from "@mui/material";

const AppDrawerCustom = () => {
    return (
        <Drawer
            sx={DrawerStyling}
            variant="permanent"
            anchor="left"
        ></Drawer>
    );
};

const DrawerStyling = {
    width: 255,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        position: "relative",
        width: 255,
        height: 1152,
    },
};

export default AppDrawerCustom;