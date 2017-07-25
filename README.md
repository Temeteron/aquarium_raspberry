# aquarium_raspberry (WIP)
A node server to control raspberry, gpio from a web page. With the help of [resin.io](http://resin.io)!

This tutorial demonstrates how to use a 'raspberry pi 3' with 'resinos' to feed your fish via a web page. Obviously, you can use this tutorial to create any kind of automation with you raspberry.
## Components
1) Aquarium (fish + fish feed)
2) Raspberry Pi 3 (SD with [resinos](https://docs.resin.io/raspberrypi3/nodejs/getting-started/))
3) (Optional) GPIO breadboard or extra cables for extender ([link](https://goo.gl/o2XYNV))
3) Servo motor ([link](https://goo.gl/ed7KXV))
4) 1 Drill Bit ([link](https://goo.gl/nkVvZy))
5) 4 buckles (you can find another way for base)
6) Cardboard pieces
7) Bottle cap

## Get started
After, the right installation of the components, you can create your own aquarium-raspberry-app by following the next steps:

1) Clone project
```bash
$ git clone https://github.com/Dimitriou/aquarium_raspberry.git
```

2) Test server, execute with:
```bash
$ node server.js
```

3) Deploy your server and test the raspberry

Deploy your nodejs-server-aquarium-rasberry-app to your raspberry using the resinos of Resin.io.

You can find a full tutorial about deploying a nodejs server to a raspberry with resinos [here](https://docs.resin.io/raspberrypi3/nodejs/getting-started/).
