import React, {useContext, useEffect, useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";
import {Context} from "../../context/context.jsx";

const Filter = (props) => {
    const {dashboardData, handleNewDashboardData} = useContext(Context);
    const [filterData, setFilterData] = useState([...props.values])
    const [dashboardCalling, setDashboardCalling] = useState(false);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setFilterData(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    useEffect(() => {
        if (filterData.length > 0) {
            setDashboardCalling(true);
        }
    }, [filterData]);

    useEffect(() => {
        if (dashboardCalling) {
            handleNewDashboardData('searchFilter', dashboardData.searchFilter.map((item) => {
                if (item.title === props.title) {
                    return {...item, values: filterData}; // Create a new object with updated values
                }
                return item;
            }));
        }
    }, [filterData]);

    return (
        <>
            {props?.values && (
                <FormControl sx={{m: 1, width: 250}}>
                    <InputLabel id={`multi-select-label-${props.headers}`}>{props.title}</InputLabel>
                    <Select
                        labelId={`multi-select-label-${props.headers}`}
                        id={`multi-select-${props.headers}`}
                        multiple
                        label={props.title}
                        value={filterData}
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {props.values.map((value) => (
                            <MenuItem key={value} value={value}>
                                <Checkbox checked={filterData.indexOf(value) > -1}/>
                                <ListItemText primary={value}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        </>
    );
};

export default Filter;