import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
export default function ContactFormAnswers() {
  return (
    <div>
      <main className="">
        <div className="flex flex-col sm:flex-row sm:justify-around gap-2">
          <div className="flex flex-col max-w-5xl w-full">
            <h1 className="text-right text-3xl font-semibold mt-36 mr-20">
              בקשתך התקבלה. ניצור איתך קשר <br />
              בהקדם
            </h1>
          </div>
          <div
            className="w-[350px] border-l-4 mt-20 mr-5 hidden flex-col sm:block"
            dir="rtl"
          >
            <Link to={"/"} className="no-underline hover:underline">
              <h1 className="text-3xl text-slate-600 mb-4 ">דף הבית</h1>
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
              <h4 className="text-slate-500 font-bold text-lg">צור קשר</h4>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
