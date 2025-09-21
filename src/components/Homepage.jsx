import finehouse1 from "./images/finehouse1.jpg";
import finehouse2 from "./images/finehouse2.jpeg";
import finehouse3 from "./images/finehouse3.jpeg";
import finehouse4 from "./images/finehouse4.jpg";

const HomePage = () => {
  return (
    <>
      <h3>This is Home Page Here</h3>
      <p>
        We are introducing the great new ABnC rater app for you to do some
        rating of your user experience
      </p>
      <br />
      <img src={finehouse1} width="360" height="240" />
      <img src={finehouse2} width="360" height="240" />
      <img src={finehouse3} width="360" height="240" />
      <img src={finehouse4} width="360" height="240" />
    </>
  );
};

export default HomePage;
