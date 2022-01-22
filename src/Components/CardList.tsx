import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
        const cardArray = robots.map((user,i) => {
            return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        });
        return (
            <div>
               {cardArray}
            </div>
        );
}

export default CardList;

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. Keys should have unique values