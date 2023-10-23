import React, { useRef } from 'react';

const Drum = (props) => {
    const audioRef = useRef(null);

    const playSound = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.currentTime = 0; // Reset the audio to the beginning
            audioElement.play();
            document.getElementById('display').textContent = props.name; // Update the display text
        }
    };

    return (
        <>
            <button className="drum-pad" id={`drum-${props.keyPress}`} onClick={playSound}>
                <audio ref={audioRef} src={props.url} id={`${props.keyPress}`}></audio>
                {props.keyPress}
            </button>
        </>
    );
};

export default Drum;
