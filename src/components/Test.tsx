import {useEffect, useState} from "react";
import {BASE_URL} from "../utils/Constants.ts";


function Test() {

    const [pong, setPong] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/ping`)
            .then((res) => {
                return res.text();
            })
            .then((data) => {
                setPong(data);
            });
    }, []);

    return (
        <div>Ping: {pong}</div>
    );
}

export default Test;