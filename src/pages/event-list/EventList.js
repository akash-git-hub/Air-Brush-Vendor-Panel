// project import
import MainCard from 'components/MainCard';
import EventTable from './EventTable';
import { Typography } from "@mui/material";

// ==============================|| SAMPLE PAGE ||============================== //

const EventList = () => (
  <>
    <Typography id="event-detail-title" variant="h5" component="h5" sx={{ mb: 2, }}>Event List</Typography>
    <MainCard>
      <EventTable />
    </MainCard>
  </>
);

export default EventList;
