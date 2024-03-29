import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main";
import DetailPage from "./pages/DetailPage";

function App() {
  
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({})
  
  const getData = () => {
    const url = "https://api.nasa.gov/planetary/apod";

    fetch(`${url}?api_key=${process.env.REACT_APP_API_KEY}&count=15`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Picture of The Day</h1>
      </header>
      <Routes>
        <Route path="/" element={<Main data={data} setSelectedData={setSelectedData}/>} />
        <Route path="/details" element={<DetailPage info={selectedData}/>} />
      </Routes>
    </div>
  );
}

export default App;
