import React, { createContext, useState } from "react";

export const Context = createContext({});

const DashboardContext = ({ children }) => {
    const [dashboardData, setDashboardData] = useState({
        filters:[],
        dashboardId:"",
        searchFilter:[],
    });

    const handleNewDashboardData = (key, value) => {
        setDashboardData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <Context.Provider value={{ dashboardData, handleNewDashboardData }}>
            {children}
        </Context.Provider>
    );
};

export default DashboardContext;
