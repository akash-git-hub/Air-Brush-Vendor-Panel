import React, { useState } from "react";
import {
  Button,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import Cap from "./TypeProduct/Cap";
import { productTypes } from "constants/constants";
import TshirtSocks from "./TypeProduct/TshirtSocks";

const AddProduct = ({ dataCallback }) => {
  const [products, setProducts] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] =
    useState(productTypes);

  const onAddProductClickHandler = (e) => {
    const data = [...products];

    const d = { product_type: "" };
    data.push(d);
    setProducts(data);

    dataCallback("products", d, "add");
  };

  const onRemoveProductClickHandler = (e, index) => {
    const data = [...products];

    data.splice(index, 1);
    setProducts(data);

    dataCallback("products", null, "remove", index);
  };

  const onProductTypeChangeHandler = (e, index) => {
    const data = [...products];

    if (e.target.value !== "cap") {
      const existingSelectedType = data.find(
        (val, i) => val.product_type === e.target.value
      );

      if(existingSelectedType){
        return;
      }
    }

    data[index].product_type = e.target.value;

    setProducts(data);

    dataCallback("products", data[index], "update", index);
  };

  const buildProductTypeComponent = (val, index) => (
    <Box key={index}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="product-type-label">Type Of Product</InputLabel>
            <Select
              labelId="product-type-label"
              value={val.product_type}
              label="Type of product"
              onChange={(e) => onProductTypeChangeHandler(e, index)}
            >
              {availableProductTypes.map((val, i) => {
                return (
                  <MenuItem key={i} value={val.value}>
                    {val.text}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button
            disableElevation
            fullWidth
            size="large"
            variant="outlined"
            color="primary"
            onClick={(e) => onRemoveProductClickHandler(e, index)}
          >
            Remove Product
          </Button>
        </Grid>
      </Grid>
      {val.product_type === "tshirt" && (
        <TshirtSocks
          key={index}
          index={index}
          dataCallback={dataCallback}
          type={val.product_type}
          name="T-Shirt"
        />
      )}
      {val.product_type === "socks" && (
        <TshirtSocks
          key={index}
          index={index}
          dataCallback={dataCallback}
          type={val.product_type}
          name="Socks"
        />
      )}
      {val.product_type === "cap" && (
        <Cap
          key={index}
          index={index}
          dataCallback={dataCallback}
          type={val.product_type}
        />
      )}
    </Box>
  );

  return (
    <>
      <Box
        style={{
          marginTop: "1rem",
        }}
      >
        {products.map((val, index) => buildProductTypeComponent(val, index))}
        {/* <Tshirt />
        <Cap />
        <Socks /> */}
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
              onClick={onAddProductClickHandler}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddProduct;
