import React from 'react';
import classes from './IssuesDisplay.module.css'
const issueDisplay = (props) => {
    let displayIsuues = Object.keys(props.display).map((key) => {
        let color=[classes.Display];
        if(key==='total'){
            color.push(classes.Blue);
        }
        

        return (<div key={key} className={color.join(' ')}>
            <div>{props.display[key]}</div>
            <div>{key}</div>
        </div>)
    })

    return (
        <div className={classes.Wrapper}>
            {displayIsuues}
        </div>
    )

}
export default issueDisplay;