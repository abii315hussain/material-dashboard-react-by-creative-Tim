import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import GooglePlacesAutocomplete, { usePlacesWidget } from "react-google-autocomplete";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { useState } from "react";
import { Button, CardMedia, TextField } from "@mui/material";
import { toast } from "react-toastify";

export default function addJob() {
  const [date, setDate] = useState();
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({
    address: "",
    location: {
      type: "Point",
      coordinates: [-76.703347, 30.710459],
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const data = {
      title: form.get("title"),
      minPrice: form.get("minPrice"),
      maxPrice: form.get("maxPrice"),
      date: form.get("date"),
      image,
      address: location.address,
      location: {
        type: "Point",
        coordinates: location.location.coordinates,
      },
    };
    let notValidKey = "";
    let isValid = false;
    Object.keys(data).forEach(function (key) {
      if (!data[key]) {
        notValidKey = key;
        isValid = true;
      }
    });

    // eslint-disable-next-line func-style, prefer-arrow/prefer-arrow-functions
    if (isValid) {
      toast.error(`${notValidKey} is required`);
    }
  };

  const { ref: materialRef } = usePlacesWidget({
    apiKey: "AIzaSyAqP47KVy__V9hbdV6ze-neinexJZEZsnk",
    options: {
      types: ["geocode", "establishment"],
    },
    onPlaceSelected: (place) => {
      setLocation({
        address: place.formatted_address,
        location: {
          type: "Point",
          coordinates: [place.geometry.location.lng(), place.geometry.location.lat()],
        },
      });
    },
    inputAutocompleteValue: "country",
  });

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
                    <MDInput type="number" label="Minimum Price" name="minPrice" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="number" label="Maximum Price" name="maxPrice" fullWidth />
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
                      fullWidth
                      id="outlined"
                      placeholder="Address"
                      label="Address"
                      name="address"
                      inputRef={materialRef}
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
