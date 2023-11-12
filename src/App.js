import './assets/scss/App.scss';
import SwiperContainer from "./components/SwiperContainer";
import React from "react";


function App() {
  return (
      <>
        <div className='app-container'>
            <div className="app-content">
                <h1 className="main-title">The Monolith story</h1>
                <SwiperContainer/>
            </div>
        </div>
      </>
  );
}

export default App;
