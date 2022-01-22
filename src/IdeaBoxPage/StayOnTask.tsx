import React from 'react';

const StayOnTask = () => {
    return (
        <div id="stay-on-task" style={{ display: "flex", flexDirection: "column", fontFamily: "Karla, sans-serif", padding: "1.5%" }}>
            <div style={{ fontSize: "170%", fontFamily: "Permanent Marker, cursive" }}>
                Stay On Task
            </div>
            <div style={{ fontSize: "120%" }}>
                <p>
                    <b>Description:</b>
                    <br />
                    An application (chrome plugin or extension) that keeps me on task, and doesn't let me procrastinate 
                    my life away.
                </p>

                <p>
                    <b>Why?</b>
                    <br />
                    The amount of times I end up procrastinating instead of finishing the task I'm on, is insaanee! 
                    I understand that I need to use my time more effectively, but there is a world out there for me 
                    to discover, sitting at the tips of my fingers! Its hard to resist..
                    I also want to get some experience developing a Chrome extention or a plugin :)
                </p>
            </div>
        </div>
    )
}

export default StayOnTask;