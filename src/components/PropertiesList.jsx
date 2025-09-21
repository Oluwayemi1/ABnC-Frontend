import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const PropertiesList = ({ property_id }) => {
  const [propertie, setPropertie] = useState([]);
  useEffect(() => {
    axios.get("https://abnc-rater.onrender.com/api/properties").then((resp) => {
      const PropertiesListed = resp.data.properties.map(
        ({ property_id, name, location, price_per_night, host }) => {
          return { property_id, name, location, price_per_night, host };
        }
      );

      setPropertie(PropertiesListed);
    });
  }, []);

  return (
    <>
      <ul>
        {propertie.map(
          ({ property_id, name, location, price_per_night, host }) => {
            return (
              <div key={property_id}>
                <p>Host: {host}</p>
                <Link to={`/properties/${property_id}`}>
                  <h3>{name}</h3>
                </Link>
                <p> Location: {location}</p>
                <p>Price per night (£): {price_per_night}</p>
                <br />
                <br />
              </div>
            );
          }
        )}
      </ul>
      <button
        onClick={() => {
          console.log("i don click");
        }}
      >
        Review!
      </button>
    </>
  );
};

export default PropertiesList;
