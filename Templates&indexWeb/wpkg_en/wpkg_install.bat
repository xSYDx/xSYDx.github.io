@echo off

rem Initiate script

setlocal ENABLEEXTENSIONS
set KEY_NAME="HKEY_CLASSES_ROOT\.deb"

rem Extract the value of the .deb key from the registry which is different dependng on which programs were installed being able to open it

for /F "usebackq tokens=3 skip=1" %%A IN (`reg query "%KEY_NAME%" /ve 2^>nul `) do (
  set KEY_VALUE=%%A
)

rem Create a registry file to add the important keys

@echo Windows Registry Editor Version 5.00 > wpkg_install.reg
@echo( >> wpkg_install.reg
@echo [HKEY_CLASSES_ROOT\%KEY_VALUE%\shell\wpkgInstall] >> wpkg_install.reg
@echo @="Install" >> wpkg_install.reg
@echo( >> wpkg_install.reg
@echo [HKEY_CLASSES_ROOT\%KEY_VALUE%\shell\wpkgInstall\Command] >> wpkg_install.reg
@echo @="\"C:\\Program Files\\wpkg\\wpkg.exe\" -i %%1" >> wpkg_install.reg
@echo( >> wpkg_install.reg

rem Create a registry file for being able to remove the important keys later

@echo Windows Registry Editor Version 5.00 > wpkg_install_remove.reg
@echo( >> wpkg_install_remove.reg
@echo [-HKEY_CLASSES_ROOT\%KEY_VALUE%\shell\wpkgInstall] >> wpkg_install_remove.reg
@echo( >> wpkg_install_remove.reg
@echo [-HKEY_CLASSES_ROOT\%KEY_VALUE%\shell\wpkgInstall\Command] >> wpkg_install_remove.reg
@echo( >> wpkg_install_remove.reg

rem Add the important keys through executing the reg file

wpkg_install.reg

rem And remove the file the files afterwards

rm wpkg_install.reg