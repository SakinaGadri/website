import React from 'react';

const SignLang = () => {
    return (
        <div id="sign-lang" style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif", padding: "1.5%" }}>
            <div style={{ fontSize: "170%", fontFamily: "Permanent Marker, cursive" }}>
                Sign Language
            </div>
            <div style={{ fontSize: "120%" }}>
                <p>
                    <b>Description:</b>
                    <br />
                    Decipher Sign Language, where the user is able to do sign actions,
                    and the application is able to process it and give the user the English
                    meaning of the gestures. The application should also be able translate
                    English text into Sign Language gestures. For my first go at this application,
                    I will probably stick to just English, but probably want to expand to other
                    languages in the future. <br /> <br />

                    Developing this application will probably have a lot to do with neural networks
                    and machine learning. Love the challenge in this idea!
                </p>

                <p>
                    <b>Why?</b>
                    <br />
                    I've think that technology, as it exists today, is not very accessible. There aren't
                    many tools out there to help the blind, deaf and dumb. This idea came to me when walking
                    through my campus and seeing brail encoding of each room, and thinking to myself, "How
                    would a blind person interact with a computer? Is there any software or hardware developed
                    to make their usage easy?".
                </p>
            </div>
        </div >
    )
}

export default SignLang;