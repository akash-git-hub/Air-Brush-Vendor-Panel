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
import { Delete, CloseOutlined } from "@mui/icons-material";
import CustomFileUpload from "themes/overrides/CustomFileUpload";
import CustomSketchPickers from "themes/overrides/CustomSketchPicker";

const Cap = ({ index, dataCallback, type }) => {
  const [productData, setProductData] = useState({
    product_type: type,
    file: null,
    quantity: 0,
    colors: [],
  });

  const onAddColorClickHandler = (e) => {
    const data = { ...productData };
    data.colors.push("");

    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const onRemoveColorClickHandler = (e, i) => {
    const data = { ...productData };
    data.colors.splice(i, 1);

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

    dataCallback("products", data, "update", index);
    setProductData(data);
  };

  const colorCallback = (colorHexCode, i) => {
    let data = { ...productData };
    data.colors[i] = colorHexCode;
    setProductData(data);

    dataCallback("products", data, "update", index);
  };

  const buildColorPickerComponent = (val, index) => (
    <Grid item xs={1}>
      <Stack spacing={1}>
        <CustomSketchPickers
          index={index}
          colorCallback={colorCallback}
          color={val}
        />
        <Button
          size="normal"
          variant="outlined"
          color="secondary"
          sx={{
            minWidth: "100%",
          }}
          onClick={(e) => onRemoveColorClickHandler(e, index)}
        >
          <CloseOutlined />
        </Button>
      </Stack>
    </Grid>
  );

  return (
    <>
      <Box container className="CapPanel">
        <Typography variant="h6">Caps</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CustomFileUpload
              id={`products_${index}`}
              type="products"
              placeholder="Product Image"
              file={productData.file}
              fileCallback={fileCallback}
            />
          </Grid>
          <Grid item xs={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="quantity">Quantity / Stock</InputLabel>
              <OutlinedInput
                id="quantity"
                type="number"
                value={productData.quantity}
                name="stock"
                placeholder="Quantity"
                fullWidth
                onChange={onQuantityChangeHandler}
              />
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              {productData.colors.map((val, index) =>
                buildColorPickerComponent(val, index)
              )}
              <Grid item xs={3}>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "1.6rem",
                  }}
                  onClick={onAddColorClickHandler}
                >
                  Add Color
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cap;
