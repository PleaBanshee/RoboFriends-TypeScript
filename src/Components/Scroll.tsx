import React from 'react'; 

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px'}}> {/* Use double curly brackets to add styling to components */}
            {props.children} {/* used to display whatever you include between the opening and closing tags when invoking a component */}
        </div>
    );
}

export default Scroll; // Used to create a custom component in App.js