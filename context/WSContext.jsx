import { createContext } from 'react'
import {io} from "socket.io-client";


// with header
const socket = io("https://stake.teamdao.app/api", {
    extraHeaders: {
        "api-key": "hjXz4mj9Tlkk5Qm6ifuAs"
    }
})
const WSContext = createContext(socket)
export default WSContext;