import React from 'react'
import "./Chip.css"

function Chip(props) {
    return (
        <div className="chip">
            <div className="chip__avatar">
                <img src={props.image} width={20} height={20}/>
            </div>
            <div className="chip__label">
                <span>{props.label}</span>
            </div>
        </div>
    )
}

export default Chip
