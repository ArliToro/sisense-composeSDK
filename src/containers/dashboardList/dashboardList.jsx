import {Context} from "../../context/context.jsx";
import {useContext} from "react";
import "./dashboardList.css";
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const DashboardList = (props) => {
    const {handleNewDashboardData} = useContext(Context);

    const createGlobal = (values) => {
        handleNewDashboardData('dashboardId',values.oid);
        handleNewDashboardData('filters',values.filters);
    }

    return (
        <div className={"dashboard-list-container flex"}>
            {props.data ? (
                props.data.map((item, index) => (
                    item.title.toLowerCase().includes(props.inputValue) && (
                        <div onClick={() => createGlobal(item)} key={index} className={"dashboard-list flex center"}>
                            <QueryStatsIcon style={{ width: "50px", height: "50px" }} />
                            <h3>{item.title}</h3>
                        </div>
                    )
                ))
            ) : (
                <p>No dashboards found</p>
            )}
        </div>
    );
};

export default DashboardList;