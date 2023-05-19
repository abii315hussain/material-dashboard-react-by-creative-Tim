/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { postJwtLogin } from "helper/backend_helper";
import { ToastContainer, toast } from "react-toastify";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();
  const handeLogin = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      email: form.get("email"),
      password: form.get("password"),
    };

    try {
      setLoading(true);
      const response = await postJwtLogin(data);
      localStorage.setItem("shypie", JSON.stringify(response.data.data));
      navigate("/");
      setLoading(false);
      // window.location.reload();
    } catch (error) {
      setLoading(false);
      if (error?.response?.status === 400) {
        toast.error(error.response.data.errors[0].detail, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <ToastContainer />
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handeLogin}>
            <MDBox mb={2}>
              <MDInput type="email" name="email" label="Email" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" name="password" label="Password" fullWidth />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
