import React from 'react';

const SyncArt = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif", padding: "1.5%" }}>
            <div style={{ fontSize: "170%", fontFamily: "Permanent Marker, cursive" }}>
                Synchronize Your Art
            </div>
            <div style={{ fontSize: "120%" }}>
                <p>
                    <b>Description:</b>
                    <br />
                    An application that lets users concurrently maintain their designs. Similar to Github, but 
                    this solution will be tailored for our amazing designers.
                </p>

                <p>
                    <b>Why?</b>
                    <br />
                    Since I'm into art (Photoshop and all), I get to meet a lot of creative designers, and they 
                    all complain about how there isn't a way for them to concurrently create their designs, the 
                    way developers are able to concurrently code via Github. Now, there are tools out there that 
                    get close to what I have in mind, but its not it! There is a lot we can do in this area and 
                    I'm super excited for this project.
                </p>
            </div>
        </div>
    )
}

export default SyncArt;