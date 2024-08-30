// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TEXTUTILS"/>
      <div className="container">
      <TextForm heading="Enter The Text To Analyze"/>

      </div>
    </>
  );
}

export default App;
