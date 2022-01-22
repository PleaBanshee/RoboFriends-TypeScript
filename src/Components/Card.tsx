import * as React from 'react';

interface CardStatelessProps {
    name: string,
    email: string,
    id: number
}

// indicates that the Card component explicitly returns a type, as well as providing typechecking and autocomplete for static properties 
const Card: React.FunctionComponent<CardStatelessProps> = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?200×200`} alt="Robot.png" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );  
}

export default Card;