import { useState } from "react";

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DrawerItemCanExpand } from "./drawer-item.component";

const DrawerExpandable = ({ text, icon, children, handleClick }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = target => {
        setOpen(!open);
    };

    const combinedHandleClick = ({ target }) => {
        if (handleClick) handleClick(target);
        toggleOpen(target);
    };

    return (
        <>
            <DrawerItemCanExpand icon={icon} text={text} expanded={open} handleClick={combinedHandleClick} />
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={DrawerSubItemsStyling}>
                    {children}
                </List>
            </Collapse>
        </>
    )
};

const DrawerSubItemsStyling = {
    "> *": {
        background: "#E9F8FE"
    },
};

export default DrawerExpandable;