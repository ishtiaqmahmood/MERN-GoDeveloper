import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  const alertStyles = {
    primary: "bg-primary text-white",
    light: "bg-light text-[#333]",
    dark: "bg-dark text-white",
    danger: "bg-danger text-white",
    success: "bg-success text-white",
    white: "bg-white text-[#333] border border-[#ccc]",
  };

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`p-[0.8rem] my-4 opacity-90 ${
          alertStyles[alert.alertType] || "bg-light text-[#333]"
        }`}
      >
        {alert.msg}
      </div>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
