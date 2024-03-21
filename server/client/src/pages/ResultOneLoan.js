import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "./ResultOneLoan.css";
import ArrowIcon from "../assesst/arrow.png";

export default function ResultOneLoan() {
  return (
    <div>
      <main className="">
        <div className="flex flex-col sm:flex-row sm:justify-around gap-2">
          <div className="max-w-sm sm:max-w-5xl  w-full mt-8 sm:mt-16 flex flex-col gap-8 sm:gap-12">
            <br />

            <div
              dir="rtl"
              className="flex flex-row gap-x-2 sm:gap-x-48 "
              style={{ marginBottom: "-50px" }}
            >
              <span className="text-black mr-1 sm:mr-4 text-xs sm:text-sm font-semibold">
                יש ליצור קשר עם הבנק דוגמא לבנק יהב
              </span>
              <p className="text-black mr-4 text-xs sm:text-sm font-semibold">
                נא לספק ת.ז,פרטי חשבון בנק, פרטים נוספים לפי הצורך
              </p>
              <p className="text-black mr-4 text-xs sm:text-sm font-semibold">
                יש לשלוח 3 משכרות אחרונות
              </p>
              <p className="text-black ml-10 mr-5 sm:mr-0 sm:ml-20 text-xs sm:text-sm font-semibold">
                הכסף מתקבל בחשבון
              </p>
            </div>

            <div className="container">
              <div className="content">
                <div className="arrow">
                  <img src={ArrowIcon} alt="Arrow" className="arrow-icon" />
                </div>
              </div>
            </div>

            <div
              dir="rtl"
              className="flex flex-row gap-x-8 sm:gap-x-48 text-black ml-0 sm:ml-20 scroll-mt-0 text-base font-medium "
              style={{ marginBottom: "-30px" }}
            >
              <p>
                מחפש נותן שירות או צריך עזרה בתהליך?{" "}
                <Link to={'/contactform'}  className="no-underline hover:underline">
                <span className="highlighted-text">פנה אלינו לפרטים</span>
                </Link>
              </p>
              <p></p>
            </div>

            <div
              dir="rtl"
              className="flex flex-row gap-x-48 text-black mt-5 sm:mt-0 sm:ml-20  text-base font-medium	 "
            >
              <p>
                עלויות משוערות{" "}
                <p>
                  פתיחת תיק: 1000 ש"ח<p>עמלות ביצוע פעולה: 0.1%</p>
                </p>{" "}
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
                  <span className="text-slate-600  font-bold">
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
