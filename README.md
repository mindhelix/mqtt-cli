# mqtt-cli

[![Join the chat at https://gitter.im/mindhelix/mqtt-cli](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/mindhelix/mqtt-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A node command line app to send mqtt messages through a mqtt broker. Can also be used to subscribe and listen to incoming messages on a topic.


## Installation

    $ [sudo] npm install mqtt-cli -g


## Usage:

    $ mqtt-cli --help

    Usage: mqtt-cli hostname topic payload
	     e.g. mqtt-cli test.mosquitto.org Hello "Test hello message"

    Options:
	   -h : this help option
	   -w : pass at the end to watch incoming message on the published topic. Usage: mqtt-cli hostname topic payload -w



**License: MIT**
**Author: [jinmatt](https://github.com/jinmatt)**
