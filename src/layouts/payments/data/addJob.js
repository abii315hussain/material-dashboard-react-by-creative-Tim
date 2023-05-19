import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, CardActionArea, CardMedia, TextField } from "@mui/material";

export default function addJob() {
  const [date, setDate] = useState();
  const [image, setImage] = useState(null);

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
          <Grid item xs={12}>
            <MDBox pt={4} pb={3} px={3}>
              <MDBox component="form" role="form" onSubmit={handleSubmit}>
                <Grid item xs={12} md={4}>
                  <MDBox mb={2}>
                    <MDInput type="text" label="Title" name="title" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="number" label="Price" name="price" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <TextField
                      autoFocus
                      type="datetime-local"
                      label="Date"
                      name="date"
                      fullWidth
                      inputProps={{
                        min: new Date().toISOString().slice(0, 16),
                        autoFocus: true,
                      }}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <TextField
                      label="Description"
                      name="description"
                      multiline
                      rows={3}
                      variant="outlined"
                      fullWidth
                    />
                  </MDBox>

                  <MDBox mb={2}>
                    {image && (
                      <CardMedia
                        component="img"
                        width="150"
                        height="150"
                        image={URL.createObjectURL(image)}
                        alt="green iguana"
                      />
                    )}
                  </MDBox>
                  <Button
                    variant="outlined"
                    component="label"
                    style={{ border: "1px solid gray", color: "gray", maxWidth: 150 }}
                  >
                    Upload File
                    <input
                      type="file"
                      hidden
                      value=""
                      onChange={(e) => setImage(e.target.files[0] || null)}
                    />
                  </Button>

                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth type="submit">
                      Add Job
                    </MDButton>
                  </MDBox>
                </Grid>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}
