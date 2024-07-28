import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Gallery } from "./pages/gallery";
import "./index.css";
import { Footer } from "./components/footer";
import { NavBar } from "./components/ui/navbar";
import { PageTitle } from "./components/ui/pageTitle";

/*
//Code for the currently removed About Page

{["about", "bio"].map((path) => (
  <Route
    path={path}
    element={
      <>
        <PageTitle pageTitle="About" /> <About />
      </>
    }
    key="Home"
  />
))}
*/

function App() {
  return (
    <div className="h-[100vh] overflow-y-scroll scrollbar bg-background flex flex-col">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {["home", "*"].map((path) => (
            <Route
              path={path}
              element={
                <>
                  <PageTitle pageTitle="Home" /> <Home />
                </>
              }
              key="Home"
            />
          ))}

          <Route
            path="/gallery"
            element={
              <>
                <PageTitle pageTitle="Gallery" /> <Gallery />
              </>
            }
            key="Gallery"
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
