import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem
} from "@mui/material";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { withRouter } from "react-router-dom";

const urlBasedOnLinkText = text => text.toLowerCase().split(" ").join("-");

const DrawerItem = ({ icon, text, children, handleClick, history }) => {
    const ListItemButtonStyling = {
        "> *": { pointerEvents: "none" }
    };

    const handleClickThenPushToRoute = event => {
        if (handleClick) {
            handleClick(event);
        }

        const toUrl = urlBasedOnLinkText(text);

        // send to link built by the following helper function
        history.push(
            toUrl === "dashboard" ? "/" : toUrl,
            "ALLOW"
        );
    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClickThenPushToRoute} sx={ListItemButtonStyling}>
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

export default withRouter(DrawerItem);