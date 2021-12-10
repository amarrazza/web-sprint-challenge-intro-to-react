import React from 'react';
import './App.css';
import Character from './Character'

const Characters = (props) => {
    const { characters } = props;

    return (
        <div className='charactersWrapper'>
            {
                characters.map(char => {
                    // console.log(char);
                    return <Character char = {char} />
                })
            }
            <p> Hello world</p>
        </div>
    );
};

export default Characters;