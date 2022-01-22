import React from 'react'; // must import react when working with JSX

const Card = ({ id,name,email }) => { // pass props from Card object in index.js to function. The props have been destructured
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?200×200`} alt="Robot.png" /> {/*add ?lenght×width after image url to specify size of image */}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );  
}

export default Card;