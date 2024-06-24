import React from "react";
import DrumPad from "./DrumPad";
import "./App.css";

const sounds = [
  { 
    key: "Q",
    sound: "/sounds/Heater-1.mp3",
    name: "Heater-1"
  },
  { 
    key: "W",
    sound: "/sounds/Heater-2.mp3",
    name: "Heater-2"
  },
  { 
    key: "E",
    sound: "/sounds/Heater-3.mp3",
    name: "Heater-3"
  },
  { 
    key: "A",
    sound: "/sounds/Heater-4_1.mp3",
    name: "Heater-4"
  },
  { 
    key: "S",
    sound: "/sounds/Heater-6.mp3",
    name: "Clap"
  },
  { 
    key: "D",
    sound: "/sounds/Dsc_Oh.mp3",
    name: "Open-HH"
  },
  { 
    key: "Z",
    sound: "/sounds/Kick_n_Hat.mp3",
    name: "Kick_n_Hat"
  },
  { 
    key: "X",
    sound: "/sounds/RP4_KICK_1.mp3",
    name: "Kick"
  },
  { 
    key: "C",
    sound: "/sounds/Cev_H2.mp3",
    name: "Closed-HH"
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSound: ""
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  playSound(key) {
    const sound = sounds.find((sound) => sound.key === key);
    if (sound) {
      const audio = document.getElementById(key);
      if (audio && audio.play) {
        audio.currentTime = 0;
        audio.play();
        this.setState({ currentSound: sound.name })
      }
    }
  }

  handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    this.playSound(key);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <div>
            <ul >
              <li id="pads">
                {sounds.map((sound) => (
                  <DrumPad
                    key={sound.key}
                    id={sound.key}
                    sound={sound.sound}
                    playSound={this.playSound}
                  />
                ))} 
              </li>
            </ul>
          </div>
          <p id="current-sound">{this.state.currentSound}</p>
        </div>
      </div>
    );
  }
}

export default App;