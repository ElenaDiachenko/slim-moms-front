import { theme } from '../Theme';
export const selectStyles = {
container:provided=>({
    ...provided,
  width:82
 
}),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? theme.colors.white: theme.colors.textFirst,
      backgroundColor: state.isSelected ? theme.colors.accent : theme.colors.white,
    }),

    control: (provided) => ({
      ...provided,
     border: theme.borders.normal + theme.colors.grey,
   '&:hover': {
      border: theme.borders.normal + theme.colors.accent,
    },
     '&:focus': {
      border: theme.borders.normal + theme.colors.accent,
    },
      backgroundColor: "rgba(255,255,255,.2)",
      boxShadow: "none",
    }),
    singleValue: (provided) => ({ ...provided, color: theme.colors.accent,  fontWeight: 700, }),
  };

