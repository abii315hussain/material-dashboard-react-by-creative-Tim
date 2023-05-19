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
import { useState, useEffect } from "react";
import { Avatar, TextField } from "@mui/material";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import { getWallet } from "helper/backend_helper";
import { useLocation } from "react-router-dom";

export default function addJob() {
  const location = useLocation();
  const { row } = location.state;

  const [rows, setRows] = useState([]);
  const [data, setData] = useState({ balance: 0, earning: 0 });
  useEffect(() => {
    async function getData() {
      /* eslint no-underscore-dangle: 0 */
      const response = await getWallet(row._id);
      console.log(response);
      setData(response.data.data.wallet);
      setRows(response.data.data.history);
    }
    getData();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
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
                ${data.balance}
              </MDTypography>
            </div>
            <div style={{ color: "white" }}>
              Total Earning
              <MDTypography color="white" style={{ cursor: "pointer" }}>
                ${data.earning}
              </MDTypography>
            </div>
          </Card>

          <br />
          {rows.map((item) => (
            <div>
              {item.type === "in" && (
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
                      Earn ${item.amount}
                      <small> {new Date(item.createdAt).toLocaleDateString()}</small>
                    </div>
                  </div>
                  <div style={{ fontSize: 14, color: "green" }}>+${item.amount}</div>
                </Card>
              )}
              {item.type === "out" && (
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
                      Paid ${item.amount}
                      <small> {new Date(item.createdAt).toLocaleDateString()}</small>
                    </div>
                  </div>
                  <div style={{ fontSize: 14, color: "red" }}>-${item.amount}</div>
                </Card>
              )}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <MDBox mt={4} mb={1}>
            <MDBox mb={2}>
              <TextField type="number" label="Amount" name="amounrt" variant="outlined" fullWidth />
            </MDBox>
            <MDButton variant="gradient" color="info" fullWidth type="submit">
              Pay To Driver
            </MDButton>
          </MDBox>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
