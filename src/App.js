import "./App.css";
import Ztext from "react-ztext";
function App() {
  return (
    <div className="App">
      <div className="under-construction">
        <div className="animation">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_AQcLsD.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "280px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <Ztext
          depth="0.7rem"
          direction="both"
          event="pointer"
          eventRotation="30deg"
          eventDirection="default"
          fade={false}
          layers={10}
          perspective="500px"
          className="z-text"
        >
          <h1>Coming Soon 👀</h1>
        </Ztext>
        <footer className="footer">
          <a href="mailto:chubixax@protonmail.com">Email me</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

