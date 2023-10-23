
import './App.css';
import Drum from './Drum';
import { useEffect } from 'react'

const audioClips = [{
  keyPress: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  name: "Heater-1"
},
{
  keyPress: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  name: "Heater-2"
},
{
  keyPress: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  name: "Heater-3"
}, {
  keyPress: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  name: "Heater-4"
},
{
  keyPress: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  name: "Clap"
},
{
  keyPress: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  name: "Open HH"
}, {
  keyPress: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  name: "Kick n' Hat"
},
{
  keyPress: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  name: "Kick"
},
{
  keyPress: "C",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  name: "Closed HH"
}]

function App() {

  const playSound = (event) => {
    // Get the uppercase key pressed
    const keyPressed = event.key.toUpperCase();
    const audioClip = audioClips.find((clip) => clip.keyPress === keyPressed);
    if (audioClip) {
      const audioElement = document.getElementById(keyPressed);
      if (audioElement) {
        audioElement.currentTime = 0; // Reset the audio to the beginning
        audioElement.play();
        document.getElementById('display').textContent = audioClip.name; // Update the display text
      }
    }
  };

  useEffect(() => {
    document.getElementById('drum-machine').addEventListener('keydown', playSound);
    return () => {
      // Remove the event listener when the component unmounts
      document.getElementById('drum-machine').removeEventListener('keydown', playSound);
    };
  }, []);

  return (
    <>
      <div className='container-fuild main-container'>
        <h2 style={{ color: 'white', margin: '30px' }}>Drum Machine</h2>
        <div id='drum-machine' tabIndex={0}>
          <div className='drum-box'>
            {audioClips.map((clip) => (
              <Drum audioClips={audioClips} keyPress={clip.keyPress} url={clip.url} name={clip.name} />
            ))}

          </div>

        </div>
        <div className='display-text'>
          <h4 id='display'>{''}</h4>
        </div>
      </div>
    </>
  );
}

export default App;
