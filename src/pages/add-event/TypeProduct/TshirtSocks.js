import React, { useState } from "react";
import {
  Button,
  Box,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import CustomFileUpload from "themes/overrides/CustomFileUpload";
const TshirtSocks = ({ index, dataCallback, type, name }) => {
  const [productData, setProductData] = useState({
    product_type: type,
    file: null,
    quantity: 0,
    sizes: [],
  });

  const onAddSizeClickHandler = (e) => {
    const data = { ...productData };
    data.sizes.push("");

    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const onRemoveSizeClickHandler = (e, i) => {
    const data = { ...productData };
    data.sizes.splice(i, 1);

    setProductData(data);

    dataCallback("products", data, "update", index);
  };
  
  const onSizeChangeHandler = (e, i) => {
    const data = { ...productData };
    data.sizes[i] = e.target.value;

    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const onQuantityChangeHandler = (e) => {
    const data = { ...productData };
    data.quantity = e.target.value;

    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const fileCallback = (file) => {
    const data = { ...productData };
    data["file"] = file;
    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const buildSizeComponent = (val, index) => (
    <Grid key={`${index}`} item xs={2}>
      <Stack spacing={1}>
        <InputLabel htmlFor="event-size">Size</InputLabel>
        <OutlinedInput
          key={`${index}`}
          id={`${index}`}
          type="text"
          name="size"
          placeholder="Size"
          fullWidth
          value={val}
          onChange={(e) => onSizeChangeHandler(e, index)}
        />
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="secondary"
          onClick={(e) => onRemoveSizeClickHandler(e, index)}
        >
          Remove
        </Button>
      </Stack>
    </Grid>
  );

  return (
    <>
      <Box container className="T-shirtPanel" sx={{ marginTop: "10px" }}>
        <Typography variant="h6">{name}</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CustomFileUpload
              id={type}
              type="products"
              placeholder="Product Image"
              file={productData.file}
              fileCallback={fileCallback}
            />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="event-stock">
                    Quantity / Stock
                  </InputLabel>
                  <OutlinedInput
                    key={`${index}`}
                    id={`${index}`}
                    type="number"
                    value={productData.quantity}
                    name="stock"
                    placeholder="Quantity"
                    fullWidth
                    onChange={onQuantityChangeHandler}
                  />
                </Stack>
              </Grid>
              <Grid item xs={10}>
                <Grid container spacing={2}>
                  {productData.sizes.map((val, index) =>
                    buildSizeComponent(val, index)
                  )}

                  <Grid item xs={2}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "1.6rem" }}
                      onClick={onAddSizeClickHandler}
                    >
                      Add Size
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TshirtSocks;
