## dev environment
- run mosquitto on mac OS
install mosquitto
```bash
brew install mosquitto
```

add these lines at the end of /usr/local/etc/mosquitto/mosquitto.conf
```
listener 1883 127.0.0.1
protocol mqtt
listener 11883 127.0.0.1
protocol websockets
```

then run the mosquitto server
```bash
brew services start mosquitto
```

test if the server is running
```bash
mosquitto_sub -t moey -h localhost -p 1883
```
in another terminal
```bash
mosquitto_pub -t moey -h localhost -p 1883 -m "hey"
```

add .env file for dev
```
MQTT_HOST="localhost"
MQTT_PORT="11883"
```
