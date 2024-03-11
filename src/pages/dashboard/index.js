import React from 'react';
// material-ui
import {
  Typography, Grid
} from '@mui/material';
import Face4Icon from '@mui/icons-material/Face4';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import AddArtist from 'pages/artist/add-artist/AddArtist';
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={10} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={2} sx={{ mb: -2.25 }}>
        <AddArtist />
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid> */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Artist" count="78,250" percentage={70.5} extra="8,900" icon={<SupervisedUserCircleIcon color='primary' fontSize="large" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" icon={<LocalMallIcon color='success' fontSize="large" />} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Events" count="35,078" percentage={27.4} isLoss color="warning" extra="$20,395" icon={<EventNoteIcon color='error' fontSize="large" />} />
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
