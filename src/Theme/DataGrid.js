import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export const customCheckbox = (theme) => {
    return {
      '& .MuiCheckbox-root svg': {
        width: 24,
        height: 24,
        backgroundColor: 'transparent',
  
        border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
          }`,
        borderRadius: 4,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#00A79D',
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-5 -7 26 26'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M0 5.59552C0.0823193 5.41669 0.137408 5.21666 0.251966 5.0622C0.753081 4.38741 1.61853 4.3526 2.23233 4.972C3.36007 6.10952 4.48593 7.24958 5.61149 8.38932C5.65531 8.43363 5.68848 8.4887 " +
          "5.73356 8.54789C5.8021 8.48269 5.84686 8.44186 5.88912 8.39913C8.51019 5.74902 11.1319 3.09923 13.7511 0.447221C14.0541 0.14021 14.4031 -0.0364009 14.8394 0.00632751C15.3333 0.054753 15.6864 0.318403 15.8851 0.769108C16.0773 1.20494 16.0232 1.63222 15.754 2.02596C15.6951 2.11205 15.6228 2.18959 15.5496 2.26397C12.6093 5.23913 9.66736 8.21271 6.72734 11.1882C6.33233 11.5879 5.87128 11.7481 5.33698 11.5547C5.14355 11.4848 4.95575 11.3534 4.80864 11.2059C3.34066 9.73479 1.88302 8.25322 0.419109 6.77799C0.21065 6.56751 0.0885794 6.31399 0 6.03768C0 5.89018 0 5.74301 0 5.59552Z' fill='%23fff'/%3E%3C/svg%3E\")",   
        borderColor: '#00A79D',
      },
      '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
        top: '50%',
        left: '39%',
        width: 5.71428571,
        height: 9.14285714,
      },
      '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
        width: 8,
        height: 8,
        backgroundColor: '#00A79D',
        transform: 'none',
        top: '39%',
        border: 0,
      },
    };
  }
  
  export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.85)",
    fontFamily: [
      'Manrope', 'sans-serif'
    ].join(","),
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d"
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none"
    },
    "& .MuiDataGrid-columnHeaders": {
      borderBottom: `1px solid ${theme.palette.mode === "light" ? "#00A79D" : "#303030"
        }`
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: '0px'
  
    },
    "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
      borderBottom: `1px solid ${theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
        }`,
  
    },
    "& .MuiDataGrid-cell:focus-within": {
      outline: '0px',
      outlineWidth: '0px',
      outlineOffset: '0px',
    },
    "& .MuiDataGrid-cell": {
      // backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#1d1d1d",
      color:
        theme.palette.mode === "light"
          ? "rgba(0,0,0,.85)"
          : "rgba(255,255,255,0.65)",
      borderBottom: `1px solid ${theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
        }`,
    },
    "& .MuiDataGrid-root, .Mui-selected": {
      backgroundColor: theme.palette.mode === "light" ? "#fafafa !important" : "#1d1d1d",
    },
    "& .MuiDataGrid-columnsContainer, .MuiPaginationItem-root": {
      borderRadius: 0
    },
    ...customCheckbox(theme)
  }));