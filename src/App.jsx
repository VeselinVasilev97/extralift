import Nav from "./components/Nav/Nav";
import classes from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className={classes.architecture}>
        <Nav />
        <div className={classes.row}>
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
