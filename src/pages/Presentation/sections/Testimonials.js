/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";
import iccLogo from "assets/images/logos/sponsors/ICC_logo.png";
import googleLogo from "assets/images/logos/sponsors/google-for-startups.webp";
import godaddyLogo from "assets/images/logos/sponsors/godaddy.webp";
import brexLogo from "assets/images/logos/sponsors/brex.png";
import grangeLogo from "assets/images/logos/sponsors/Grange_Insurance_logo.png";
import revelitLogo from "assets/images/logos/sponsors/revelit.png";
import cultivateLogo from "assets/images/logos/sponsors/cultivate.jpeg";
import rev1Logo from "assets/images/logos/sponsors/rev1-ventures.png";
import cohatch from "assets/images/logos/sponsors/COHATCH-LOGO.webp";

function Information() {
  return (
    <MKBox sx={{padding:0}} component="section" py={12}>
      <Container>
        {/* <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            1,679,477+ web developers
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Many Fortune 500 companies, startups, universities and governmental institutions love
            Creative Tim&apos;s products.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nick Willever"
              date="1 day ago"
              review="This is an excellent product, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="1 week ago"
              review="I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} /> */}
        <h2 style={{ textAlign: "center" }}>Sponsors</h2>
        <Grid container sx={{paddingBottom: "2rem", paddingTop: "2rem"}} spacing={3} justifyContent="center">
          <Grid item xs={8} md={6} lg={4}>
            <MKBox component="img" src={iccLogo} alt="ICC" width="100%" opacity={0.6} />
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={3}>
            <MKBox component="img" src={rev1Logo} alt="Rev1 Ventures" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={grangeLogo} alt="Grange Insurance" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <MKBox component="img" src={revelitLogo} alt="RevelIT" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <MKBox component="img" src={cohatch} alt="COHatch" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={cultivateLogo} alt="Cultivate" width="100%" opacity={0.6} />
          </Grid>

          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={googleLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={godaddyLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={brexLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>

          {/* <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
