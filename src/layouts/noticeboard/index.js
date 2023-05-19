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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import authorsTableData from "layouts/tables/data/authorsTableData";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getNotice, updateNotice } from "helper/backend_helper";
import { ToastContainer, toast } from "react-toastify";
// import DataTable from "examples/Tables/DataTable";

// Data
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

  const [notice, setNotice] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await getNotice();
      setNotice(response.data.data);
      setValue(response.data.data.description);
    }
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    /* eslint no-underscore-dangle: 0 */
    const data = {
      description: form.get("notice"),
      id: notice._id,
    };

    const response = await updateNotice(data);
    toast.success("Notice Updated Successfully");
  };

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
                    <TextField
                      type="text"
                      multiline
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      rows={3}
                      label="Notice"
                      name="notice"
                      fullWidth
                      autoFocus
                    />
                  </MDBox>

                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth type="submit">
                      Update
                    </MDButton>
                  </MDBox>
                </Grid>
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
