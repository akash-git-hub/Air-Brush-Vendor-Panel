import React from "react";
import {
    Grid,
    Stack,
    Button,
    Typography,
    Box
} from "@mui/material";
import { Formik } from "formik";
import SketchPickers from "themes/overrides/SketchPicker";
import FileUpload from "themes/overrides/FileUpload";
import { CloseOutlined } from "@mui/icons-material";

const UploadDesign = () => {
    return (
        <>
            <Formik>
                    <form noValidate  style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Grid container spacing={1}>

                            <Grid item xs={12} >
                                <Box container className="AddPanel" sx={{ marginY: '15px' }}>
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
                                                    >
                                                        Add more Design
                                                    </Button>
                                                </Grid>
                                            </Grid>
                 
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <FileUpload id='file01' placeholder="Product Image" />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Grid container spacing={2}>
                                                        <Grid item xs={1}>
                                                            <Stack spacing={1}>
                                                                <SketchPickers />
                                                                    <Button
                                                                        size="normal"
                                                                        variant="outlined"
                                                                        color="secondary"
                                                                        sx={{ minWidth: '100%' }}
                                                                    >
                                                                        <CloseOutlined />
                                                                    </Button>
                                                            </Stack>
                                                        </Grid>
                                                    <Grid item xs={2}>
                                                        <Button
                                                            fullWidth
                                                            size="large"
                                                            variant="contained"
                                                            color="primary"
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
                        </Grid>
                    </form>
            </Formik>
        </>
    )
}

export default UploadDesign
