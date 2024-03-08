import { useState } from "react";
import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Box,
} from "@mui/material";

import * as Yup from "yup";
import { Formik } from "formik";

// import FileUpload from "./FileUpload";
import FileUpload from "themes/overrides/FileUpload";
import UploadDesign from "./UploadDesign";
import CustomFileUpload from "themes/overrides/CustomFileUpload";

const EventForm = ({ dataCallback }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
    event_logo: null,
  });

  const handleInputChange = (e, field) => {
    const data = { ...formData };

    data[`${field}`] = e.target.value;

    setFormData(data);

    dataCallback(field, e.target.value);
  };

  const fileCallback = (file) => {
    const data = { ...formData };
    data["event_logo"] = file;
    setFormData(data);

    dataCallback("event_logo", file);
  };

  const onSubmit = async (e) => {};

  return (
    <>
      <Box style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <CustomFileUpload
              id="event_logo"
              type="event_logo"
              placeholder="Upload Event Image"
              fileCallback={fileCallback}
              file={formData.event_logo}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="event-name">Event Name</InputLabel>
                  <OutlinedInput
                    id="event-name"
                    type="text"
                    value={formData.name}
                    name="name"
                    placeholder="Enter event name"
                    fullWidth
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="address">Address</InputLabel>
                  <OutlinedInput
                    id="address"
                    type="text"
                    value={formData.address}
                    name="address"
                    placeholder="Enter address"
                    fullWidth
                    onChange={(e) => handleInputChange(e, "address")}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="date-time">Date</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="date"
                    type="date"
                    value={formData.date}
                    name="date"
                    placeholder="Date"
                    onChange={(e) => handleInputChange(e, "date")}
                  />
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="date-time">Time</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="time"
                    type="time"
                    value={formData.time}
                    name="date"
                    placeholder="Time"
                    onChange={(e) => handleInputChange(e, "time")}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <UploadDesign dataCallback={dataCallback} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EventForm;
