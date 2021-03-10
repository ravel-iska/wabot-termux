#!/usr/bin/bash

clear
echo "[*] Updating & Upgrading Package"
echo ""
apt-get update && apt-get upgrade -y
echo "[*] Done!"
echo "[*] Installing NodeJS"
apt-get install nodejs -y
echo "[*] Done!"
echo "[*] Installing libwebp"
apt-get install libwebp -y
echo "[*] Done!"
echo "[*] Installing FFmpeg"
apt-get install ffmpeg -y
echo "[*] Done!"
echo "[*] Installing Wget"
apt-get install wget -y
echo "[*] Done!"
echo "[*] Installing Tesseract
apt-get install tesseract
echo "[*] Done
echo "[*] Cloning https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
echo "[*] Done!"
echo "[*] Installing Npm Package"
npm install
echo "[*] Done!"
clear
echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
