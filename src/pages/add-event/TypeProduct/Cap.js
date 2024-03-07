import React from 'react'
import { Button, Box, Grid, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import FileUpload from 'themes/overrides/FileUpload';
import SketchPickers from "themes/overrides/SketchPicker";
import { Delete, CloseOutlined } from "@mui/icons-material";

const Cap = () => {
    return (
        <>
            <Box container className="CapPanel">
                <Typography variant="h6">Caps</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <FileUpload id='file02' placeholder="Product Image" />
                    </Grid>
                    <Grid item xs={2}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="quantity">Quantity / Stock</InputLabel>
                            <OutlinedInput
                                id="quantity"
                                type="number"
                                value='Stock'
                                name="stock"
                                // onBlur={handleBlur}
                                // onChange={handleChange}
                                placeholder="Enter quantity"
                                fullWidth
                                // error={Boolean(touched.stock && errors.stock)}
                            />
                            {/* {touched.stock && errors.stock && (
                                <FormHelperText
                                    error
                                    id={`quantity-helper-text-${index}`}
                                >
                                    {errors.stock}
                                </FormHelperText>
                            )} */}
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                                <Grid item xs={1} >
                                    <Stack spacing={1}>
                                        <SketchPickers />
                                        <Button
                                            size="normal"
                                            variant="outlined"
                                            color="secondary"
                                            sx={{
                                                minWidth: '100%'
                                            }}
                                        >
                                            <CloseOutlined />
                                        </Button>
                                    </Stack>
                                </Grid>
                            <Grid item xs={3}>
                                <Button
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        marginTop: '1.6rem'
                                    }}
                                >
                                    Add Color
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Button
                                fullWidth
                                size="large"
                                startIcon={<Delete />}
                                variant="outlined"
                                color="secondary"
                                style={{ marginBottom: "25px" }}
                            >
                                Delete Panel
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Button
                                fullWidth
                                size="large"
                                variant="outlined"
                                color="secondary"
                            >
                                Add more product
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}

export default Cap
