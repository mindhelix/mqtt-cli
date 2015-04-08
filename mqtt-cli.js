#!/usr/bin/env node

/**
* MQTT client implementation
*
* @author: Jinsu Mathew <jinsu@mindhelix.com>
* @date: 22/01/2015
*/

var mqtt    = require('mqtt');

if (process.argv[2] == '--help' || process.argv[2] == '-h') {
  console.log('Usage: node mqtt-cli hostname topic payload \n\te.g. node mqtt-cli test.mosquitto.org Hello "Test hello message"');
  console.log('Options: \n\t-h : this help option\n\t-w : pass at the end to watch incoming message on the published topic. Usage: node mqtt-cli hostname topic payload -w');
  process.exit(0);
}

if (process.argv[2] == '--version' || process.argv[2] == '-v') {
  console.log('v1.0.0');
  process.exit(0);
}

var client  = mqtt.connect('mqtt://' + process.argv[2]);
var topic = process.argv[3];
var payload = process.argv[4];
var deamonOption = process.argv[5];

client.subscribe(topic);
client.publish(topic, payload);

client.on('message', function (topic, message) {
  console.log('Topic: ' + topic + ' Message: ' + message.toString());
});


if ( ! deamonOption || deamonOption !== '-w') {
  client.end();
}
