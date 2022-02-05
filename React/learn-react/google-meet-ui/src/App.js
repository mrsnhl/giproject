import React from 'react';

let people = [
    {
        name: 'Snehil',
        email: 'snehilsaluja@gmail.com',
        isMuted: false
    },
    {
        name: 'Chinmay',
        email: 'chinmayj20@iitk.ac.in',
        isMuted: true
    },
    {
        name: 'Vikas',
        email: 'vikashv20@iitk.ac.in',
        isMuted: true
    },
    {
        name: 'Ayush',
        email: 'aayush20@iitk.ac.in',
        isMuted: true
    }
];

function printName(obj) {
    return(
        <div>
        <div>{obj.name}</div>
        <div>{obj.email}</div>
        </div>
    )
}

function App() {
    return(
        <div id="allNames">
            {
                people.map(printName)
            }
        </div>
    )
}

export default App;