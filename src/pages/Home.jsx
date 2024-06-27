//

import BoleteraEventContainer from "../layouts/BoleteraEventContainer";
import Nav from "../layouts/Nav";

// import SignUpForm from "../components/SignUpForm";

const Home = () => {
  return (
    <div className="container px-4 mx-auto">
      <Nav />
      <BoleteraEventContainer />
      {/* <SignUpForm /> */}
    </div>
  );
};

export default Home;
