import Grid from "@mui/material/Grid";
import CenterContent from "./center-content.component";
import SideContent from "./side-content.component";

const ContentContainer = () => {
    return (
        <Grid container id="content-container" sx={ContentContainerStyling} spacing={3}>
            <Grid item md={8}>
                <CenterContent />
            </Grid>
            <Grid item md={4}>
                <SideContent />
            </Grid>
        </Grid>
    )
};

const ContentContainerStyling = {
    position: "relative",
    height: "auto",
    width: "100%",
    padding: "41px",
    top: "-90px",
};

export default ContentContainer;