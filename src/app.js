const express = require('express');
const app = express();
const cors = require('cors');

const routerLogin = require('./routers/routerLogin');

app.use(express.json());
app.use(cors());

app.use(routerLogin);

module.exports = app;



var mqtt = require('mqtt');

// Configurações do broker MQTT
const MQTT_BROKER = 'mqtt.eclipseprojects.io';
const MQTT_PORT = 1883;
const MQTT_MILLIS_TOPIC = 'daniel_first';
const MQTT_ID = "danielteste"

// Criar cliente MQTT
var client = mqtt.connect({
    host: MQTT_BROKER,
    port: MQTT_PORT,
    clientId: MQTT_ID // Defina MQTT_ID de acordo com suas configurações no ESP32
});

// Conectar-se ao broker MQTT
client.on('connect', function () {
    console.log('Conectado ao broker MQTT');
    // Assinar o tópico desejado após a conexão
    client.subscribe(MQTT_MILLIS_TOPIC, function (err) {
        if (err) {
            console.error('Erro ao assinar o tópico:', err);
        }
    });
});

// Callback para quando uma mensagem é recebida do broker
client.on('message', function (topic, message) {
    console.log('Mensagem recebida do tópico:', topic, message.toString());
    // Adicione sua lógica de processamento aqui
    // Por exemplo, você pode converter o tempo millis recebido em uma string e armazená-lo
    var millis_str = message.toString();
    console.log('Millis recebido:', millis_str);
});

// Tratamento de erros
client.on('error', function (error) {
    console.error('Erro:', error);
});
