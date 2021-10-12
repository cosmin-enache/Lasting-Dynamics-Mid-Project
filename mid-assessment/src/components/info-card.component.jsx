import { Card, Box, Typography, Link } from "@mui/material"

import ChevronDownIcon from "../assets/images/chevron-down-icon.svg";
import ExternalLinkBlueIcon from "../assets/images/external-link-blue.svg";

const renderTopRight = (trData) => {
    if (trData.type === "dropdown") {
        return (
            <Box>
                <Typography variant="span" sx={FadedSelectStyling}>{trData.value}</Typography>
                <img src={ChevronDownIcon} alt="down arrow" style={ChevronDownStyling} />
            </Box>
        )
    } else if (trData.type === "link") {
        return (
            <Link href="#" sx={CardBottomLinkStyling}>
                {trData.value}
                <img src={ExternalLinkBlueIcon} alt="right arrow" style={RightArrowIconStyling} />
            </Link>
        )
    }
};

const InfoCard = ({ children, title, titleIcon, topRight, ...otherProps }) => {
    const CombinedStyling = {
        ...CardStyling,
        ...otherProps
    };

    return (
        <Card sx={CombinedStyling}>
            {
                title && titleIcon && (
                    <Box sx={CardTopRowStyling}>
                        <Box>
                            <img src={titleIcon} alt="card icon" />
                            <Typography variant="span" sx={CardTitleStyling}>
                                {title}
                            </Typography>
                        </Box>
                        {
                            topRight && renderTopRight(topRight)
                        }
                    </Box>
                )
            }
            {children}
        </Card>
    )
};

const CardBottomLinkStyling = {
    fontWeight: 300,
    color: "#21B8F9",
    textDecoration: "underline",
    fontSize: "16px",
};

const RightArrowIconStyling = {
    position: "relative",
    top: "5px",
    left: "18px",
};

const ChevronDownStyling = {
    position: "relative",
    top: "2px",
    fontSize: "14px",
};

const FadedSelectStyling = {
    color: "#666666",
    mr: "11px",
    fontSize: "14px",
    fontWeight: 300,
};

const CardTitleStyling = {
    position: "relative",
    top: "-3px",
    fontSize: "22px",
    lineHeight: "27px",
    marginLeft: "18px",
};

const CardTopRowStyling = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};

const CardStyling = {
    boxShadow: "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px"
};

export default InfoCard;