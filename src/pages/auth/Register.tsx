import { Button, Divider, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useRegister from "~/api/hooks/useRegsiter";
import InputField from "~/components/InputField";

const Register = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useRegister();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    email: Yup.string().required("This field is required!"),
    password: Yup.string()
      .required("This field is required!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`! @#$%^&*()_+\-={}[\]\\|:;"'<,>.?/])[A-Za-z\d~`! @#$%^&*()_+\-={}[\]\\|:;"'<,>.?/]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => await mutateAsync(values)}
    >
      {({ errors, touched, isValid, dirty, getFieldProps }) => (
        <Form style={{ width: "100%" }}>
          <Grid container spacing={3} flexDirection="column">
            <InputField
              label="Username"
              outlinedInputProps={{
                ...getFieldProps("username"),
                type: "text",
                placeholder: "Enter your username",
                error: Boolean(touched.username && errors.username),
              }}
              errorMessage={errors.username}
            />
            <InputField
              label="EmailLabel"
              outlinedInputProps={{
                ...getFieldProps("email"),
                type: "text",
                placeholder: "Enter your email",
                error: Boolean(touched.email && errors.email),
              }}
              errorMessage={errors.email}
            />
            <InputField
              label="Password"
              outlinedInputProps={{
                ...getFieldProps("password"),
                type: "password",
                placeholder: "Enter your password",
                error: Boolean(touched.password && errors.password),
              }}
              errorMessage={errors.password}
            />

            <Grid item xs={12}>
              <Divider sx={{ mt: "1.5rem", mb: "1.25rem" }} />

              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                disabled={!isValid || !dirty}
                disableElevation
                sx={{ justifyContent: "space-between" }}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                disableElevation
                sx={{ justifyContent: "space-between" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
