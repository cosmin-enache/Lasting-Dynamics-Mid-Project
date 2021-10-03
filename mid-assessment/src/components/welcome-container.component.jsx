import { Box, Typography, Link } from "@mui/material";
import ExternalLinkIcon from "../assets/images/external-link-icon.svg";

const WelcomeContainer = () => {
    return (
        <Box id="welcome-container" sx={WelcomeContainerStyling}>
            <Typography
                sx={WelcomeHeadingStyling}
                variant="p"
            >
                Welcome Mario!
            </Typography>
            <Link sx={WelcomeLinkStyling}>
                app.vetrinalive.it/fenoh-store
                <img src={ExternalLinkIcon} alt="external link icon" />
            </Link>
        </Box>
    )
};

const WelcomeContainerStyling = {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(180deg, #21B8F9 0%, rgba(33, 184, 249, 0) 132.05%)",
    height: 182
};

const WelcomeHeadingStyling = {
    fontSize: 32,
    fontWeight: 500,
    lineHeight: "39px",
    display: "block",
    pt: "40px",
    pl: "37px",
    color: "white"
};

const WelcomeLinkStyling = {
    color: "#fff",
    lineHeight: "12px",
    textDecorationColor: "rgba(255, 255, 255, 0.5)",
    pt: "48px",
    height: "22px",
    height: "10px",
    cursor: "pointer",
    "> img": {
        position: "relative",
        top: "5px",
        paddingLeft: "16px",
        paddingRight: "38px"
    }
};

export default WelcomeContainer;