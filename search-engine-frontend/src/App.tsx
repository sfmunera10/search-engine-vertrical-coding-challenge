import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button/Button";
import Loader from "./components/loader/Loader";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card
          className="large"
          border="none"
          borderRadius="8px"
          cardPhotoUrl="https://cdn.puntosleal.com/lc/images/marketplace/home-banner-slide-2-mb.png"
          altPhotoDescription="Cheems"
          cardTitle="Cheems"
          cardShortDescription="Cheems"
          cardFullDescription="Cheems"
          cardDetailRedirectUrl="Cheems"
          isRedirectUrlActive={false}
        />
        <Loader/>
        <Button
          className="primary"
          type="button"
          height="50px"
          onClick={() => console.log("You clicked on the pink circle!")}
          border="none"
          borderRadius="8px"
          width="120px"
          childrenText="Go!"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
