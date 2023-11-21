import {DashboardWidget} from '@sisense/sdk-ui';
import React, {useContext, useEffect, useState} from "react";
import axiosInstance from "../../axios/axiosInstance.jsx";
import * as DM from '../../generated/sample-ecommerce.ts';
import {filters} from '@sisense/sdk-data';
import {Context} from "../../context/context.jsx";
import Filters from "../../containers/filters/filters.jsx";
import "./dashboard-widget.css"

const DashboardWidgetContainer = () => {
    const {dashboardData} = useContext(Context);
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
        if (dashboardData.dashboardId) {
            const fetchDataWidgets = () => {
                axiosInstance
                    .get(`/api/v1/dashboards/${dashboardData.dashboardId}/widgets`)
                    .then((response) => {
                        const filteredWidgets = response.data.filter(
                            (item) => item.type !== "DimensionChanger"
                        );
                        setWidgets(filteredWidgets);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            };

            fetchDataWidgets();
        }

    }, [dashboardData.dashboardId]);
    const getDashboardFilters = (values) => {
        return values.map(item => {
            const header = item.headers[0].replace(/[[\]]/g, '');
            const headerArray = header.split('.');
            let currentObj = DM;
            headerArray.forEach(key => {
                currentObj = currentObj[key]; // Accessing nested keys one by one
            });

            const finalObj = currentObj;
            let values = [];
            if (item.values.length === 0) {
                values = [""];
            } else {
                values = [...item.values]
            }
            return filters.members(finalObj, values);
        });
    };

    return (
        <div className={"widget-container flex center"}>
            <div className={"filters-container"}>
                <Filters/>
            </div>
            {widgets?.map(item => (
                <DashboardWidget
                    key={item.oid}
                    widgetOid={item.oid}
                    dashboardOid={dashboardData.dashboardId}
                    styleOptions={{
                        width: 800,
                    }}
                    filters={getDashboardFilters(dashboardData.searchFilter)}
                />
            ))}
        </div>
    );

};

export default DashboardWidgetContainer;