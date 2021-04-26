import PropTypes from "prop-types";
import Button from "./Button";
// import React from "react";

// export const Header = () => {
//   return <div>Hello World!</div>;
// };

// const Header = (props) => {
const Header = ({ title, onAdd }) => {
  // const onClick = () => {
  //   console.log("Click");
  // };

  return (
    <header className="header">
      {/* <h1>Task Tracker</h1> */}
      {/* <h1>{props.title}</h1> */}
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {/* <Button color="green" text="Add" onClick={onClick} /> */}
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Trackers",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JSx
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
