import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProperty = ({ property_id }) => {
  const [singleProp, setSingleProp] = useState([]);
  console.log(property_id);
  useEffect(() => {
    axios
      .get(`https://abnc-rater.onrender.com/api/properties/${property_id}`)
      .then((response) => {
        console.log(response);
      });
  });
  return (
    <>
      singleproperty space
      <h4>singleproperty space</h4>;
    </>
  );
};

export default SingleProperty;
