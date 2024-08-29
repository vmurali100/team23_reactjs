import { useEffect, useState } from 'react';

const TextToSpeech = () => {
    const [voices, setVoices] = useState([])
    const [selectedVoice, setSelectedVoice] = useState(null);
    const [text, setText] = useState('')

    useEffect(() => {
        const synth = window.speechSynthesis;


        const updateVoces = () => {
            const voices = synth.getVoices();
            setVoices(voices);
            setSelectedVoice(voices[0])
        }
        synth.onvoiceschanged = updateVoces;
        updateVoces();
        return () => {
            synth.onvoiceschanged = null;
        }
    }, []);

    const handleVoiceChange = (e) => {
        setSelectedVoice(voices[e.target.value]);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSpeak = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.voice = selectedVoice;
        window.speechSynthesis.speak(speech);
    };

    return ( 
        <div className='hero'>
            <h1>Text to speech Converter</h1>
            <textarea placeholder='Type anying you want' value={text} onChange={handleTextChange}/>
            <div className='row'>
                <select onChange={handleVoiceChange}>
                    {voices.map((voice, i)=>(
                        <option key={i} value={i}>
                            {voice.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleSpeak}>
                    <img src="" alt="" />Listen
                </button>
            </div>
                
            
        </div>
    )

}

export default TextToSpeech;







