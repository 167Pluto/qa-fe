import { Button, Divider, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";
import useLogin from "../../api/hooks/useLogin";
import useAuthStore from "~/store/authStore";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useLogin();

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

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
              label="Email"
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
              <Divider sx={{ mt: "0.5rem", mb: "1.25rem" }} />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                disabled={!isValid || !dirty}
                disableElevation
                sx={{ justifyContent: "space-between" }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => navigate("/register")}
                fullWidth
                disableElevation
                sx={{ justifyContent: "space-between" }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
