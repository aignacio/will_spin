#!/bin/bash
echo "Digite a senha de root:"
sudo su
cd /home/$USER/
git clone https://github.com/aignacio/will_spin
cd will_spin
apt-get install -y nodejs-legacy nodejs build-essential
npm install johnny-five
npm install keypress
