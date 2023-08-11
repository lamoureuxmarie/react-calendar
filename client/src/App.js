import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CalendarHeader from './components/CalendarHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const events = [
  { title: 'Meeting', start: new Date() }
]

const App = () => {
  return (
    <div className="App">
      <CalendarHeader calendarName={'Bday calendar 🎉'} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default App;
