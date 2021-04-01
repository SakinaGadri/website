import React from 'react';
import { Chrono } from "react-chrono";

const Demo = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            source: {
                url: "https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
            },
            type: "IMAGE",
        },
      }, {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            source: {
              url: "https://youtu.be/O8j92JbuW0Y",
              type: "mp4"
            },
            type: "VIDEO",
            name: "TAG"
          }
      }];

    return (
        <center>
        <div style={{width: "100%", height: "100%"  }}>
            <Chrono
                items={items}
                mode="VERTICAL_ALTERNATING"
            />
        </div>
        </center>
    );
}

export default Demo;
