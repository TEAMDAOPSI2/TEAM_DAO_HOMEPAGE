import {createContext} from 'react';
import {io} from "socket.io-client";

const socket = io("https://stake.teamdao.app/api", {
    extraHeaders: {
        "api-key": "hjXz4mj9Tlkk5Qm6ifuA"
    }
})
const socketContext = createContext(socket)

export default socketContext;