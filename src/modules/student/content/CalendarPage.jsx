import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = ({ events, onDateClick }) => {
  return (
    <Calendar
      onChange={onDateClick}
      value={new Date()}
      tileContent={({ date }) => {
        const event = events.find(
          (event) => event.date === date.toISOString().split("T")[0]
        );
        return event && <p>{event.title}</p>;
      }}
    />
  );
};

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    { title: "Exam 1", date: "2024-01-20" },
    { title: "Lecture 1", date: "2024-01-25" },
    // Add more events as needed
  ];

  const handleDateClick = (date) => {
    // Handle date click event if needed
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Your Calendar</h1>
      <CalendarComponent events={events} onDateClick={handleDateClick} />
      {selectedDate && (
        <p>Selected Date: {selectedDate.toISOString().split("T")[0]}</p>
      )}
    </div>
  );
}

export default CalendarPage;
