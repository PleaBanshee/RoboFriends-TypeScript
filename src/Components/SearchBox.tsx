import * as React from 'react';

// SyntheticEvent indicates React's imlementation of events, not the native DOM
interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <div className="pa2">
            <input 
                className="pa2 mb3 ba b--green bw2 bg-lightest-blue" 
                type="search" 
                placeholder="Search Robots"  
                onChange = {searchChange} 
            />
        </div>
    );
}

export default SearchBox;