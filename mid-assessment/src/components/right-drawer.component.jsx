import { Drawer, ClickAwayListener, Typography } from "@mui/material";

const RightDrawer = ({ rightDrawerOpen, setRightDrawerOpen }) => {
    return (
        <Drawer
            anchor={"right"}
            open={rightDrawerOpen}
            sx={RightDrawerStyling}
        >
            <ClickAwayListener onClickAway={() => setRightDrawerOpen(false)}>
                <Typography variant="h4">What's new?</Typography>
            </ClickAwayListener>
        </Drawer>
    );
};

const RightDrawerStyling = {
    "> .MuiPaper-root": {
        padding: "30px 60px 30px 60px",
    }
};

export default RightDrawer;