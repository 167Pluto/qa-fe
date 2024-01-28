import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  Stack,
} from "@mui/material";
import { FC } from "react";

interface InputFieldProps {
  outlinedInputProps: OutlinedInputProps;
  label: string;
  errorMessage?: string;
}

const InputField: FC<InputFieldProps> = ({
  outlinedInputProps,
  label,
  errorMessage,
}) => {
  return (
    <Grid item xs={12} width="100%">
      <Stack spacing={1}>
        <InputLabel
          sx={{
            color: "rgba(0, 0, 0, 0.60)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "-0.015rem",
          }}
        >
          {label}
        </InputLabel>
        <OutlinedInput
          fullWidth
          {...outlinedInputProps}
          sx={{
            input: { color: "black" },
            paddingRight: 0,
            border: "1px solid rgba(0, 0, 0, 0.10)",
            color: "black",
          }}
        />
        {outlinedInputProps.error && (
          <FormHelperText error>{errorMessage}</FormHelperText>
        )}
      </Stack>
    </Grid>
  );
};

export default InputField;
