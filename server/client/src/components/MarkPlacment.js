
import Slider from "@mui/material-next/Slider";
import Typography from "@mui/material/Typography";

export default function MarkPlacement({value,handleSlideChange}) {

  return (
    <div className="flex flex-col items-center  bg-slate-200 h-22 rounded-lg mx-auto">
    <div style={{ width: 320 }} className=" flex gap-3 items-center p-2">
      <Typography variant="h6" className="text-md">100</Typography> {/* Increase font size */}
      <Slider
        value={value}
        onChange={(e)=>handleSlideChange(e.target.value)}
        max={100}
        min={0}
        aria-labelledby="continuous-slider"
      />
      <Typography variant="h6" className="text-md">0</Typography> {/* Increase font size */}
    </div>
    <Typography variant="h6" className="text-md border-slate-400 bg-slate-300 rounded-lg border-1 mb-2">Value : {value} </Typography> {/* Increase font size */}
    </div>
  );
}
