import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//react-route
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//toast
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

//firebase
// import firebase from "firebase/app";
// import { getAuth } from "firebase/auth";

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

//layout
import Footer from "./layout/Footer";
import Header from "./layout/Header";

//context
import { userContext } from "./context/Context";

import "./App.css";

// //firebase
// import app from "./Config/firebaseConfig";
// //authentication
// const auth = getAuth(app);

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="w-100">
            <Router basename="/GitRepo">
                <ToastContainer />
                <userContext.Provider value={{ user, setUser }}>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                            errorElement={<NotFound />}
                        />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="./GitRepo" element={<Signin />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </userContext.Provider>
            </Router>
        </div>
    );
};

export default App;
