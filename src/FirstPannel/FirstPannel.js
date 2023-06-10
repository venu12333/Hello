import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BasicSelect() {

    const [showMore, SetShowMore] = React.useState(false)
    const [view, setView] = React.useState(false)



    let arr = [
        { label: "MV1" },
        { label: "Top Copy" },
        { label: "Transaction Summary Report" },
        { label: "MV-7D" },
        { label: "MV-7D-2022" },
        { label: "MV-7L" },
        { label: "Accident life and Health Waiver" },
        { label: "Authorization of Payoff" },
        { label: "Hello I m One" },
        { label: "Hello I m TWO" },
    ]

    return (
        <div>
            <div className='allCheckbox'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                </FormGroup>
                <div className='box_container'>
                    {arr?.slice(showMore, 6)?.map((item) => {
                        return (
                            <ListElements label={item?.label} />
                        )
                    })}


                </div>
            </div>

            <div className="showmore_text">
                <p onClick={() => SetShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</p>
            </div>


            <div className="bottomSection">
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-eye" />
                    <p onClick={() => setView(true)}>View</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-print" />
                    <p>Print</p>
                </div>

            </div>
            {view &&
                <Popup setView={setView} />}
        </div>

    );
}


export const ListElements = ({ label }) => {
    const [age, setAge] = React.useState(20);
    const [isChecked, setIsChecked] = React.useState(false)
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='list_container'>
            <div className='list_items'>
                <FormControlLabel control={<Checkbox checked={(e) => { setIsChecked(e.target.checked) }} />} label={label} />
            </div>
            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            // label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}


export const Popup = ({ setView }) => {
    return (
        <div onClick={() => setView(false)}>
            <h1>Hello</h1>
        </div>
    )
}
