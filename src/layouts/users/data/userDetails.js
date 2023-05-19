import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useState } from "react";
import { Avatar, TextField } from "@mui/material";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import { useLocation } from "react-router-dom";

export default function addJob() {
  const [date, setDate] = useState();
  const [image, setImage] = useState(null);
  const location = useLocation();
  const { row } = location.state;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12}>
            <ProfileInfoCard
              active
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: row.name,
                mobile: row.phoneNumber,
                email: row.email,
                DOB: new Date(row.dateOfBirth).toDateString(),
                street: row.street,
                apartment: row.apartment,
                zipCode: row.zipCode,
                state: row.state,
                profileImage: row.profileImage,
              }}
              vechileInfo={{
                make: row.make,
                model: row.model,
                color: row.color,
              }}
              licenseInfo={{
                licenseState: row.licenseState,
                licenseNumber: row.licenseNumber,
                securityNumber: row.securityNumber,
                licenseImage: row.licenseImage,
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
              shadow={false}
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
                // background: "#FF6341",
                borderRadius: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 10,
                fontSize: 14,
                padding: 7,
              }}
            >
              <div style={{ color: "white" }}>
                Available Balance
                <MDTypography color="white" style={{ cursor: "pointer" }}>
                  $120
                </MDTypography>
              </div>
              <div style={{ color: "white" }}>
                Total Earning
                <MDTypography color="white" style={{ cursor: "pointer" }}>
                  $120
                </MDTypography>
              </div>
            </Card>

            <br />
            <Card
              style={{
                padding: 8,
                borderRadius: 7,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CurrencyExchangeIcon />
                <div style={{ fontSize: 14, display: "flex", flexDirection: "column" }}>
                  Earn From #JOB1223
                  <small>Feb 1, 2023</small>
                </div>
              </div>
              <div style={{ fontSize: 14, color: "green" }}>+$40.00</div>
            </Card>
            <Card
              style={{
                padding: 8,
                borderRadius: 7,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CurrencyExchangeIcon />
                <div style={{ fontSize: 14, display: "flex", flexDirection: "column" }}>
                  Earn From #JOB1223
                  <small>Feb 1, 2023</small>
                </div>
              </div>
              <div style={{ fontSize: 14, color: "red" }}>-$10.00</div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MDBox mt={4} mb={1}>
              <MDBox mb={2}>
                <TextField
                  type="number"
                  label="Amount"
                  name="amounrt"
                  variant="outlined"
                  fullWidth
                />
              </MDBox>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Pay To Driver
              </MDButton>
            </MDBox>
          </Grid> */}
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
