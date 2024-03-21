import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./ResultManyLoan.css";

import ArrowIcon from "../assesst/arrow.png";
export default function ResultManyLoan() {
  return (
    <div>
      <main className="">
        <div className="flex justify-around gap-2">
          <div className="max-w-5xl w-full mt-16 flex flex-col gap-12">
            <div dir="rtl" style={{ marginBottom: "-10px" }}>
              <div className="flex flex-col">
                <span className="text-black mr-4 text-base sm:text-2xl font-semibold">
                  מעוניין לקחת הלוואה רגילה
                </span>
                <span className="text-black mr-4 text-base sm:text-2xl font-semibold">
                  מעוניין לקחת הלוואה עד 100 אלף ש"ח
                </span>
                <span className=" text-green-500 mr-4 text-xl sm:text-4xl font-semibold">
                  אני מעוניין לקחת כמה הלוואות
                </span>
              </div>
              <hr className="h-[4px] sm:h-[8px] my-0 bg-gray-700 max-w-3xl mt-2" />
            </div>

            <div dir="rtl" className="flex flex-row gap-x-48 ">
              <p
                className="dan mr-3 sm:mr-0 ml-5 sm:ml-10 text-base sm:text-xl font-bold"
                style={{ marginBottom: "-40px" }}
              >
                אין לך אפשרות לקחת כמה הלוואות עבור סכום הקטן מ-100 אלף ש"ח
              </p>
            </div>

            <div dir="rtl" className="flex flex-row gap-x-48 ">
              <p
                className="text-black mr-3 text-lg sm:text-xl font-bold"
                style={{ marginBottom: "-40px" }}
              >
                אופציות אחרות
              </p>
            </div>
            <div
              dir="rtl"
              className="flex flex-row gap-x-8 sm:gap-x-48 "
              style={{ marginBottom: "-65px" }}
            >
              <p className="text-black mr-4 text-sm font-semibold">
                הגשת בקשה <br />
                פרטנית בבנק
              </p>
              <p className="text-black mr-4 text-sm font-semibold">
                הבנק בודק את <br />
                הבקשה
              </p>
              <p className="text-black mr-4 text-sm font-semibold">
                החלטה של הבנק <br />
                האם לאשר <br />
                הלוואה פרטנית
              </p>
            </div>

            <div className="container" style={{ marginBottom: "-30px" }}>
              <div className="content">
                <div className="arrow">
                  <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
                </div>
              </div>
            </div>

            <div
              dir="rtl"
              className="flex flex-row gap-x-48 text-black ml-20 text-sm sm:text-base font-medium   "
              style={{ marginBottom: "-55px" }}
            >
              <p className="mr-3 sm:mr-0">
                מחפש עזרה בתהליך?{" "}
                <Link to={'/contactform'} className="no-underline hover:underline">
                <span className="highlighted-text mr-1 sm:mr-0">פנה אלינו לפרטים</span>
                </Link>
              </p>
            </div>

            <div
              dir="rtl"
              className="flex flex-row gap-x-48 text-black ml-20 mt-0 text-sm sm:text-base font-medium   "
            >
              <p >
               <span className="mr-3 sm:mr-0 text-sm sm:text-base text-black font-semibold">עלויות משוערות </span> <p className="p-2 sm:p-0 mr-1 sm:mr-0 text-sm sm:text-lg">פתיחת בקשה פרטנית: 500 ש"ח</p>{" "}
              </p>
            </div>
          </div>
          <div
            className="w-[350px] border-l-4 mt-20 mr-5 hidden flex-col lg:block"
            dir="rtl"
          >
            <Link to={"/"} className="no-underline hover:underline">
              <h1 className="text-3xl text-slate-600 font-bold mb-4 ">
                דף הבית
              </h1>
            </Link>
            <Link to={"/newmortagage"} className="no-underline hover:underline">
              <h2 className="text-xl text-slate-500 ">
                מעוניין לקחת משכנתא חדשה
              </h2>
            </Link>

            <p className="text-slate-500 mr-3 text-base">
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
                <Tooltip title="אומדן בלבד. פרטי ההלואה הסופיים הם הקובעים">
                  <IconButton>
                    <FaExclamationCircle className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Link
                  to={"/resultmanyloan"}
                  className="no-underline hover:underline"
                >
                  <span className="text-slate-500">
                    אני מעוניין לקחת כמה הלוואות{" "}
                  </span>
                </Link>
                <Tooltip title="אומדן בלבד. פרטי ההלואה הסופיים הם הקובעים">
                  <IconButton>
                    <FaExclamationCircle className="w-4 h-4" />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
            <Link
              to={"/contactformaboveonehandred"}
              className="no-underline hover:underline"
            >
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
    </div>
  );
}
