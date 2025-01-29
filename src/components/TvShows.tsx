import React from 'react'
import './TvShows.css'

// Interface for structure of tv-show
interface Show {
    title: string;
    seen: boolean;
    seasons: number;
}

const TvShows = () => {
    // Array with tv-shows, using the interface
    const shows: Show[] = [
        { title: "The Walking Dead", seen: true, seasons: 11},
        { title: "Yellowstone", seen: true, seasons: 5 },
        { title: "Arcane", seen: true, seasons: 2 },
        { title: "Bridgerton", seen: false, seasons: 3 },
        { title: "Big Mouth", seen: true, seasons: 7 },
        { title: "Outlander", seen: false, seasons: 7 },
        { title: "Lost", seen: true, seasons: 6 }, 
        { title: "The Office", seen: false, seasons: 9 }
    ]

    // Return ul-list, iterate trough array and add shows as li-elements
    return (
        <ul>
            {
                shows.map((show, index) => (
                    <li key={index}>
                        <h2>{show.title}</h2>
                        <p className='seasons'><span className='semibold'>Antal säsonger:</span> {show.seasons}</p>
                        <p className='seen'><span className='semibold'>Har sett:</span> {show.seen ? (
                            <i className="fa-solid fa-check"></i>
                        ) : ('inte än')}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

export default TvShows