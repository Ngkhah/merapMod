import { styled, Tooltip, tooltipClasses } from "@mui/material";

export const ZoomImgTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.gray,
        margin: "0",
        padding: "0",
        borderRadius: '0px',
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 11,
        border: '0px'
    }
}));

export const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: '10px',
        width: '200px',
        border: '1px solid #E5ECF0',
        boxShadow: '0px 8px 24px rgba(42, 53, 53, 0.15)'
    },
}));