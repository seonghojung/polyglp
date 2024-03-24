// React Imports
import type { ComponentProps } from "react";

import type { BoxProps } from "@mui/material/Box";

// Third-party Imports
import ReactDatePickerComponent from "react-datepicker";

// Styles
import "react-datepicker/dist/react-datepicker.css";

type Props = ComponentProps<typeof ReactDatePickerComponent> & {
  boxProps?: BoxProps;
};

const DatePicker = (props: Props) => {
  // Props
  const { boxProps, ...rest } = props;

  return <ReactDatePickerComponent {...rest} />;
};

export default DatePicker;
