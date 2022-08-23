import { isAuthenticated } from "../pages/shared/routes/permissionCusChecker";
import io from 'socket.io-client';
import getStore from '../pages/configureStore';

let socket = null;
const onConnected = () => {
  console.log("socket: connected");
};


const onDisconnect = () => {
  console.log(`socket: disconent`);
};

let data = window.localStorage.getItem("authcus");
let user = data ? JSON.parse(data).user : {};


export const configSocket = (user) => {
  if (socket && socket.disconnected) {
    socket.connect();
  }
  if (socket) return;


  socket = io.connect(`https://vietdang.xyz/store`, {
    query: `id=${user.id_customer_oa}&full_name=${user.customer_name}&token=${isAuthenticated()}`,
    multiplex: false
  });


  socket.on("connect", onConnected);
  socket.on("disconnect", onDisconnect);




  return socket;
}


export const socketDisconnect = () => {
  socket.disconnect();
  socket = null;
};

export default function getSocket() {
  return socket;
}


export const userId = () => {
  return user.id_user;
};