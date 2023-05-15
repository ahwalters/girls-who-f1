import React, {useEffect, useState} from "react";
import axios from "axios";
//class="w3-container w3-black w3-center w3-opacity w3-padding-64"

//need to verify driver input before passing back data !
// dotenv.config()
// var sports_monk_key = process.env.SPORTS_MONK_TOKEN

export default function Pick() {

    const driver = '' //will get this data from elsewhere later on
    const url='http://ergast.com/api/f1/drivers'

    const initialDriver = {
        name: '',
        code: '',
        nationality: '',
        birthday: ''
    }

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        const handleChanges = updatedValue => {
          setValue(updatedValue);
        };
        return [value, setValue, handleChanges];
      };

      const [driverInput, setDriverInput, handleDriverInput] = useInput("");
      const [searchedDriver, setSearchedDriver] = useState(initialDriver)
      
        const resetValues = e => {
          e.preventDefault();
          setDriverInput('')
        };

    useEffect(()=>{
        //https://api.sportradar.com/formula1/{access_level}/{version}/{language_code}/competitors/merge_mappings.{format}?api_key={your_api_key}
        const access_level = 'trial'
        const version = 'v2'
        //
        const format='json'
        console.log(searchedDriver)

        /*
        Driver lists can be refined by adding one or more of the following criteria:

/circuits/<circuitId>
/constructors/<constructorId>
/drivers/<driverId>
/grid/<position>
/results/<position>
/fastest/<rank>
/status/<statusId>
*/
        

    }, []);

    const findDriver = (e) => {
        e.preventDefault();
        console.log(driverInput)
        axios.get(`${url}/${driverInput}.json`)
        .then(res=> {
            console.log(res);
            console.log(sports_monk_key)
            setSearchedDriver({
                name: `${res.data.MRData.DriverTable.Drivers[0].givenName} ${res.data.MRData.DriverTable.Drivers[0].familyName}`,
                code : res.data.MRData.DriverTable.Drivers[0].code,
                nationality : res.data.MRData.DriverTable.Drivers[0].nationality,
                birthday : res.data.MRData.DriverTable.Drivers[0].dateOfBirth

            })
            console.log(searchedDriver)
        })
        .catch(err => {
            console.log(err)
        })
       }

       const getDriverInfo = (e) => {
        //axios.get(`https://f1.sportmonks.com/api/v1.0/drivers/${driverInput}?api_token=${sports_monk_key2}`
        // axios.get(`https://f1.sportmonks.com/api/v1.0/tracks/?api_token=${sports_monk_key2}`)
        let myHeaders = ("x-rapidapi-key", `${api_football_key}`);
        axios.get(`https://v2.nba.api-sports.io/players?id=${265}`,
            {headers: {
                "x-rapidapi-key": api_football_key,
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
              }
            })
        .then(res => {
            console.log(res.data.response[0])
        })
        .catch(err => {
            console.log(err)
        })
       }

       const checkApiStatus = () => {
        axios.get("https://v1.formula-1.api-sports.io/status",
        {headers: {
            "x-rapidapi-key": api_football_key,
            //"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
          }})
        .then(res=> console.log(res))
       }

    return (
        <div class="w3-row-padding w3-padding-16 w3-container w3-white w3-hover-white">
        <div class="w3-content">
            <div class="w3-twothird">
                <h1 class="inline">
                <img width="60" height="60" src="https://img.icons8.com/ios/60/f1-race-car-top-veiw.png" alt="f1-race-car-top-veiw"/>
                    Pick of the week:</h1>
                
                <form onSubmit={findDriver}>
                    <label>Driver Id
                    <input
                        class="w3-input w3-border"
                        name="driverInput"
                        onChange={e => handleDriverInput(e.target.value)}
                        placeholder="Driver Name"
                        type="text"
                        value={driverInput}
                    />
                    </label>
                    <button class="w3-button w3-black">
              <i class="fa fa-paper-plane"></i> LOOKUP
              </button>
                </form>
            <p>{searchedDriver.name && `Driver Name: ${searchedDriver.name}`}</p>
            <p>{searchedDriver.code && `Driver Code: ${searchedDriver.code}`}</p>
            <p>{searchedDriver.nationality && `Driver Nationality: ${searchedDriver.nationality}`}</p>
            <p>{searchedDriver.birthday && `Driver Birthday: ${searchedDriver.birthday}`}</p>
            <br></br>

            <p>SPORTSMONK API</p>
            <button onClick={getDriverInfo}>Get Driver Info</button>
            <button onClick={checkApiStatus}>api status</button>
            <p></p>




                <p class="w3-text-grey">For race ____ pick is _____</p>
                <p class="w3-text-grey">render an image based on name  ^^^^^</p>
                <p class="w3-text-grey">render info from f1 history api to give stats</p>
            </div>
            <div class="w3-third w3-center">
                <img class="fa fa-anchor w3-padding-16" src={require("../Assets/Calendar.jpg")} width="275"/>
            </div>
        </div>
    </div>

    )
}