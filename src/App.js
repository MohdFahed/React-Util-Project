import React, { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Aleart from "./components/Aleart";
// import About from "./components/About";
import PageError from "./components/PageError";
import { Routes, Route } from "react-router-dom";

//import Products from "./components/Products";

import Feature from "./components/Feature";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import ActiveUser from "./components/ActiveUser";
const LazyLoad = React.lazy(() => import("./components/About"));
const ProductLazyLoad = React.lazy(() => import("./components/Products"));
function App() {
  const [mode, modeSetState] = useState("light");
  const [switchLable, labelSetState] = useState("Enable");
  const [alert, setAlertState] = useState(null);

  const showAlert = (message, type) => {
    setAlertState({ msg: message, msgType: type });
    setTimeout(() => {
      setAlertState(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      modeSetState("light");
      labelSetState("Enable");
      showAlert("Light Mode has been Successfully done", "success");
      document.title = "Text-Util-LightMode";
    } else {
      document.title = "Text-Util-DarkMode";
      modeSetState("dark");
      labelSetState("Disable");
      showAlert("Dark  Mode has been Successfully done", "success");
    }
  };
  return (
    <div
      className={`bg-${mode === "light" ? "light" : "dark"} text-${
        mode === "light" ? "dark" : "light"
      }`}
    >
      <Navbar
        title="App-Utils"
        home="Home"
        about="About Utilis-app"
        mode={mode}
        toggleMode={toggleMode}
        switchLable={switchLable}
      />
      <Aleart alert={alert} />
      <div className="container my-3 ">
        <Routes>
          <Route
            path="/"
            element={
              <Form
                heading="Enter Text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>
          <Route
            path="about"
            element={
              <Suspense fallback="Loading Lazy Component...">
                <LazyLoad />
              </Suspense>
            }
          ></Route>
          <Route
            path="products"
            element={
              <Suspense>
                <ProductLazyLoad />
              </Suspense>
            }
          >
            <Route index element={<NewProduct />}></Route>
            <Route path="feature" element={<Feature />}></Route>
            <Route path="newProducts" element={<NewProduct />}></Route>
          </Route>
          <Route path="/users" element={<Users />}>
            <Route path="userDetails/:id" element={<UserDetails />}></Route>
          </Route>
          <Route path="/userList" element={<ActiveUser />}></Route>
          <Route path="*" element={<PageError />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
