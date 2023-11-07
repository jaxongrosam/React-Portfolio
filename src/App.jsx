import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Navigation />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
