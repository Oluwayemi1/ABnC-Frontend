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
              <li key={property_id}>
                <p>{host}</p>
                <Link to={`/properties/:${property_id}`}>
                  <h3>{name}</h3>
                </Link>
                <p>{location}</p>
                <p>{price_per_night}</p>
              </li>
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
