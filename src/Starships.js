// i tried


// import React, { useState } from 'react';
// import './App.css';
// import Starship from './Starship';
// import axios from 'axios';

// const Starships = (props) => {
//     const { starships } = props;
//     const [ship, setShip] = useState({});
//     starships.map( shippy => {
//         const fetchShip = () => {
//         axios.get(shippy)
//         .then(res => {
//         console.log(shippy);
//         setShip(res);
//         })
//         .catch(err => {
//         console.log('sorry')
//         })
//         }
//         fetchShip();
//         return (
//             <div>
//                 <Starship ship = {ship} />
//             </div>
//         );
//     })
    
//     return(
//         <>
//         <p>hello</p>
//         <Starship ship={ship} />
//         </>
        
//     )
    
// }

// export default Starships;



// starships.map(shippy => {

//     const fetchShip = () => {
//         axios.get(shippy)
//         .then(res => {
//         // console.log(res.data);
//         setShip(res);
//         })
//         .catch(err => {
//         console.log('sorry')
//         })
//     }
//     fetchShip();