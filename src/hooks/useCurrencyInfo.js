import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                // console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching currency information:", error);
            });
    }, [currency]);

    //   console.log(data); // This will log the initial state (empty object) synchronously
    return data;
}

export default useCurrencyInfo;

