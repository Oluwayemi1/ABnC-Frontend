import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleProperty = () => {
  const [singleProp, setSingleProp] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://abnc-rater.onrender.com/api/properties/${id}`)
      .then((response) => {
        const theProperty = response.data.property;

        setSingleProp(theProperty);
      });
  }, []);
  return (
    <>
      <div>
        <p>Property Name: {singleProp.property_name}</p>
        <p>Property Description: {singleProp.description}</p>
        <p>Price per night (£): {singleProp.price_per_night}</p>
        <p>Property Location: {singleProp.location}</p>

        <img src={singleProp.host_avatar} width="120" height="180" />
        <p>Host: {singleProp.host}</p>
      </div>
    </>
  );
};

export default SingleProperty;
