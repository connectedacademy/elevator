let isLocal = false
isLocal = true
let localIP = 'localhost'
// localIP = '10.70.15.124'
// localIP = '10.70.15.170'

export const SOUNCLOUD_CLIENT_ID = '3b3b0aa8045ca036d24515344ae0d60b'
export const LOCALHOST = 'http://localhost:8080'
export const WATERCOOLER_API = isLocal ? `http://${localIP}:4000/v1` : 'https://api.connectedacademy.io/v1'
export const AUTH_URL = isLocal ? `http://${localIP}:4000/v1/auth/login` : 'https://api.connectedacademy.io/v1/auth/login'
export const SOCKET_API = isLocal ? `http://${localIP}:4000` : 'https://api.connectedacademy.io'