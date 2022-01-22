import React from 'react';

const MorseCode = () => {
    return (
        <div id="morse-code" style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif", padding: "1.5%" }}>
            <div style={{ fontSize: "170%", fontFamily: "Permanent Marker, cursive" }}>
                Morse Code
            </div>
            <div style={{ fontSize: "120%" }}>
                <p>
                    <b>Description:</b>
                    <br />
                    Decipher Morse Code, where the user is able to send morse code signal and the
                    application translates it into English phrases. The application should also be
                    able to process the other way around, i.e. given English text, translate it into
                    morse code.
                </p>

                <p>
                    <b>Why?</b>
                    <br />
                    I've always been fascinated with the military: their technology, techniques and the
                    resources. Understanding morse code makes me feel like I know a secret language that
                    I can use to communicate to a certain crowd. I've also found detective work really
                    interesting; if I had the option to choose another career, I'd choose to be a detective.
                </p>
            </div>
        </div>
    )
}

export default MorseCode;