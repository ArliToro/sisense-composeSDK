import {useEffect, useState, useContext} from "react";
import axiosInstance from "../../axios/axiosInstance.jsx";
import { Context } from "../../context/context.jsx";
import * as React from "react";
import Filter from "../../components/filter/filter.jsx";
const Filters = () => {
    const { dashboardData, handleNewDashboardData} = useContext(Context);
    const [dataFilter, setDataFilter] = useState([])

    useEffect(() => {

        const fetchFiltersData = (source, dim, title) => {
            const payload = {
                datasource: source,
                metadata: [
                    {
                        dim: dim,
                    },
                ],
            };

            return axiosInstance
                .post(`/api/datasources/cxp_analytics_cube/jaql?trc=sdk-ui-0.13.0`, payload)
                .then((response) => {
                    const fixedFilters = {
                        ...response.data,
                        values: response.data.values.flatMap((subArray) => subArray),
                        title: title,
                    };
                    setDataFilter((prevData) => [...prevData, fixedFilters]);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        dashboardData.filters?.forEach((item) =>
            fetchFiltersData(item.jaql.datasource, item.jaql.dim, item.jaql.title)
        );

    }, [dashboardData.dashboardId]);

    useEffect(() => {
        handleNewDashboardData('searchFilter',dataFilter);
    }, [dataFilter]);

    return (
        <>
            {dataFilter.length > 0 && (
                <>
                    {dataFilter.map((item, index) => (
                        <Filter key={index} headers={item.headers[0]} title={item.title} values={item.values} />
                    ))}
                </>
            )}
        </>
    );
};

export default Filters;
