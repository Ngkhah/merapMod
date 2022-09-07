import { styled, Tooltip, tooltipClasses } from "@mui/material";

export const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: '10px',
        width: '200px',
        boxShadow: '0px 8px 24px rgba(42, 53, 53, 0.15)',
    },
}));