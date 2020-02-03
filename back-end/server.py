#client side

import asyncio
import websockets
import time

async def timer_send(websocket, port):
    try:
        while True:
            time_send = time.strftime('%X')
            time_send = str(time_send) #cast in str. Else React can't print.
            await websocket.send(time_send)
            await asyncio.sleep(1)
    except Exception:
        print("Code 1001, hard disconnect when refresh React") #When refresh react page, error 1001 arrive

start_server = websockets.serve(timer_send, 'localhost', 1234)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

