import "./App.css";
import Form1 from "./components/Form1";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div>
      <div className="formWrapper">
        <Form1 />
      </div>
        <hr className="dashed"/>
      <div className="formWrapper-signup">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
