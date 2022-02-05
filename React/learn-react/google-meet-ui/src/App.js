import React from 'react';

function Inside() {
    return(<div>We are inside App</div>);
}

export default function App() {
    return(
        <div>
            <Inside />
        </div>
    )
}