@echo off
set /p package= "Welches Paket?"
cd ..
npm install --save %package%
