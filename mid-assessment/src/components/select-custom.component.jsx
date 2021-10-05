import { FormControl, InputLabel, Select } from "@mui/material";

const SelectCustom = ({ label, children }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <Select
                labelId={`${label}-label`}
                label={label}
            >
                {children}
            </Select>
        </FormControl>
    )
};

export default SelectCustom;