import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem
} from "@mui/material";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const DrawerItem = ({ icon, text, children, handleClick }) => {
    const ListItemButtonStyling = {
        "> *": { pointerEvents: "none" }
    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick} sx={ListItemButtonStyling}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={ListItemTextStyling} />
                {children}
            </ListItemButton>
        </ListItem>
    )
};

export const DrawerItemCanExpand = ({ icon, text, expanded, handleClick }) => {
    const ListItemButtonStyling = {
        "> *": { pointerEvents: "none" }
    };

    const renderExpand = () => {
        if (expanded) {
            return <ExpandLess />
        } else if (expanded === false) {
            return <ExpandMore />
        } else return null;
    };
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick} sx={ListItemButtonStyling}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} sx={ListItemTextStyling} />
                {renderExpand()}
            </ListItemButton>
        </ListItem>
    )
};

const ListItemTextStyling = {
    position: "relative",
    left: "-15px",
};

export default DrawerItem;