import "./App.css";
import ColorToggle from "./weekensdPratice/ColorToggle.jsx";
import Counter from "./weekensdPratice/Counter.jsx";
import Form from "./weekensdPratice/Form.jsx";
import LearnState from "./weekensdPratice/LearnState.jsx";
import Title from "./weekensdPratice/Title.jsx";

const App = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center "
        style={{ height: "40vh" }}
      >
        <div className="card  " style={{ width: "18rem" }}>
          <Title />
          <Form />
          <hr />
          <LearnState />
        </div>
      </div>
      <hr />
      <Counter />
      <hr />
      <ColorToggle />
    </>
  );
};

export default App;
