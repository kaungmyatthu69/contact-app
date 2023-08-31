import React from "react";
import './card.scss'
const Card = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="card">
            {children}
        </div>
    );
};

export default Card;
