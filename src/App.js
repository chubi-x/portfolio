import "./App.css";
import Ztext from "react-ztext";
function App() {
  return (
    <div className="App">
      <div className="under-construction">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_AQcLsD.json"
          background="transparent"
          speed="1"
          style={{ width: "280px", height: "280px" }}
          loop
          autoplay
        ></lottie-player>
        <Ztext
          depth="0.7rem"
          direction="both"
          event="pointer"
          eventRotation="65deg"
          eventDirection="default"
          fade={false}
          layers={10}
          perspective="500px"
          style={{
            fontSize: "1.2rem",
          }}
        >
          <h1>Coming Soon 👀</h1>
        </Ztext>
      </div>
    </div>
  );
}

export default App;

