import React, { useState } from "react";
import {
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack,
    Button,
    Typography,
    Box
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

import * as Yup from "yup";
import { Formik } from "formik";

// import FileUpload from "./FileUpload"; 
import SketchPickers from "themes/overrides/SketchPicker";
import FileUpload from "themes/overrides/FileUpload";


const EventForm = () => {
    const [numOfAddPanels, setNumOfAddPanels] = useState(1);
    const [select, setSelect] = useState("");
    const [panels, setPanels] = useState([{ id: 1, colors: [{ id: 1 }] }]);

    const handleAddMoreAddPanel = () => {
        setNumOfAddPanels((prevNum) => prevNum + 1);
        setPanels((prevPanels) => [
            ...prevPanels,
            { id: prevPanels.length + 1, colors: [{ id: Date.now() }] }
        ]);
    };

    const handleRemovesButtonClick = (panelIndex, colorIndex) => {
        setPanels((prevPanels) =>
            prevPanels.map((panel, index) => {
                if (index === panelIndex) {
                    return {
                        ...panel,
                        colors: panel.colors.filter((color, i) => i !== colorIndex)
                    };
                }
                return panel;
            })
        );
    };

    const handleAddedButtonClick = (panelIndex) => {
        setPanels((prevPanels) =>
            prevPanels.map((panel, index) => {
                if (index === panelIndex) {
                    return {
                        ...panel,
                        colors: [...panel.colors, { id: Date.now() }]
                    };
                }
                return panel;
            })
        );
    };

    return (
        <>
            <Formik
                initialValues={{
                    name: "Event Name",
                    address: "Scheme  no 46 - Near Prestige College",
                    location: "Indore, (M.P)",
                    date: "Indore, (M.P)",
                    email: "info@eventdetails.com",
                    password: "1234567890",
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(255).required("Event name is required"),
                    address: Yup.string().max(255).required("Address is required"),
                    location: Yup.string().max(255).required("Location is required"),
                    date: Yup.string().max(255).required("Date-time is required"),
                    size: Yup.string().max(255).required("Mention a size"),
                    email: Yup.string()
                        .email("Must be a valid email")
                        .max(255)
                        .required("Email is required"),
                    password: Yup.string().max(255).required("Password is required"),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <form noValidate onSubmit={handleSubmit} style={{ marginBottom: '20px', marginTop: '20px'  }}>
                        <Grid container spacing={1} >
                            <Grid item xs={2}>
                                <FileUpload id={"FileUpload-01"} placeholder="Upload Event Image" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} >
                            <Grid item xs={12}>
                                <Grid container spacing={1} >
                                    <Grid item xs={4}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="event-name">Event Name</InputLabel>
                                            <OutlinedInput
                                                id="event-name"
                                                type="text"
                                                value={values.name}
                                                name="name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter event name"
                                                fullWidth
                                                error={Boolean(touched.email && errors.email)}
                                            />
                                            {touched.name && errors.name && (
                                                <FormHelperText
                                                    error
                                                    id="standard-weight-helper-text-event-name"
                                                >
                                                    {errors.name}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="address">Address</InputLabel>
                                            <OutlinedInput
                                                id="address"
                                                type="text"
                                                value={values.address}
                                                name="address"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Enter address"
                                                fullWidth
                                                error={Boolean(touched.address && errors.address)}
                                            />
                                            {touched.address && errors.address && (
                                                <FormHelperText
                                                    error
                                                    id="standard-weight-helper-text-address"
                                                >
                                                    {errors.address}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Stack spacing={1}>
                                            <InputLabel htmlFor="date-time">Date/Time</InputLabel>
                                            <OutlinedInput
                                                fullWidth
                                                error={Boolean(touched.date && errors.date)}
                                                id="-date-time"
                                                type="date"
                                                value={values.date}
                                                name="date"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                placeholder="Date Time"
                                            />
                                            {touched.date && errors.date && (
                                                <FormHelperText
                                                    error
                                                    id="standard-weight-helper-text-date-time"
                                                >
                                                    {errors.date}
                                                </FormHelperText>
                                            )}
                                        </Stack>
                                    </Grid>
                                    {errors.submit && (
                                        <Grid item xs={12}>
                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            {[...Array(numOfAddPanels)].map((_, panelIndex) => (
                                <Grid item xs={12} key={panelIndex}>
                                    <Box container className="AddPanel" sx={{ marginY: '15px' }}>
                                        {panelIndex === numOfAddPanels - 1 && (
                                            <Grid container spacing={2} style={{ justifyContent: 'space-between' }}>
                                                <Grid item xs={2}>
                                                    <Typography variant="h6">Upload Design</Typography>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Button
                                                        fullWidth
                                                        size="large"
                                                        variant="outlined"
                                                        color="secondary"
                                                        onClick={handleAddMoreAddPanel}
                                                    >
                                                        Add more Design
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        )}
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <FileUpload id={panelIndex} placeholder="Product Image" />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Grid container spacing={2}>
                                                    {panels[panelIndex].colors.map((color, colorIndex) => (
                                                        <Grid item xs={1} key={color.id}>
                                                            <Stack spacing={1}>
                                                                <SketchPickers />
                                                                {colorIndex !== 0 && (
                                                                    <Button
                                                                        size="normal"
                                                                        variant="outlined"
                                                                        color="secondary"
                                                                        onClick={() => handleRemovesButtonClick(panelIndex, colorIndex)}
                                                                        sx={{ minWidth: '100%' }}
                                                                    >
                                                                        <CloseOutlined />
                                                                    </Button>
                                                                )}
                                                            </Stack>
                                                        </Grid>
                                                    ))}
                                                    <Grid item xs={2}>
                                                        <Button
                                                            fullWidth
                                                            size="large"
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => handleAddedButtonClick(panelIndex)}
                                                            style={{ marginTop: '25px' }}
                                                        >
                                                            Add Color
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default EventForm;
