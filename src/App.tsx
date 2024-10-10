import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./externals/bootstrap-grid.min.css";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./page/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
