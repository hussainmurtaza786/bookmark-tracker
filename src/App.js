import { useState } from 'react';
import './App.css';
import UserInput from './Components/Ui/UserInput';
import InputSubmit from './Components/Ui/InputSubmit';

function App() {
  const [enterData, setEnterData] = useState([]);

  const submitFormHandler = (name, url) => {
    setEnterData((prev) => [...prev, { name, url }]
    )
  }
  return (
    <div >
      <UserInput onSubmit={submitFormHandler} />
      <InputSubmit data={enterData} />
    </div>
  );
}

export default App;
