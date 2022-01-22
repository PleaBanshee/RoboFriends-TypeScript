import React from 'react';

const SearchBox = ({ searchField,searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa2 mb3 ba b--green bw2 bg-lightest-blue" type="search" 
            placeholder="Search Robots"  onChange = {searchChange} />
        </div>
    );
}

export default SearchBox;