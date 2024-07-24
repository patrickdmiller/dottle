import Websocket from 'ws';

class Server{
  wss : Websocket.Server
  constructor() {
    this.wss = new Websocket.Server({
      port: 8080
      
    })
    this.wss.
  }

  initHandlers(){
    this.wss.on('connection', (ws: Websocket) => {
      ws.binaryType = "arraybuffer";
      ws.on('message', (message : Websocket.RawData, isBinary: boolean ))
    })
  }
}