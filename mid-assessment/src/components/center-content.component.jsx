import { Grid, Box, Typography, Link } from "@mui/material";

import InfoCard from "./info-card.component";

// Icons
import EyeIcon from "../assets/images/eye-icon.svg";
import ChevronDownIcon from "../assets/images/chevron-down-icon.svg";
import ArrowRightIcon from "../assets/images/arrow-right-icon.svg";
import ListIcon from "../assets/images/list-icon.svg";

const CenterContent = () => {
    return (
        <Grid container id="center-content" spacing={3}>
            <Grid item md={6}>
                <InfoCard>
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={EyeIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStyling}>
                                Visitors
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="span" sx={FadedSelectStyling}>This month</Typography>
                            <img src={ChevronDownIcon} alt="down arrow" style={ChevronDownStyling} />
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={FirstCardCenterStyling} variant="h2">1824</Typography>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        Do you want more visits? Contact us!
                        <img src={ArrowRightIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={6}>
                <InfoCard>
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={ListIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStylingSecondary}>
                                Orders
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="span" sx={FadedSelectStyling}>This month</Typography>
                            <img src={ChevronDownIcon} alt="down arrow" style={ChevronDownStyling} />
                        </Box>
                    </Box>
                    <Box sx={SecondCardCenterStyling}>
                        <Box className="csFlexbox">
                            <Typography className="csTitle" variant="span">Orders received:</Typography>
                            <Typography className="csValue" variant="span">156</Typography>
                        </Box>
                        <Box className="csFlexbox">
                            <Typography className="csTitle" variant="span">Earnings:</Typography>
                            <Typography className="csValue" variant="span">€ 1893,24</Typography>
                        </Box>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        10 free tips to increase your sales
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

const CardTitleStyling = {
    position: "relative",
    top: "-2px",
    fontSize: "20px",
    lineHeight: "25px",
    marginLeft: "17px",
};

const CardTitleStylingSecondary = {
    position: "relative",
    top: "-3px",
    fontSize: "22px",
    lineHeight: "27px",
    marginLeft: "18px",
};

const FadedSelectStyling = {
    color: "#666666",
    mr: "11px",
    fontSize: "14px",
    fontWeight: 300,
};

const FirstCardCenterStyling = {
    fontSize: "42px",
    lineHeight: "60.82px",
    fontWeight: 500,
    height: "70px",
    mt: "24px",
    mb: "24px",
};

const SecondCardCenterStyling = {
    width: "100%",
    mt: "22px",
    mb: "20px",
    "> .csFlexbox": {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        mb: "14.95px",
    },
    ".csTitle": {
        color: "#6C7C8C",
        fontSize: "16px",
        lineHeight: "22px",
        fontWeight: "300",
        fontStyle: "normal",
    },
    ".csValue": {
        fontSize: "16px",
        lineHeight: "22px",
        mr: "6px",
    }
};

const ChevronDownStyling = {
    position: "relative",
    top: "2px",
    fontSize: "14px",
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

export default CenterContent;