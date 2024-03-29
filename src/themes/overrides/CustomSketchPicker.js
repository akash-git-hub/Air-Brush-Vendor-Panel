import React, { useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

const CustomSketchPickers = ({ index, colorCallback, color, masterIndex }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    colorCallback(color.hex, index, masterIndex);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "100%",
        height: "20px",
        borderRadius: "2px",
        background: color,
      },
      swatch: {
        padding: "10px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
        marginTop: "28px",
        width: "100%",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker && (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default CustomSketchPickers;
