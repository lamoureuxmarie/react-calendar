import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CalendarHeader from './components/CalendarHeader'

const App = () => {
  return (
    <div className="App">
      <CalendarHeader calendarName={'Bday calendar 🎉'} />
    </div>
  );
}

export default App;
