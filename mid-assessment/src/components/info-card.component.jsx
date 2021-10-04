import { Card } from "@mui/material"

const InfoCard = ({ children, ...otherProps }) => {
    const CombinedStyling = {
        ...CardStyling,
        ...otherProps
    };

    return (
        <Card sx={CombinedStyling}>
            {children}
        </Card>
    )
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