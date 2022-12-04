// import logo from './logo.svg';
import './App.css';
import Intro from './Komponen/Intro';
import BestGame from './Komponen/BestGame';
import NavigationBar from './Komponen/NavigationBar';
import TrendingGame from './Komponen/TrendingGame';

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar title="Game Holic"/>
        <Intro />
      </div>

      <div className="best">
        <BestGame/>
      </div>      

      <div className="trending">
        <TrendingGame/>
      </div>


    </div>
  )
}

export default App;
