import './css/CalendarHeader.css';

const CalendarHeader = ({ calendarName }) => {
  return (
    <div className="CalendarHeader">
      <h1 className="text-center">{calendarName}</h1>
    </div>
  );
}

export default CalendarHeader;
