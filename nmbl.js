/**
* MQTT client implementation
*
* @author: Jinsu Mathew <jinsu@mindhelix.com>
* @date: 22/01/2015
*/

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://smartsocket.getmyrico.com');

var client_id = process.argv[2];
var event_string = process.argv[3];

if (process.argv[2] == '--help' || process.argv[2] == '-h') {
  console.log('Usage: nmbl topic message(in event formats) \ne.g. nmbl SOC101 toggle:SOC110:0:on');
  process.exit(0);
}

if (process.argv[2] == '--version' || process.argv[2] == '-v') {
  console.log('v1.0.0');
  process.exit(0);
}

client.subscribe(client_id);
client.publish(client_id, event_string);

client.on('message', function (topic, message) {
  // message is Buffer
  console.log('Topic: ' + topic + ' Message: ' + message.toString());
});

client.end();
