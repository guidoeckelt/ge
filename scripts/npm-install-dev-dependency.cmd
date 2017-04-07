@echo off
set /p package= "Welches Dev-Paket?"
cd ..
npm install --save-dev %package%
