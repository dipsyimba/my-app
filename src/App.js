import './App.css';
import Header from './components/header/header';
import Main from "./components/main/main";
import Marquee from "./components/marquee/marquee";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <Marquee bottom={true}/>
    </div>
  );
}

export default App;
