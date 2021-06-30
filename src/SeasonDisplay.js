import './SeasonDisplay.css';
import React from 'react';


const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0 ?'summer':'winter';
    } else {
        return lat>0 ?'summer':'winter';
    }
};

const SeasonConfig = {
    summer: {
        text: "Lets hit the beach!",
        iconName : "sun"
    },
    winter: {
        text: "Burr, it is chilly!",
        iconName : "snowflake"
    }
};

const SeasonDisplay=(props)=>{
    // return(<div>
    //     <div>Lat : {props.lat}</div>
    //     <div>Lat : {props.long}</div>
    //     </div>);
    // const text = season ==='winter'?'Burr, it is chilly!':'Lets hit the beach!';
    // const icon = season==='winter'?'snowflake':'sun';
    const season = getSeason(props.lat,new Date().getMonth());
    const { text, iconName } = SeasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`}/> 
            <h1>{text}</h1>
            <i className = {`icon-right massive ${iconName} icon`}/> 
        </div>
    );
}


export default SeasonDisplay;