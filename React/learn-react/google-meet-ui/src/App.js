import React from 'react';
import PeopleComponent from './PeopleComponent';

let people = [
    {
        name: 'Snehil',
        email: 'snehilsaluja@gmail.com',
        isMuted: false,
        color: 'lightblue'
    },
    {
        name: 'Chinmay',
        email: 'chinmayj20@iitk.ac.in',
        isMuted: true,
        color: 'lightgreen'
    },
    {
        name: 'Vikas',
        email: 'vikashv20@iitk.ac.in',
        isMuted: true,
        color: 'goldenyellow'
    },
    {
        name: 'Ayush',
        email: 'aayush20@iitk.ac.in',
        isMuted: true,
        color: 'blue'
    }
];

function App() {
    return(
        <div id="allNames">
            {
                people.map(function(obj) {
                    return (
                        <PeopleComponent obj={obj} color={obj.color} />
                    )
                }
                )
            }
        </div>
    )
}

export default App;