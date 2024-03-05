import React, { useState } from 'react';
import MainCard from 'components/MainCard';
import EventForm from './EventForm';
import AddProduct from './AddProduct';
import { Grid, Button } from '@mui/material';

const VendorList = () => {
  const [numOfEvents, setNumOfEvents] = useState(1);
  const handleAddMoreEvent = () => {
    setNumOfEvents((prevNum) => prevNum + 1);
  };
  const handleCloseEvent = (index) => {
    setNumOfEvents((prevNum) => prevNum - 1);
  };
  const renderEventFormAndProduct = (index) => {
    return (
      <React.Fragment key={index} style={{ borderBottom: '1px solid #a1a1a1' }}>
        <EventForm />
        <AddProduct />
        {index > 0 && (
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            onClick={() => handleCloseEvent(index)}
            style={{ marginTop: '15px', marginBottom: '15px' }}
          >
            Close Event
          </Button>
        )}
      </React.Fragment>
    );
  };

  return (
    <MainCard>
      <Grid container spacing={2} style={{ marginBottom: '15px', justifyContent: 'end' }}>
        <Grid item xs={2}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddMoreEvent}
          >
            Add More Event
          </Button>
        </Grid>
      </Grid>
      {renderEventFormAndProduct(0)}
      {[...Array(numOfEvents - 1)].map((_, index) => renderEventFormAndProduct(index + 1))}
    </MainCard>
  );
};

export default VendorList;
