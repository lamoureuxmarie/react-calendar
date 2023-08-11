import './css/CalendarHeader.css';

const CalendarHeader = ({ calendarName }) => {
  return (
    <div className="CalendarHeader">
      <h1 className="text-center">{calendarName}</h1>
      <div className="buttons-container d-flex justify-content-center align-items-center py-3">
        <button className="btn btn-dark mx-1">Create New Event</button>
        <button className="btn btn-outline-dark mx-1">Sign out</button>
      </div>
    </div>
  );
}

export default CalendarHeader;
