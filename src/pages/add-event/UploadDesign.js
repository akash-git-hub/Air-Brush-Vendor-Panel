import React, { useEffect, useState } from "react";
import { Grid, Stack, Button, Typography, Box } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import CustomFileUpload from "themes/overrides/CustomFileUpload";
import CustomSketchPickers from "themes/overrides/CustomSketchPicker";

const UploadDesign = ({ dataCallback }) => {
  const [designs, setDesigns] = useState([
    {
      file: null,
      colors: [],
    },
  ]);

  useEffect(() => {
    dataCallback(
      "bg_designs",
      {
        file: null,
        colors: [],
      },
      "add"
    );
  }, []);

  const onAddMoreDesignClickHandler = (e) => {
    const data = [...designs];

    const designData = {
      file: null,
      colors: [],
    };

    data.push(designData);

    setDesigns(data);

    dataCallback("bg_designs", designData, "add");
  };

  const onRemoveDesignClickHandler = (e, index) => {
    const data = [...designs];

    data.splice(index, 1);

    setDesigns(data);

    dataCallback("bg_designs", null, "remove", index);
  };

  const fileCallback = (file, index) => {
    let data = [...designs];
    data[index].file = file;
    setDesigns(data);

    dataCallback("bg_designs", data[index], "update", index);
  };

  const colorCallback = (colorHexCode, index, designIndex) => {
    let data = [...designs];
    data[designIndex].colors[index] = colorHexCode;
    setDesigns(data);

    dataCallback("bg_designs", data[designIndex], "update", designIndex);
  };

  const onAddColorClickHandler = (e, designIndex) => {
    let data = [...designs];

    data.at(designIndex).colors.push("");

    setDesigns(data);

    dataCallback("bg_designs", data[designIndex], "update", designIndex);
  };

  const onRemoveColorClickHandler = (e, index, designIndex) => {
    let data = [...designs];

    data.at(designIndex).colors.splice(index, 1);

    setDesigns(data);

    dataCallback("bg_designs", data[designIndex], "update", designIndex);
  };

  const buildColorPickerComponent = (val, index, designIndex) => (
    <Grid key={`${index}`} item xs={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <CustomSketchPickers
              index={index}
              colorCallback={colorCallback}
              color={val}
              masterIndex={designIndex}
            />
            <Button
              size="normal"
              variant="outlined"
              color="secondary"
              sx={{ minWidth: "100%" }}
              onClick={(e) => {
                onRemoveColorClickHandler(e, index, designIndex);
              }}
            >
              <CloseOutlined />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );

  const buildUploadDesignComponent = (val, index) => (
    <Grid key={`${index}`} container spacing={2}>
      <Grid item xs={2}>
        <CustomFileUpload
          id={`bg_designs_${index}`}
          type="bg_designs"
          placeholder="Background Design"
          fileCallback={fileCallback}
          file={val.file}
        />
      </Grid>
      {val.colors.length > 0 &&
        val.colors.map((value, i) => {
          return buildColorPickerComponent(value, i, index);
        })}
      <Grid item xs={2}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          style={{ marginTop: "25px" }}
          onClick={(e) => onAddColorClickHandler(e, index)}
        >
          Add Color
        </Button>
      </Grid>
      {(designs.length > 1 || index !== 0) && (
        <Grid item xs={2}>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            color="secondary"
            style={{ marginTop: "25px" }}
            onClick={(e) => onRemoveDesignClickHandler(e, index)}
          >
            Remove Design
          </Button>
        </Grid>
      )}
    </Grid>
  );

  return (
    <>
      <Box style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box container className="AddPanel" sx={{ marginY: "15px" }}>
              <Grid
                container
                spacing={2}
                style={{ justifyContent: "space-between" }}
              >
                <Grid item xs={2}>
                  <Typography variant="h6">Upload Design</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    size="large"
                    variant="outlined"
                    color="secondary"
                    onClick={onAddMoreDesignClickHandler}
                  >
                    Add more Design
                  </Button>
                </Grid>
              </Grid>
              {designs.map((val, index) => {
                return buildUploadDesignComponent(val, index);
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UploadDesign;
