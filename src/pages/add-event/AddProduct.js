import React, { useState } from "react";
import {
    Button,
    Grid,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import Tshirt from "./TypeProduct/Tshirt";
import Cap from "./TypeProduct/Cap";
import Socks from "./TypeProduct/Socks";

const AddProduct = () => {
    const [products, setProducts] = useState([]);


    return (
        <>
                <Formik
                    initialValues={{
                        stock: "10",
                        size: "M",
                    }}
                    validationSchema={Yup.object().shape({
                        stock: Yup.string().max(255).required("Enter the quantity"),
                        size: Yup.string().max(255).required("Enter the Size"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        setSubmitting(false);
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
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                marginTop: "1rem",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id="product-type-label">
                                            Type Of Product
                                        </InputLabel>
                                        <Select
                                            labelId="product-type-label"
                                            value='type'
                                            label="Type of product"
                                        >
                                            <MenuItem value={"T-shirt"}>T-shirt</MenuItem>
                                            <MenuItem value={"Cap"}>Cap</MenuItem>
                                            <MenuItem value={"Socks"}>Socks</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="outlined"
                                        color="primary"
                                        disabled={isSubmitting}
                                    >
                                        Remove Product
                                    </Button>
                                </Grid>
                            </Grid>
                            <Tshirt />
                            <Cap />
                            <Socks />
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Button
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        style={{
                                            marginTop: "15px",
                                        }}
                                    >
                                        Add Product
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                style={{
                                    justifyContent: "end",
                                }}
                            >
                                <Grid item xs={2}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        style={{
                                            marginTop: "15px",
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
        </>
    );
};

export default AddProduct;
