@echo off
echo Arret du serveur Talacorp sur le port 3001...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
echo Demarrage en mode production (stable)...
cd /d "%~dp0"
call npm run start -- -p 3001
pause
