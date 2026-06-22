import React from "react";

export const Loader = () => {
  const loaderStyle = {
    width: "50px",
    height: "50px",
    border: "5px solid #ddd",
    borderTop: "5px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    margin: "50px auto",
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div style={loaderStyle}></div>
    </>
  );
};
