import React from "react";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      onClick={handleGoBack}
      style={{
        backgroundColor: "var(--blue)",
        borderRadius: "50%",
        padding: "10px",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginBottom: "20px",
      }}
    >
      <EastIcon htmlColor="#fff" />
    </div>
  );
}

export default BackButton;
