import { FormControl, styled } from "@mui/material";






export const CustomFormControl = styled((props) => (
    <FormControl  {...props} />
))(({ theme }) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120
      },
      selectEmpty: {
        marginTop: theme.spacing(2)
      }
}));