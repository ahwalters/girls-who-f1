import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'

//need to verify driver input before passing back data !

// const dotenv = require('dotenv');
// dotenv.config()

// let api_football_key = 
// let api_football_key = process.env.REACT_APP_API_FOOTBALL_KEY
let url = 'https://v1.formula-1.api-sports.io/drivers'

export default function Pick() {

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChanges = updatedValue => {
            setValue(updatedValue);
        };
        return [value, setValue, handleChanges];
    };

    const initialDriverInfo = {
        abbr: '',
        country: '',
        grands_prix_entered: '',
        name: '',
        nationality: '',
        number: '',
        world_championships: '',
        image: ''
    }

    const initialPicks = [
        {
            user: 'Kenny',
            valid: false,
            // pick: { ...initialDriverInfo }
            pick: Object.assign({}, initialDriverInfo)
        },
        {
            user: 'Hunter',
            valid: false,
            pick: Object.assign({}, initialDriverInfo)
        },
        {
            user: 'Raevin',
            valid: false,
            pick: Object.assign({}, initialDriverInfo)
        }
    ]

    const [userInput, setUserInput, handleUserInput] = useInput('')
    const [driverInput, setDriverInput, handleDriverInput] = useInput('')
    const [driverPicks, setDriverPicks] = useState(initialPicks);
    const [apiLimit, setApiLimit] = useState('')

    const resetValues = () => {
        setDriverInput('')
    };

    const resetPick = (value) => {
        // e.preventDefault()
        setDriverPicks((driverPicks.map(el => {
            if (el.user === value) {
                return (
                    {...el, valid : false, pick : Object.assign({}, initialDriverInfo)}
                )
            } else {return el}
        })))
        console.log(value)
        console.log(driverPicks)
    }

    useEffect(() => {
        
    }, []);

    const getDriverInfo = (e) => {
        e.preventDefault()
        axios.get(`${url}?search=${driverInput}`,
            {
                headers: {
                    "x-rapidapi-key": api_football_key,
                    "x-rapidapi-host": "api-formula-1.p.rapidapi.com/"
                }
            })
            .then(res => {
                let data = res.data.response[0]
                let { name, grands_prix_entered, abbr, world_championships, image, number } = data
                let dataFinal  = {name, grands_prix_entered, abbr, world_championships, image, number,
                    country: data.country.name}
                setDriverPicks((driverPicks.map(el => {
                    if (el.user === userInput) {
                        return (
                            {...el, valid : true, pick : Object.assign({}, dataFinal)}
                        )
                    } else {return el}
                })))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const checkApiStatus = () => {
        axios.get("https://v1.formula-1.api-sports.io/status",
            {
                headers: {
                    "x-rapidapi-key": api_football_key,
                }
            })
            .then(res => {
                setApiLimit(`You've used ${res.data.response.requests.current} out of ${res.data.response.requests.limit_day} requests today.`)
            })
    }

    return (
        <div className="w3-row-padding w3-padding-16 w3-container w3-white w3-hover-white">
            <div className="w3-content">
                <h1 className="inline">
                    <img width="60" height="60" src="https://img.icons8.com/ios/60/f1-race-car-top-veiw.png" alt="f1-race-car-top-veiw" />
                    Picks of the week:</h1>

                <form onSubmit={getDriverInfo}>
                    <label>Search for Driver
                        <input
                            className="w3-input w3-border"
                            name="driverInput"
                            onChange={e => handleDriverInput(e.target.value)}
                            placeholder="Driver Name"
                            type="text"
                            value={driverInput}
                        />
                    </label>
                    <label>User
                        <select
                            className="w3-input w3-border"
                            name="userInput"
                            onChange={e => handleUserInput(e.target.value)}
                            type=""
                            value={userInput}
                        >
                            <option value='choose'>Choose User</option>
                            <option value='Kenny'>Kenny</option>
                            <option value='Hunter'>Hunter</option>
                            <option value='Raevin'>Raevin</option>
                        </select>
                    </label>
                    <button className="w3-button w3-black">
                        <i className="fa fa-paper-plane"></i> LOOKUP
                    </button>
                </form>
                <br></br>
                <button className="w3-button w3-black" onClick={checkApiStatus}>Get Api Status</button>

                {apiLimit && <p>{apiLimit}</p>}

                <p className="w3-text-grey">Notes to dev:</p>
                <p className="w3-text-grey">Is pick based on race?</p>
            </div>
            <div className="w3-row-padding w3-center w3-margin-top">
                {
                    driverPicks.map((el, index) => {
                        if (el.valid) {
                            return (
                                <div className="w3-third" key={index}>
                                    <div className="w3-card w3-container w3-white w3-hover-white">
                                    <CloseButton size='md' onClick={()=>resetPick(el.user)}/>
                                        <h3>{`${el.user}'s Pick:`}</h3><br></br>
                                        <img className="fa fa-diamond w3-margin-bottom" src={el.pick.image} width="200" />
                                        <p style={{ fontWeight : 'bold'}}>{`${el.pick.name}`}</p>
                                        <p>{el.pick.abbr && `Abbreviation: ${el.pick.abbr}`}</p>
                                        <p>{el.pick.country && `Country: ${el.pick.country}`}</p>
                                        <p>{`Grand Prix Entered: ${el.pick.grands_prix_entered}`}</p>
                                        <p>{`World Championships: ${el.pick.world_championships}`}</p>
                                        <p>{`Number: ${el.pick.number}`}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="w3-third" key={index}>
                                    <div className="w3-card w3-container w3-white w3-hover-white">
                                        <h3>{`${el.user}'s Pick:`}</h3><br></br>
                                        <p>{`${el.user} hasn't uploaded their pick yet`}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>

    )
}