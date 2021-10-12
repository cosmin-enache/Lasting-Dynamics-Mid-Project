import { Typography, Box } from "@mui/material";

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const locationToHeadline = (locationString) => {
    locationString = locationString.slice(1); // remove '/' character

    const words = locationString.split("-"); // split dashses if any

    for (let i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }

    return words.join(" ");
};

const LinkPage = ({ history, path }) => {
    const location = history.location.pathname;

    // disallows uncontrolled routes
    if (history.location.state !== "ALLOW") history.push("/");

    return (
        <Box sx={LinkPageStyling}>
            <Typography variant="h2">{location.length > 1 && locationToHeadline(location)}</Typography>
        </Box>
    )
};

const LinkPageStyling = {
    height: "100vh",
};

export default LinkPage;