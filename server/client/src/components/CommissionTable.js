import React from 'react'
import ComTable from "../components/ComTable";

export default function CommissionTable() {
  return (
    <div className="max-w-xs sm:max-w-5xl w-full mt-12 flex flex-col gap-12" dir="rtl">
            <div className="flex gap-3 items-center">
            <span className="font-semibold"> הכי כדאי מבחינת עמלות – אופצייה ג' </span>
            <span className="text-green-600 font-semibold">בנק הפועלים</span>
            </div>
            <ComTable/>
            <p className="font-semibold">* הערכה בלבד</p>
        </div>
  )
}
