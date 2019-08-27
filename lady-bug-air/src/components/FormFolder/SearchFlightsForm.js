import React from 'react'


const SearchFlightsForm = (props) => {
    return(
        <div>
            <form>
                <input list="airports" autoFocus="true"></input>
                <datalist id="airports">
                    <option value="London Airports">All London Airports</option>
                </datalist>
                <input ></input>
                <br></br>
                <input type="date" autoFocus="true"></input>
            </form>
        </div>
    )
}

export default SearchFlightsForm