import { useEffect, useState, useRef } from "react";

import { Drawer, Box, List, Divider, Typography, MenuItem } from "@mui/material";
import DrawerItem from "./drawer-item.component";
import DrawerExpandable from "./drawer-expandable.component";
import SelectCustom from "./select-custom.component";

// Icons / Images
import VetrinaLogoImage from "../assets/images/vetrina-logo.svg";
import { ReactComponent as HamburgerIcon } from "../assets/images/hamburger-icon.svg";
import { ReactComponent as HomeIcon } from "../assets/images/drawer/home.svg";
import { ReactComponent as ShoppingCartIcon } from "../assets/images/drawer/shopping-cart.svg";
import { ReactComponent as ListIcon } from "../assets/images/drawer/list.svg";
import { ReactComponent as UserIcon } from "../assets/images/drawer/user.svg";
import { ReactComponent as TargetIcon } from "../assets/images/drawer/target.svg";
import { ReactComponent as TruckIcon } from "../assets/images/drawer/truck.svg";
import { ReactComponent as DollarSignIcon } from "../assets/images/drawer/dollar-sign.svg";
import { ReactComponent as BrushIcon } from "../assets/images/drawer/brush.svg";
import { ReactComponent as CreditCardIcon } from "../assets/images/drawer/credit-card.svg";
import { ReactComponent as CogPlanetIcon } from "../assets/images/drawer/cog-planet.svg";
import { ReactComponent as NewAppIcon } from "../assets/images/drawer/new-app.svg";
import { ReactComponent as SettingsIcon } from "../assets/images/drawer/settings.svg";
import { ReactComponent as LogoutIcon } from "../assets/images/drawer/log-out.svg";
import { ReactComponent as HelpCircleIcon } from "../assets/images/drawer/help-circle.svg";
import { ReactComponent as ShareIcon } from "../assets/images/drawer/share.svg";
import { ReactComponent as EyeIcon } from "../assets/images/drawer/eye.svg";

const AppDrawerCustom = () => {
    const [activeListItem, setActiveListItem] = useState(null);
    const itemListRef = useRef();

    const setCurrentActiveListItem = ({ target }) => {
        setActiveListItem(target);
    };

    const clearActiveListItemClass = () => {
        const listItems = itemListRef.current.children;

        for (const listItem of listItems) {
            const listButton = listItem.firstChild;

            if (!listButton) continue;

            listButton.classList.remove("active-drawer-item");
        }
    };

    const setActiveListItemClass = () => {
        if (activeListItem) {
            activeListItem.classList.add("active-drawer-item");
        }
    };

    useEffect(() => {
        clearActiveListItemClass();
        setActiveListItemClass();
    }, [activeListItem]);

    return (
        <Drawer
            sx={DrawerStyling}
            variant="permanent"
            anchor="left"
        >
            <Box sx={LogoBoxStyling}>
                <img src={VetrinaLogoImage} alt="vetrina logo" />
                <HamburgerIcon style={HamburgerIconStyling} className="active" />
            </Box>
            <Box>
                <List ref={itemListRef}>
                    <DrawerItem icon={<HomeIcon />} text="Dashboard" handleClick={setCurrentActiveListItem} />
                    <DrawerExpandable icon={<ShoppingCartIcon />} text="Catalogue" handleClick={clearActiveListItemClass}>
                        <DrawerItem text="Credits" />
                        <DrawerItem text="Technologies" />
                        <DrawerItem text="Applications" />
                        <DrawerItem text="Platforms" />
                    </DrawerExpandable>
                    <DrawerItem icon={<ListIcon />} text="Orders" handleClick={setCurrentActiveListItem}>
                        <Typography sx={OrdersNotificationStyling}>14</Typography>
                    </DrawerItem>
                    <DrawerItem icon={<UserIcon />} text="Customers" handleClick={setCurrentActiveListItem} />
                    <DrawerExpandable icon={<TargetIcon />} text="Marketing" handleClick={clearActiveListItemClass}>
                        <DrawerItem text="Discount codes" />
                        <DrawerItem text="Exit intent" />
                        <DrawerItem text="Checkout Features" />
                        <DrawerItem text="Post-purchase conversion" />
                        <DrawerItem text="Cart abandonment" />
                        <DrawerItem text="Timer checkout" />
                        <DrawerItem text="Sell on Social" />
                        <DrawerItem text="Special Offer" />
                        <DrawerItem text="Seasonal Offer" />
                    </DrawerExpandable>
                    <DrawerItem icon={<TruckIcon />} text="Delivery Options" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<DollarSignIcon />} text="Payment Options" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<BrushIcon />} text="Store Design" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<CreditCardIcon />} text="Subscription" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<CogPlanetIcon />} text="Integrations" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<NewAppIcon />} text="Extensions" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<SettingsIcon />} text="Settings" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<LogoutIcon />} text="Log out" handleClick={setCurrentActiveListItem} />
                    <Divider />
                    <DrawerItem icon={<HelpCircleIcon />} text="Customer Support" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<ShareIcon />} text="Share your shop" handleClick={setCurrentActiveListItem} />
                    <DrawerItem icon={<EyeIcon />} text="View your shop" handleClick={setCurrentActiveListItem} />
                </List>
            </Box>
            <Box sx={SelectYourShopBoxStyling}>
                <Typography variant="body1" mb="22px">
                    Select your shop
                </Typography>
                <SelectCustom label="Fenoh Store">
                    <MenuItem value={0}>App Store</MenuItem>
                    <MenuItem value={1}>Google Play</MenuItem>
                </SelectCustom>
            </Box>
        </Drawer>
    );
};

const SelectYourShopBoxStyling = {
    padding: "18px",
};

const OrdersNotificationStyling = {
    position: "relative",
    left: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00C48C",
    color: "white",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
};

const HamburgerIconStyling = {
    width: "26px",
    height: "26px",
};

const LogoBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "75px",
    padding: "30px 24px 30px 24px",
};

const DrawerStyling = {
    width: 255,
    flexShrink: 0,
    overflowY: "scroll",
    '& .MuiDrawer-paper': {
        position: "fixed",
        width: 255,
        height: "100vh",
    },
};

export default AppDrawerCustom;