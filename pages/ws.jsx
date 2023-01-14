import {useContext, useEffect, useState} from "react";
import socketContext from "../context/WSContext";

const ws = () => {
    const [data, setData] = useState(null);
    const socket = useContext(socketContext);

    useEffect(() => {
        socket.on("connect", () => setData({...data, isConnected: true}))
        socket.on("disconnect", () => setData({ ...data, isConnected: false }))
        socket.on("new_stake", (stake)=> setData({ ...data, stakesData: [...data?.stakesData, stake] }))
    }, []);


    return (
        <div style={{color: 'white'}}>
            <h1>Test Stake</h1>
            <h2>Is Connected: {data?.isConnected ? 'true' : 'false'}</h2>
            <h2>Stakes: {data?.stakesData?.length}</h2>
            <div>
                {
                    data?.stakesData?.map((stake, index) => (
                        <div key={index}>
                            <h3>Stake: {stake.teamName}</h3>
                            <h3>Stake: {stake.amount}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ws;