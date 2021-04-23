import "./SeasonDisplay.css"
import React from "react";


const seasonConfig = {
    summer: {
        promt: "Let's go to the Beach!",
        iconName: "sun"
    },
    winter: {
        promt: "Burr its chilly!",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }else{
       return lat > 0 ? "winter" : "summer"; 
    }
}

const SeasonDisplay = props => {
   const season = getSeason(props.lat, new Date().getMonth());
   const {promt, iconName} = seasonConfig[season];
    // const promt = season === "winter" ? "Burr its chilly!" : "Lets go to the Beach!";
    // const icon = season === "summer" ? "sun" : "snowflake";

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{promt}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;