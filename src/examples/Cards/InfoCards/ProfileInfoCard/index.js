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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";
import burceMars from "assets/images/bruce-mars.jpg";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import { Grid } from "@mui/material";
import MDAvatar from "components/MDAvatar";
import appConfig from "../../../../config/index";

function ProfileInfoCard({
  active,
  title,
  description,
  info,
  vechileInfo,
  licenseInfo,
  social,
  action,
  shadow,
}) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MDTypography>
    </MDBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <MDBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <Grid container spacing={3} alignItems="center" p={2}>
        <Grid item>
          <MDAvatar
            src={appConfig.FILe_URL + info.profileImage}
            alt="profile-image"
            size="xl"
            shadow="sm"
          />
        </Grid>
        <Grid item>
          <MDBox height="100%" mt={0.5} lineHeight={1}>
            {/* <MDTypography variant="h5" fontWeight="medium">
              {info.fullName}
            </MDTypography> */}
            {/* <MDTypography variant="button" color="text" fontWeight="regular">
              CEO / Co-Founder
            </MDTypography> */}
          </MDBox>
        </Grid>
      </Grid>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        {!active && (
          <MDTypography component={Link} to={action.route} variant="h4">
            <Tooltip title={action.tooltip} placement="top" color="success">
              <Icon>check_circle</Icon>
            </Tooltip>
            <Tooltip title={action.tooltip} placement="top" color="red">
              <Icon>cancele</Icon>
            </Tooltip>
          </MDTypography>
        )}
      </MDBox> */}
      <MDBox p={2}>
        {/* <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox> */}
        {/* <MDBox opacity={0.3}>
          <Divider />
        </MDBox> */}
        <MDBox>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={4}>
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                {title}
              </MDTypography>
              {renderItems}
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Vehicle Details
              </MDTypography>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  Make: &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{vechileInfo.make}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  Model: &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{vechileInfo.model}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  Color: &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{vechileInfo.color}
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                Driver License
              </MDTypography>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  License State : &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{licenseInfo.licenseState}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  License Number: &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{licenseInfo.licenseNumber}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  Security Number: &nbsp;
                </MDTypography>
                <MDTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;{licenseInfo.securityNumber}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" py={1} pr={2}>
                <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                  License File: &nbsp;
                </MDTypography>
                <a
                  href={appConfig.FILe_URL + licenseInfo.licenseImage}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    alignItems="center"
                    display="flex"
                  >
                    <Icon fontSize="small">description</Icon>&nbsp; Click To See
                  </MDTypography>
                </a>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  active: true,
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  vechileInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  licenseInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
