import React, { useState } from "react";
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography, FormControl, Select, MenuItem, } from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import FileUpload from "themes/overrides/FileUpload";
import { Box } from "@mui/system";
import SketchPickers from "themes/overrides/SketchPicker";
import { Delete, CloseOutlined } from "../../../node_modules/@mui/icons-material/index";

const AddProduct = () => {
    const [select, setSelect] = React.useState('');
    const [sizes, setSizes] = useState(['']);
    const [socksizes, setSockSizes] = useState(['']);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [colors, setColors] = useState([]);
    const [numOfCapPanels, setNumOfCapPanels] = useState(1);
    const [products, setProducts] = useState([]);


    const handleRemoveProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };



    const handleAddProductButtonClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
        const newProduct = {
            type: '',
            sizes: [''],
            colors: [],
            numOfCapPanels: 1
        };
        setProducts([...products, newProduct]);
    };

    const handleAddSizeButtonClick = () => {
        setSizes([...sizes, '']);
    };

    const handleRemoveButtonClick = (index) => {
        const newSizes = [...sizes];
        newSizes.splice(index, 1);
        setSizes(newSizes);
    };

    const handleChanges = (event) => {
        setSelect(event.target.value);
    };

    const handleAddedButtonClick = () => {
        setColors([...colors, '']);
    };

    const handleRemovesButtonClick = (index) => {
        const newColors = [...colors];
        newColors.splice(index, 1);
        setColors(newColors);
    };
    const handleAddedButtonClickSock = () => {
        setSockSizes([...socksizes, '']);
    };

    const handleRemovesButtonClickSock = (index) => {
        const nSizes = [...socksizes];
        nSizes.splice(index, 1);
        setSockSizes(nSizes);
    };

    const handleAddMoreCapPanel = () => {
        setNumOfCapPanels(numOfCapPanels + 1);
    };

    const handleDeleteCapPanel = () => {
        setNumOfCapPanels(numOfCapPanels - 1);
    };
    return (
        <>
            {products.map((product, index) => (
                <Formik
                    key={index}
                    initialValues={{
                        stock: '10',
                        size: 'M'
                    }}
                    validationSchema={Yup.object().shape({
                        stock: Yup.string().max(255).required('Enter the quantity'),
                        size: Yup.string().max(255).required('Enter the Size')
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
                        <form onSubmit={handleSubmit} style={{
                            marginTop: '1rem'
                        }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <FormControl fullWidth>
                                        <InputLabel id={`product-type-label-${index}`}>Type Of Product</InputLabel>
                                        <Select
                                            labelId={`product-type-label-${index}`}
                                            value={product.type}
                                            label="Type of product"
                                            onChange={(event) => {
                                                const updatedProducts = [...products];
                                                updatedProducts[index].type = event.target.value;
                                                setProducts(updatedProducts);
                                                handleChanges(event); // Call handleChanges to update the select state
                                            }}
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
                                        onClick={() => handleRemoveProduct(index)}
                                    >
                                        Remove Product
                                    </Button>
                                </Grid>
                            </Grid>
                            {product.type === "T-shirt" && (
                                <Box container className="T-shirtPanel" sx={{ marginTop: '10px' }}>
                                    <Typography variant="h6">{select}</Typography>
                                    <Grid container spacing={2} >
                                        <Grid item xs={2}>
                                            <FileUpload id='ShirtID' placeholder="Product Image" />
                                        </Grid>
                                        <Grid item xs={10}>
                                            <Grid container spacing={2} >
                                                <Grid item xs={2}>
                                                    <Stack spacing={1}>
                                                        <InputLabel htmlFor="event-stock">Quantity / Stock</InputLabel>
                                                        <OutlinedInput
                                                            id="event-stock"
                                                            type="number"
                                                            value={values.stock}
                                                            name="stock"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            placeholder="Enter event name"
                                                            fullWidth
                                                            error={Boolean(touched.stock && errors.stock)}
                                                        />
                                                        {touched.stock && errors.stock && (
                                                            <FormHelperText
                                                                error
                                                                id="standard-weight-helper-text-event-name"
                                                            >
                                                                {errors.stock}
                                                            </FormHelperText>
                                                        )}
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Grid container spacing={2}>
                                                        {sizes.map((value, index) => (
                                                            <Grid item xs={2} key={index}>
                                                                <Stack spacing={1}>
                                                                    <InputLabel htmlFor={`event-size-${index}`}>Size</InputLabel>
                                                                    <OutlinedInput
                                                                        id={`event-size-${index}`}
                                                                        type="text"
                                                                        name={`size${index}`}
                                                                        value={value}
                                                                        onChange={(event) => {
                                                                            const newSizes = [...sizes];
                                                                            newSizes[index] = event.target.value;
                                                                            setSizes(newSizes);
                                                                        }}
                                                                        placeholder="Size"
                                                                        fullWidth
                                                                    />
                                                                    {index !== 0 && (
                                                                        <Button
                                                                            fullWidth
                                                                            size="large"
                                                                            variant="contained"
                                                                            color="secondary"
                                                                            onClick={() => handleRemoveButtonClick(index)}
                                                                        >
                                                                            Remove
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
                                                                onClick={() => handleAddSizeButtonClick(index)}
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
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                            {Array.from({ length: numOfCapPanels }).map((_, index) => (
                                product.type === "Cap" && (
                                    <Box container className="CapPanel" key={index}>
                                        <Typography variant="h6">{select}</Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <FileUpload id={index} placeholder="Product Image" />
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Stack spacing={1}>
                                                    <InputLabel htmlFor={`quantity-${index}`}>Quantity / Stock</InputLabel>
                                                    <OutlinedInput
                                                        id={`quantity-${index}`}
                                                        type="number"
                                                        value={values.stock}
                                                        name="stock"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        placeholder="Enter quantity"
                                                        fullWidth
                                                        error={Boolean(touched.stock && errors.stock)}
                                                    />
                                                    {touched.stock && errors.stock && (
                                                        <FormHelperText
                                                            error
                                                            id={`quantity-helper-text-${index}`}
                                                        >
                                                            {errors.stock}
                                                        </FormHelperText>
                                                    )}
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Grid container spacing={2}>
                                                    {colors.map((value, colorIndex) => (
                                                        <Grid item xs={1} key={colorIndex}>
                                                            <Stack spacing={1}>
                                                                <SketchPickers />
                                                                <Button
                                                                    size="normal"
                                                                    variant="outlined"
                                                                    color="secondary"
                                                                    onClick={() => handleRemovesButtonClick(colorIndex)}
                                                                    sx={{
                                                                        minWidth: '100%'
                                                                    }}
                                                                >
                                                                    <CloseOutlined />
                                                                </Button>
                                                            </Stack>
                                                        </Grid>
                                                    ))}
                                                    <Grid item xs={3}>
                                                        <Button
                                                            fullWidth
                                                            size="large"
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => handleAddedButtonClick(index)}
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
                                        {numOfCapPanels > 1 && (
                                            <Grid container spacing={2}>
                                                <Grid item xs={2}>
                                                    <Button
                                                        fullWidth
                                                        size="large"
                                                        startIcon={<Delete />}
                                                        variant="outlined"
                                                        color="secondary"
                                                        onClick={() => handleDeleteCapPanel(index)}
                                                        style={{ marginBottom: "25px" }}
                                                    >
                                                        Delete Panel
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        )}
                                        {index === numOfCapPanels - 1 && (
                                            <Grid container spacing={2}>
                                                <Grid item xs={2}>
                                                    <Button
                                                        fullWidth
                                                        size="large"
                                                        variant="outlined"
                                                        color="secondary"
                                                        onClick={() => handleAddMoreCapPanel(index)}
                                                    >
                                                        Add more product
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Box>
                                )
                            ))}

                            {product.type === "Socks" && (
                                <Box container className="SocksPanel">
                                    <Typography variant="h6">{select}</Typography>
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
                                                    value={values.stock}
                                                    name="stock"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    placeholder="Enter event name"
                                                    fullWidth
                                                    error={Boolean(touched.stock && errors.stock)}
                                                />
                                                {touched.stock && errors.stock && (
                                                    <FormHelperText
                                                        error
                                                        id="standard-weight-helper-text-event-name"
                                                    >
                                                        {errors.stock}
                                                    </FormHelperText>
                                                )}
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Grid container spacing={2}>
                                                {socksizes.map((value, index) => (
                                                    <Grid item xs={2} key={index}>
                                                        <Stack spacing={1}>
                                                            <InputLabel htmlFor={`event-sizes-${index}`}>Size</InputLabel>
                                                            <OutlinedInput
                                                                id={`event-sizes-${index}`}
                                                                type="text"
                                                                name={`sizes${index}`}
                                                                value={value}
                                                                onChange={(event) => {
                                                                    const nSizes = [...socksizes];
                                                                    nSizes[index] = event.target.value;
                                                                    setSockSizes(nSizes);
                                                                }}
                                                                placeholder="Size"
                                                                fullWidth
                                                            />
                                                            {index !== 0 && (
                                                                <Button
                                                                    fullWidth
                                                                    size="large"
                                                                    variant="contained"
                                                                    color="secondary"
                                                                    onClick={() => handleRemovesButtonClickSock(index)}
                                                                >
                                                                    Remove
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
                                                        onClick={() => handleAddedButtonClickSock(index)}
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
                            )}
                        </form>
                    )}
                </Formik>
            ))}
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Button
                        disableElevation
                        fullWidth
                        size="large"
                        type="button"
                        variant="outlined"
                        color="primary"
                        onClick={handleAddProductButtonClick}
                        style={{
                            marginTop: '15px'
                        }}
                    >
                        Add Product
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2} style={{
                justifyContent:'end'
            }}>
                <Grid item xs={2}>
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{
                        marginTop: '15px'
                    }}>Submit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddProduct;
