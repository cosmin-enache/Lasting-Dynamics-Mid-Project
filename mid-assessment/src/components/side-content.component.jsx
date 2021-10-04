import { Grid, Box, Typography, Link } from "@mui/material";
import InfoCard from "./info-card.component";

// Icons
import ToolIcon from "../assets/images/tool-icon.svg";
import ChevronDownIcon from "../assets/images/chevron-down-icon.svg";
import ArrowRightIcon from "../assets/images/arrow-right-icon.svg";

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
                            <img src={ToolIcon} alt="card icon" />
                            <Typography className="font-white" variant="span" sx={CardTitleStylingSecondary}>
                                Configure your shop
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={FirstCardCenterBottomStyling}>
                        <Typography className="font-white" variant="span">
                            Complete all the steps to have a complete shop to best present to your customers.
                        </Typography>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        Complete the setup
                        <img src={ArrowRightIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
        </Grid>
    )
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