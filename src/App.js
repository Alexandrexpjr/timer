import { useContext } from "react";
import ReactPlayer from "react-player";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import Timer from "./components/Timer";
import timerContext from "./context/timerContext";
import { genders } from "./helpers";

function App() {
  const { choosenGender, timeHasCome } = useContext(timerContext);
  return (
    <div className="all-content">
      <Header />
      <Timer />
      <Playlist />
      {
        choosenGender && <ReactPlayer url={genders[choosenGender]} playing={!timeHasCome} height={0} width={0}/>
      }
      <Footer />
    </div>
  );
}

export default App;
