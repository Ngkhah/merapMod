import { List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

export const ListMenu = styled(List)({
    "& hr .MuiDivider-root": {
        "& .MuiDivider-fullWidth ": {
            "& .css-9mgopn-MuiDivider-root": {
                display: "none"
            }
        }
    },
    fontSize: '50px'
});
export const ListItemMenu = styled(ListItem)({
    "& hr .MuiDivider-root": {
        "& .MuiDivider-fullWidth ": {
            "& .css-9mgopn-MuiDivider-root": {
                display: "none"
            }
        }
    },
    fontSize: '50px'
});