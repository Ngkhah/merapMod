import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";

export const customCheckbox = (theme) => {
    return {
      '& .MuiCheckbox-root svg': {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
  
        border: `1px solid ${theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
          }`,
        borderRadius: 2,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#00A79D',
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
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