import { Switch } from "@mui/material";
import { styled } from "@mui/system";

export const SwitchTable = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: '0px 1px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: '0px 1px',
    transitionDuration: '300ms',
    color: '#8C9CB6 ',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#00A79D !important',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#DAF5F8' : '#DAF5F8',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? '#00A79D'
          : '#00A79D'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 24,
    height: 24,
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    width: 40,
    height: 16,
    margin: '4px 0px',
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));