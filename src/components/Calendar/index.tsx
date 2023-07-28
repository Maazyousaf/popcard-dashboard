import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "../Icons";

const DatePickerCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
    }
  };
  return (
    <div className="datepicker-with-icon flex justify-end">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy h:mm aa"
        customInput={
          <div className="datepicker-input-container  flex items-center gap-2 px-3.5 bg-white border border-borderColor rounded-md h-[48px] text-[#7E8299] font-semibold text-sm">
            <input
              className="datepicker-input outline-none"
              value={startDate.toDateString()}
            />
            <Calendar />
          </div>
        }
      />
    </div>
  );
};
export default DatePickerCalendar;
