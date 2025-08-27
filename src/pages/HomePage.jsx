import ControlledForm from "./ControlledForm";
import "./HomePage.css";
import MixedForm from "./MixedForm";
import UncontrolledForm from "./UncontrolledForm";

function HomePage() {
  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <MixedForm />
    </>
  );
}

export default HomePage;
