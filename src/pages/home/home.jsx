import {useEffect, useState, useRef} from "react";
import axiosInstance from "../../axios/axiosInstance.jsx";
import {SisenseContextProvider} from "@sisense/sdk-ui";
import DashboardList from "../../containers/dashboardList/dashboardList.jsx";
import DashboardWidget from "../dashboard/dashboard-widget.jsx";
import Navbar from "../../containers/navbar/navbar.jsx";


const Home = () => {
    const tokenData = useRef(localStorage.getItem("token") || undefined);
    const [data, setData] = useState([]);
    const [filterDashboard, setFilterDashboard] = useState("");

    useEffect(() => {
        const fetchDashboards = async () => {
            try {
                const response = await axiosInstance.get("/api/v1/dashboards");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (tokenData.current) {
            fetchDashboards();
        }
    }, []);

    const handleFilterDashboard = (value) => {
        setFilterDashboard(value);
    };

    return (
        <>
                <SisenseContextProvider url="https://analytics.cxp-integration.trustyou.com" token={tokenData.current}>
                    <div className={"dashboard-container"}>
                        <Navbar/>
                        <DashboardList data={data} inputValue={filterDashboard}/>
                        <DashboardWidget/>
                    </div>
                </SisenseContextProvider>
        </>
    );
};

export default Home;
