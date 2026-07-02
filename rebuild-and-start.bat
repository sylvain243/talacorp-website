@echo off
echo Build + demarrage Talacorp...
cd /d "%~dp0"
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3001 ^| findstr LISTENING') do taskkill /F /PID %%a 2>nul
call npm run build
if errorlevel 1 exit /b 1
call npm run start -- -p 3001
pause
