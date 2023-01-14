import {useEffect, useState} from "react";
import {io} from "socket.io-client";

const ws = () => {
    const [stakes, setStakes] = useState([]);
    const [status, setStatus] = useState('connecting');
    const [team, setTeam] = useState('empty');

    const socket = io("https://stake.teamdao.app/api", {
        transports: ["websocket"],
        withCredentials: true,
        extraHeaders: {
            "api-key": "hjXz4mj9Tlkk5Qm6ifuA"
        }
    })

    useEffect(() => {
        socket.on('connect', () => {
            console.log('connected to the server');
            setStatus('connected');
        });
        socket.on('disconnect', () => {
            console.log('disconnected from the server');
            setStatus('disconnected');
        });

        socket.on('status', (data) => {
            console.log('get status from server:', data.status);
        })

        socket.on('new_stake', (data) => {
            console.log('new bet:', data);
            setStakes((prevStakes) => [...prevStakes, data]);
            setTeam(data.teamName);
        });
        socket.on('error', (error) => {
            console.log('error:', error);
            setStatus('error');
        });
        return () => socket.disconnect();
    }, []);




    return (
        <div style={{color: 'white'}}>
            <h1>Test Stake</h1>
            <div>
                Status: {status} | {team}
            </div>
            <div>
                <p>New Data will be here:</p>
                {stakes.map((stake) => (
                    <div key={stake.betID}>
                        {stake.name} bet {stake.amount} on {stake.teamName}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ws;