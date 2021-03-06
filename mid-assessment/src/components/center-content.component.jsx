import { Grid, Box, Typography, Link } from "@mui/material";

import InfoCard from "./info-card.component";
import { useEffect, useState } from "react";
import { fetchNewsData } from "../news-api.interface";

// Icons / Images
import EyeIcon from "../assets/images/eye-icon.svg";
import ArrowRightIcon from "../assets/images/arrow-right-icon.svg";
import ArrowRightWhiteIcon from "../assets/images/arrow-right-white-icon.svg";
import ListIcon from "../assets/images/list-icon.svg";
import iPhoneImage from "../assets/images/iphone-12.svg";
import AppleStoreIcon from "../assets/images/apple-store.svg";
import GooglePlayIcon from "../assets/images/google-play.svg";
import ExtensionsMpIcon from "../assets/images/extensions-marketplace.svg";
import DomainImage from "../assets/images/domain-www.svg";
import FiftyProducts from "../assets/images/products-50+.svg";
import FileTextIcon from "../assets/images/file-text.svg";
import NewsCard from "./news-card.component";

const CenterContent = () => {
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {
        fetchNewsData(setNewsData);
    }, []);

    const renderNews = () => {
        return newsData ? (
            <Grid container spacing={1}>
                {
                    newsData.filter((_, i) => i < 8).map(
                        (data, key) => (
                            <Grid item md={6} key={key}>
                                <NewsCard {...data} />
                            </Grid>
                        )
                    )
                }
            </Grid>
        ) : (
            <Grid item md={6}>

            </Grid>
        );
    }

    return (
        <Grid container id="center-content" spacing={2}>
            <Grid item md={6}>
                <InfoCard
                    height="218px"
                    titleIcon={EyeIcon}
                    title="Visitors"
                    topRight={{ type: "dropdown", value: "This month" }}
                >
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
                <InfoCard
                    height="218px"
                    titleIcon={ListIcon}
                    title="Orders"
                    topRight={{ type: "dropdown", value: "This month" }}
                >
                    <Box sx={SecondCardCenterStyling}>
                        <Box className="csFlexbox">
                            <Typography className="csTitle" variant="span">Orders received:</Typography>
                            <Typography className="csValue" variant="span">156</Typography>
                        </Box>
                        <Box className="csFlexbox">
                            <Typography className="csTitle" variant="span">Earnings:</Typography>
                            <Typography className="csValue" variant="span">??? 1893,24</Typography>
                        </Box>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        10 free tips to increase your sales
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={6}>
                <InfoCard
                    backgroundColor="#F3A35C"
                    height="348px"
                >
                    <Box sx={RowFlexStyling}>
                        <Typography
                            variant="span"
                            color="white"
                            fontSize="22px"
                            lineHeight="30px"
                            fontWeight="500">
                            Sell your products on your exclusive APP published on the stores
                            <br />
                            <Link className="font-white" href="#" sx={CardBottomLinkStyling}>
                                Show more
                                <img src={ArrowRightWhiteIcon} alt="right arrow" style={RightArrowIconStyling} />
                            </Link>
                        </Typography>
                        <img style={iPhoneStyling} src={iPhoneImage} alt="iPhone image" />
                    </Box>
                    <Box sx={StoreIconsBoxStyling}>
                        <img style={StoreIconStyling} src={AppleStoreIcon} alt="apple store" />
                        <img style={StoreIconStylingLarge} src={GooglePlayIcon} alt="google play" />
                    </Box>
                </InfoCard>
            </Grid>
            <Grid item md={6}>
                <InfoCard
                    height="348px"
                    titleIcon={ExtensionsMpIcon}
                    title="Extensions Marketplace"
                >
                    <Box sx={FourthCardCenterStyling}>
                        <Box>
                            <Box sx={FourthCardCenterSubBox}>
                                <img src={DomainImage} alt="www domain" />
                            </Box>
                            <Typography variant="span" width="20px">Connect your own domain</Typography>
                        </Box>
                        <Box>
                            <Box className="green-bg" sx={FourthCardCenterSubBox}>
                                <img src={FiftyProducts} alt="50+ products" />
                            </Box>
                            <Typography variant="span">50 Additional Products</Typography>
                        </Box>
                    </Box>
                    <Link href="#" sx={CardBottomLinkStyling}>
                        Discover all extensions
                        <img src={ArrowRightIcon} alt="right arrow" style={RightArrowIconStyling} />
                    </Link>
                </InfoCard>
            </Grid>
            <Grid item md={12}>
                <InfoCard
                    height="auto"
                    titleIcon={FileTextIcon}
                    title="Latest news"
                    topRight={{ type: "link", value: "Visit our blog" }}
                >
                    <Box mt="20px">
                        {renderNews()}
                    </Box>
                </InfoCard>
            </Grid>
        </Grid >
    )
};

const RowFlexStyling = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    width: "100%",
    "> *": {
        flex: 1
    },
};

const FourthCardCenterSubBox = {
    backgroundColor: "#FFA26B",
    borderRadius: "10px",
    width: "152px",
    height: "150px",
    position: "relative",
    "&.green-bg": {
        background: "#00C48C"
    },
    "> img": {
        position: "absolute",
        width: "50%",
        height: "50%",
        left: "25%",
        top: "25%",
    }
}

const StoreIconsBoxStyling = {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "row wrap",
    width: "100%",
    marginTop: "30px"
};

const FourthCardCenterStyling = {
    display: "flex",
    flexFlow: "row wrap",
    width: "135%",
    mt: "24px",
    mb: "24px",
    "> *": {
        flex: 1
    },
    "span": {
        display: "inline-block",
        width: "140px",
        marginTop: "10px",
    }
};

const StoreIconStyling = {
    width: "126px",
    height: "42px",
};

const StoreIconStylingLarge = {
    width: "146px",
    height: "42px",
};

const iPhoneStyling = {
    position: "relative",
    left: "20px",
    width: "113px",
    height: "228px",
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
        fontSize: "17px",
        lineHeight: "22px",
        fontWeight: "300",
        fontStyle: "normal",
    },
    ".csValue": {
        fontSize: "17px",
        lineHeight: "22px",
        mr: "6px",
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
    top: "5px",
    left: "18px",
};

export default CenterContent;