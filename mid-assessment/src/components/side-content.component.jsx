import { Grid, Box, Typography, Link, Button, Avatar } from "@mui/material";
import InfoCard from "./info-card.component";

// Icons
import ToolIcon from "../assets/images/tool-icon.svg";
import ChevronDownIcon from "../assets/images/chevron-down-icon.svg";
import ArrowRightIcon from "../assets/images/arrow-right-icon.svg";
import ArrowRightGreenIcon from "../assets/images/arrow-right-green-icon.svg";
import TrustPilotIcon from "../assets/images/trustpilot-logo.svg";
import InviteFriendIcon from "../assets/images/users.svg";
import CustomerSupportIcon from "../assets/images/headphones.svg";
import UserAvatarImage from "../assets/images/sample-avatar.png";

const SideContent = () => {
    return (
        <Grid container id="side-content">
            <Grid item md={12} ml="24px" mb="24px">
                <InfoCard>
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={ToolIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStylingSecondary}>
                                Configure your shop
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={FirstCardCenterTopStyling}>
                        <Typography className="percentage" variant="h2">45%</Typography>
                        <Typography className="subheading" variant="p">Completed</Typography>
                    </Box>
                    <Box sx={FirstCardCenterBottomStyling}>
                        <Typography variant="span">
                            Complete all the steps to have a complete shop to best present to your customers.
                        </Typography>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        Complete the setup
                        <img src={ArrowRightIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={12} ml="24px" mb="24px">
                <InfoCard backgroundColor="#000032">
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={TrustPilotIcon} alt="card icon" style={TPIconStyling} />
                        </Box>
                    </Box>
                    <Box sx={FirstCardCenterBottomStyling}>
                        <Typography
                            className="font-white"
                            variant="span"
                            fontSize="17px"
                            lineHeight="22px"
                            fontWeight="400"
                        >
                            Show us your love by leaving a
                            <Typography variant="span" className="font-tp-green"> positive </Typography>
                            review on trust pilot and receive the extension of&nbsp;
                            <Typography variant="span" className="font-white" fontWeight="700">
                                50 additional products
                            </Typography>
                        </Typography>
                    </Box>
                    <Link className="font-tp-green" href="#" sx={CardBottomLinkStyling}>
                        Write a review on Trustpilot
                        <img src={ArrowRightGreenIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={12} ml="24px" mb="24px">
                <InfoCard>
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={InviteFriendIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStylingSecondary}>
                                Invite friend
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={FirstCardCenterBottomStyling}>
                        <Typography
                            variant="body1"
                            fontSize="17px"
                            fontWeight="400"
                            lineHeight="22px"
                            mt="24px">
                            <Typography className="font-tp-green" variant="span" fontWeight="700">
                                Receive 50 products&nbsp;
                            </Typography>
                            by inviting a friend who subscribes to a plan. Your friend will receive a 30% discount coupon valid for any plan.
                        </Typography>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        Start inviting friends!
                        <img src={ArrowRightIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={12} ml="24px" mb="24px">
                <InfoCard>
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={CustomerSupportIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStylingSecondary}>
                                Customer support
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={AvatarBoxStyling}>
                        <Avatar alt="user avatar" src={UserAvatarImage} sx={AvatarStyling} />
                        <Typography variant="span" fontSize="15px">
                            Simone is here to help you.
                        </Typography>
                    </Box>
                    <Button sx={ButtonContainedStyling} variant="contained">Contact us</Button>
                </InfoCard>
            </Grid>
        </Grid>
    )
};

const ButtonContainedStyling = {
    backgroundColor: "#21B8F9",
    padding: "15px 45px 15px 45px",
    fontSize: "14px",
    textTransform: "none",
};

const AvatarBoxStyling = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    mt: "24px",
    mb: "24px"
};

const AvatarStyling = {
    mr: "22px",
    width: "40px",
    height: "40px",
};

const CardTopRowStyling = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};

const CardTitleStylingSecondary = {
    position: "relative",
    top: "-3px",
    fontSize: "22px",
    lineHeight: "27px",
    marginLeft: "18px",
};

const TPIconStyling = {
    marginBottom: "15px",
};

const FirstCardCenterTopStyling = {
    mt: "18px",
    mb: "18px",
    "*": {
        color: "#FFA26B"
    },
    "> .percentage": {
        fontSize: "28px",
        lineHeight: "35px",
        fontWeight: 500,
    },
    "> .subheading": {

    }
};

const FirstCardCenterBottomStyling = {
    mb: "18px",
    "*": {
        fontWeight: 300,
    }
};

const CardBottomLinkStyling = {
    fontWeight: 300,
    color: "#21B8F9",
    textDecoration: "underline",
    fontSize: "16px",
};

const RightArrowIconStyling = {
    position: "relative",
    top: "4px",
    left: "18px",
};

export default SideContent;