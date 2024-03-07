import React from 'react'
import { Button, Box, Grid, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import FileUpload from 'themes/overrides/FileUpload';

const Socks = () => {
    return (
        <>
            <Box container className="SocksPanel">
                <Typography variant="h6">Socks</Typography>
                <Grid container spacing={2} >
                    <Grid item xs={2}>
                        <FileUpload id='SockID' placeholder="Product Image" />
                    </Grid>
                    <Grid item xs={2}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor="event-name">Quantity / Stock</InputLabel>
                            <OutlinedInput
                                id="event-name"
                                type="number"
                                value='stock'
                                name="stock"
                                placeholder="Enter event name"
                                fullWidth
                                // error={Boolean(touched.stock && errors.stock)}
                            />
                            {/* {touched.stock && errors.stock && (
                                <FormHelperText
                                    error
                                    id="standard-weight-helper-text-event-name"
                                >
                                    {errors.stock}
                                </FormHelperText>
                            )} */}
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                                <Grid item xs={2} >
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="event-sizes">Size</InputLabel>
                                        <OutlinedInput
                                            id="event-sizes"
                                            type="text"
                                            name='sizes'
                                            value='Value'
                                            placeholder="Size"
                                            fullWidth
                                        />
                                        <Button
                                            fullWidth
                                            size="large"
                                            variant="contained"
                                            color="secondary"

                                        >
                                            Remove
                                        </Button>
                                    </Stack>
                                </Grid>
                            <Grid item xs={2}>
                                <Button
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    color="primary"

                                    style={{
                                        marginTop: '1.6rem'
                                    }}
                                >
                                    Size
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Socks
