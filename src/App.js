import "./styles.css";
import Form from "./Components/Form";

export default function App() {
  return (
    <div className="App">
      <div>
        <button>Home</button>
        <button>About</button>
        <button>Follow</button>
      </div>
      <div>
        <img src={require("./Assets/Logo.png")} alt="logo" width="300"/>
        <h1>Girls Who F1</h1>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <img src={require("./Assets/TrackMap.jpg")} width="275"/>
      </div>
      <div>
        <h2>Follow our Social Media!</h2>
        <div>
          <p>Spotify, Apple Music, Podcast, Tiktok, Twitter, Instagtram etc. icons w/ links</p>
        </div>
      </div>
      <div>
        <div>
          <img src={require("./Assets/Kenny1.jpg")} width="100"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div>
          <img src={require("./Assets/Hunter.jpg")} width="100"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div>
          <img src={require("./Assets/Raevin.jpg")} width="100"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
      <div>
          <h3>All About F1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src={require("./Assets/Screens.jpg")} width="100"/>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div>
            <p>phone number</p>
            <p>email address</p>
            <p>po box?</p>
          </div>
          <Form />
          <div className="Footer">Footer</div>
        </div>
    </div>
  );
}