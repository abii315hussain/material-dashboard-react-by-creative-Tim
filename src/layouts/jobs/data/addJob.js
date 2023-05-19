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

import { useState, useEffect, Fragment } from "react";
import { Button, CardMedia, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { uploadFile, addJobPost, getAllUsersActive } from "helper/backend_helper";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

export default function addJob() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({
    address: "",
    location: {
      type: "Point",
      coordinates: [-76.703347, 30.710459],
    },
  });
  const [formLoading, setFormLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [user, setUser] = useState("");
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await getAllUsersActive();

      if (active) {
        setOptions([...response.data.data]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSubmit = async (event) => {
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

    if (isValid) {
      return toast.error(`${notValidKey} is required`);
    }
    const headers = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const formData = new FormData();
      formData.append("file", image);
      const response = await uploadFile(formData, headers);

      const submitData = {
        title: data.title,
        image: response.data.file.filename,
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        date: data.date,
        description: form.get("description"),
        address: data.address,
        location: data.location,
      };

      if (user) {
        submitData.user = user;
      }
      setFormLoading(true);
      await addJobPost(submitData);
      setFormLoading(false);
      await toast.success("Job Created Succesfully");
      setTimeout(() => {
        navigate("/jobs");
      }, 2000);
    } catch (error) {
      setFormLoading(false);
      await toast.error(error.message);
    }
  };

  const { ref: materialRef } = usePlacesWidget({
    // apiKey: "AIzaSyAqP47KVy__V9hbdV6ze-neinexJZEZsnk",
    apiKey: "AIzaSyBTcrda2owjExYV6e6_7SWItOOom5I3grE",
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
      <ToastContainer />
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
                    <Autocomplete
                      id="asynchronous-demo"
                      name="user"
                      fullWidth
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      onChange={(e, value, reason) => {
                        /* eslint no-underscore-dangle: 0 */
                        if (value) {
                          return setUser(value._id);
                        }
                        setUser("");
                      }}
                      isOptionEqualToValue={(option, value) => option.name === value.name}
                      getOptionLabel={(option) => option.name}
                      options={options}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Assign User"
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <div>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                              </div>
                            ),
                          }}
                        />
                      )}
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
                    {formLoading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : (
                      <MDButton variant="gradient" color="info" fullWidth type="submit">
                        Add Job
                      </MDButton>
                    )}
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