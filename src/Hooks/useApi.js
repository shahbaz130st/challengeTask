import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

export const useApi = url => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiCall()
    }, []);
    const apiCall = async () => {
        axios
            .get(url)
            .then(({ data }) => {
                var newObject = _.cloneDeep(data);
                console.log(newObject)
                setData(data);
                setIsLoading(false);
            })
            .catch(() => {
                setError("Something went wrong");
            });
    }

    return [isLoading, data, error];
};