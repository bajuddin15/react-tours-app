import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [toursData, setToursData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMoreData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setToursData(data);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    const newDataArr = toursData.filter((tour) => tour.id !== id);
    setToursData(newDataArr);
  };
  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div
      className="app container-fluid"
      style={loading ? { height: "100vh" } : { outline: "none" }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="content">
          <h1>Ours Tours</h1>
          <div className="underline"></div>
          {toursData.length == 0 ? (
            <button onClick={() => fetchMoreData()} className="refresh-btn">
              Refresh <p>https://course-api.com/react-tours-project</p>
            </button>
          ) : (
            <Tours allTours={toursData} removeTour={removeTour} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
