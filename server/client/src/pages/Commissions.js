import React from "react";

import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import ComTable from "../components/ComTable";

export default function Commissions() {

  return (
    <main className="">
      <div className="flex justify-around gap-2">
        <div className="max-w-5xl w-full mt-24 flex flex-col gap-12" dir="rtl">
            <div className="flex gap-3 items-center">
            <span className="font-semibold"> הכי כדאי מבחינת עמלות – אופצייה ג' </span>
            <span className="text-green-600 font-semibold">בנק הפועלים</span>
            </div>
            <ComTable/>
            <p className="font-semibold">* הערכה בלבד</p>
        </div>
        <div
          className="w-[350px] border-l-4 mt-20 mr-5 flex flex-col"
          dir="rtl"
        >
          <Link to={"/"} className="no-underline hover:underline">
            <h1 className="text-3xl text-slate-500  mb-4 ">דף הבית</h1>
          </Link>
          <Link to={"/newmortagage"} className="no-underline hover:underline">
            <h2 className="text-xl text-slate-500 ">
              מעוניין לקחת משכנתא חדשה
            </h2>
          </Link>
         
            <p className="text-slate-700 font-bold mr-3 text-base">
              רוצה לבדוק איפה הכי כדאי לי לקחת
              <br /> משכנתא
            </p>
          
          <Link to={"/loan"} className="no-underline hover:underline">
            <h2 className="text-xl text-slate-500 ">
              מעוניין לקחת הלוואה רגילה
            </h2>
          </Link>
          <Link to={"/loan"} className="no-underline hover:underline">
            <p className="text-slate-500 mr-3 mb-3 text-base">
              {" "}
              מעוניין לקחת הלוואה עד 100 אלף שייח
            </p>
          </Link>
          <div className="flex flex-col gap-2 mr-8 text-slate-500">
            <div className="flex flex-row gap-2 items-center">
              <Link to={"/loan"} className="no-underline hover:underline">
                <span className="text-slate-500">
                  אני מעוניין לקחת הלוואה אחת
                </span>
              </Link>
              <FaExclamationCircle />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Link to={"/resultmanyloan"} className="no-underline hover:underline">
                <span className="text-slate-500">
                  אני מעוניין לקחת כמה הלוואות{" "}
                </span>
              </Link>
              <FaExclamationCircle />
            </div>
          </div>
          <Link to={"/contactformaboveonehandred"} className="no-underline hover:underline">
            <p className="text-slate-500 mr-3 text-base mt-4">
              מעוניין לקחת הלוואה מעל 100 אלף שייח
            </p>
          </Link>
          <Link to={"/contactform"} className="no-underline hover:underline">
            <h4 className="text-slate-500 text-lg">צור קשר</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
