import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
export default function Home() {
  SwiperCore.use([Navigation]);

  useEffect(() => {
    localStorage.setItem("locate", "");
  }, []);
  const listing = [];
  listing.push(
    "https://cdn.i24news.tv/uploads/16/ab/54/dc/8b/f3/b6/67/1f/ea/98/50/9e/92/18/76/16ab54dc8bf3b6671fea98509e921876.jpg"
  );
  listing.push(
    "https://www.israelhayom.com/wp-content/uploads/2021/03/leumi-yy.jpg"
  );
  listing.push(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayzCCZf5m_yjSDaUtgNJ4UEt-zuK-btwEpB4U1AKZRqul_Zq2tPCneSemaoBrGbAGSno&usqp=CAU"
  );

  return (
    <main className="">
      <div className="flex flex-col lg:flex-row justify-around gap-2">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#11f",
          }}
          className=" max-w-80 lg:max-w-5xl mt-10 lg:mt-20"
          navigation
        >
          {listing.map((url) => (
            <SwiperSlide key={url}>
              <img
                className=" w-96 lg:w-full object-cover h-[200px] lg:h-[500px] rounded-lg"
                src={url}
                alt="img-listing"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="w-[350px] border-l-4 mt-5 lg:mt-20 mr-5 flex flex-col gap-1 lg:gap-0"
          dir="rtl"
        >
          <Link to={"/"} className="no-underline hover:underline">
            <h1 className=" text-lg lg:text-3xl text-slate-600 font-bold mb-2 lg:mb-4">דף הבית</h1>
          </Link>
          <Link to={"/newmortagage"} className="no-underline hover:underline">
            <h2 className=" text-lg lg:text-xl text-slate-500 ">
              מעוניין לקחת משכנתא חדשה
            </h2>
          </Link>

          <p className="text-slate-200 lg:text-slate-500 mr-3 text-base lg:text-base">
            רוצה לבדוק איפה הכי כדאי לי לקחת
            <br /> משכנתא
          </p>

          <Link to={"/loan"} className="no-underline hover:underline">
            <h2 className=" text-lg lg:text-xl text-slate-500 ">
              מעוניין לקחת הלוואה רגילה
            </h2>
          </Link>
          <Link to={"/loan"} className="no-underline hover:underline">
            <p className="text-slate-500 mr-3 mb-3 text-base lg:text-base">
              {" "}
              מעוניין לקחת הלוואה עד 100 אלף שייח
            </p>
          </Link>
          <div className="flex flex-col gap-2 mr-8 text-slate-500">
            <div className="flex flex-row gap-2 items-center">
              <Link to={"/loan"} className="no-underline hover:underline">
                <span className="text-slate-500 ">
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
            <p className="text-slate-500 mr-3 text-base lg:text-base mt-4">
              מעוניין לקחת הלוואה מעל 100 אלף שייח
            </p>
          </Link>
          <Link to={"/contactform"} className="no-underline hover:underline">
            <h4 className="text-slate-500 text-xl lg:text-lg">צור קשר</h4>
          </Link>
        </div>
      </div>
    </main>
  );
}
