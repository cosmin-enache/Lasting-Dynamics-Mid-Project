import { useState } from "react";

import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { DrawerItemCanExpand } from "./drawer-item.component";

const DrawerExpandable = ({ text, icon, children, handleClick }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = target => {
        const nextValue = !open;

        if (nextValue) {
            target.classList.add("active-drawer-item");
        }

        setOpen(nextValue);
    };

    const combinedHandleClick = ({ target }) => {
        handleClick();
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