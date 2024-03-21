import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import NewMortagage from "./pages/NewMortagage";
import Commissions from "./pages/Commissions";
import Loan from "./pages/Loan";
import GetPassword from "./pages/GetPassword";
import ChangePassword from "./pages/ChangePassword";
import PrivateRoute from "./components/PrivateRoute";
import ContactForm from "./pages/ContactForm";
import ContactFormAnswers from "./pages/ContactFormAnswers";
import ResultOneLoan from "./pages/ResultOneLoan";
import ResultManyLoan from "./pages/ResultManyLoan";
import ContactFormAboveOneHandreds from "./pages/ContactFormAboveOneHandreds";
import Accessibilik from "accessibility-react-widget";
export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Accessibilik className="ml-1 fixed size w-10 h-10 bg-slate-200 text-blue-500 border-2 rounded-lg cursor-pointer " />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/loan" element={<Loan />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/getpassword" element={<GetPassword />} />
        <Route path="/newmortagage" element={<NewMortagage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/contactformanswers" element={<ContactFormAnswers />} />
        <Route
            path="/contactformaboveonehandred"
            element={<ContactFormAboveOneHandreds />}
          />
        <Route element={<PrivateRoute />}>
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/resultoneloan" element={<ResultOneLoan />} />
          <Route path="/resultmanyloan" element={<ResultManyLoan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
