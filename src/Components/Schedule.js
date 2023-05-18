import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from 'react-calendar'
//class="w3-container w3-black w3-center w3-opacity w3-padding-64"

let api_football_key = process.env.REACT_APP_API_FOOTBALL_KEY
let url = 'https://v1.formula-1.api-sports.io/races'
let currentYear = new Date().getFullYear()
//FIX

export default function Pick() {

    const initialRaceInfo = {
        date: '',
        distance: '',
        name: '',
        location: '',
        image: ''
    }

    const [raceInfo, setRaceInfo] = useState(initialRaceInfo);

    const getNextRace = () => {
        axios.get(`${url}?season=${currentYear}`,
            {
                headers: {
                    "x-rapidapi-key": api_football_key,
                    "x-rapidapi-host": "api-formula-1.p.rapidapi.com/"
                }
            })
            .then(res => {
                //console.log(res.data.response.find(el => el.status === 'Scheduled' && el.type === 'Race'))
                let data = res.data.response.find(el => el.status === 'Scheduled' && el.type === 'Race')

                let { date, distance, competition, circuit } = data
                setRaceInfo({
                    date,distance,
                    location: `${competition.location.city}, ${competition.location.country}`,
                    name: competition.name,
                    image: circuit.image
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getNextRace()
    }, []);

    const dateFormat = (str) => {
        //make more inclusive ; esp day
        let strArray = Array.from(str.split('-'))
        //^^ this makes an ordered list, not an array
        // let month = strArray[1].trim()
        // let day = strArray[3].slice(0,3)
        // let year = strArray[0]

        let month = str.substring(5,7).trim()
        let day = str.substring(8,10)
        let year = str.substring(0,4)

        return `${month}/${day}/${year}`
    }

    const calendarOnClick = (value, evt) => {
        evt.preventDefault();
        console.log(value)
    }

    return (
        <div className="w3-row-padding w3-padding-16 w3-container w3-white w3-hover-white">
        <div className="w3-content">
            <div className="w3-twothird">
                <h1>Upload Schedule</h1>

                <p>{`We record every race day! We'll see you ${raceInfo.date ? dateFormat(raceInfo.date) : 'next time'} when they race in ${raceInfo.location ? raceInfo.location : 'unknown'}!`}</p>


                <p className="w3-text-grey">{raceInfo.name && `${raceInfo.name}`}</p>
                <p className="w3-text-grey">{raceInfo.distance && `Distance: ${raceInfo.distance}`}</p>
                {raceInfo.image && <img className="fa fa-diamond w3-margin-bottom" src={raceInfo.image} width="200" />}
                <Calendar onClickDay={calendarOnClick}/>


            </div>
            <div className="w3-third w3-center">
                <img className="fa fa-anchor w3-padding-16" src={require("../Assets/Calendar.jpg")} width="275"/>
            </div>
        </div>
    </div>

    )
}