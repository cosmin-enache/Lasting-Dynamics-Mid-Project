import { Box, Typography } from "@mui/material";
import DefaultNewsImage from "../assets/images/news-image.png";

const formatTitle = (title) => {
    const titleArray = title.split(" ");

    return titleArray.slice(0, 4).join(" ");
};

const redirectToNews = (url) => {
    window.open(url, '_blank');
};

const NewsCard = ({ urlToImage, author, title, publishedAt, url }) => {
    return (
        <Box sx={NewsCardStyling}>
            <Box sx={ImageBoxStyling} onClick={() => redirectToNews(url)}>
                <Box sx={ImageClipperStyling}>
                    <img src={urlToImage ? urlToImage : DefaultNewsImage} />
                </Box>
            </Box>
            <Box sx={DataBoxStyling}>
                <Typography variant="body1" sx={TitleStyling}>{author ? author : "Read now!"}</Typography>
                <Typography variant="body1" sx={DescriptionStyling}>{formatTitle(title)}</Typography>
                <Typography variant="body1" sx={DateStyling}>{publishedAt.split("T")[0]}</Typography>
            </Box>
        </Box>
    )
};

const DateStyling = {
    position: "absolute",
    bottom: "9px",
    color: "gray",
};

const TitleStyling = {
    color: "#21B8F9",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "13px",
    mb: "9px",
};

const DescriptionStyling = {
    fontSize: "15px",
    fontWeight: "600",
};

const ImageClipperStyling = {
    position: "relative",
    overflow: "hidden !important",
    width: "100%",
    height: "100%",
    pl: "15px",
    pr: "15px",
    pt: "5px",
    pb: "5px",
    "> img": {
        position: "relative",
        width: "100%",
        minHeight: "100%",
    },
    cursor: "pointer",
    "&:hover": { opacity: 0.7 },
};

const ImageBoxStyling = {
    flex: 1,
    height: "100%",
};

const DataBoxStyling = {
    flex: 1,
    pt: "15px"
};

const NewsCardStyling = {
    position: "relative",
    display: "flex",
    flexFlow: "row wrap",
    width: "100%",
    height: "120px",
};

export default NewsCard;