import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import burceMars from "assets/images/bruce-mars.jpg";

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
import MDAvatar from "components/MDAvatar";
import { useLocation } from "react-router-dom";

export default function addJob() {
  const [date, setDate] = useState();
  const [image, setImage] = useState(null);

  const location = useLocation();
  const { row } = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      title: form.get("title"),
      price: form.get("price"),
      date: form.get("date"),
      image,
      address: "",
      location: {
        type: "Point",
        coordinates: [-76.703347, 30.710459],
      },
    };
    console.log(data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12}>
            <ProfileInfoCard
              active={false}
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: row.name,
                profileImage: row.profileImage,
                mobile: row.phoneNumber,
                email: row.email,
                DOB: new Date(row.dateOfBirth).toDateString(),
                street: row.street,
                apartment: row.apartment,
                zipCode: row.zipCode,
                state: row.state,
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
