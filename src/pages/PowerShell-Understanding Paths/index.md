---
title: Understanding Paths in PowerShell
categories:
  - PowerShell

tags:
  - PowerShell
  - Dot-Sourcing
  
date: "2018-11-20"
featuredImage: './powershellLogosmaller.png'
cover : "/img/postImages/6.jpg"
author: "Scott Hurst"

---

# Understanding Paths in PowerShell

## Absolute and Relative Paths
By default, the “present working directory” is not on the PATH by default. This means that you must use relative or absolute paths when specifying a script to run, or when sourcing one script from within another.

### The all-important Paths
2 different types of Paths
Relative and Absolute

## Absolute Path:
Like having the “Country, State, City, Street address, floor, room, toolbox, bottom shelf, right side” for directions to where the hammer is located. Which is fine, unless we carry our tool box to into another room, and then try to retrieve the hammer.
Example
	C:\PowerShell\ActiveDirectory\Test-ADAuthentication.ps1


## Relative Path:
A relative path is… relative to the $PWD "present working directory" 
Like a tool box where as long as the whole tool box is moved, the hammer is always “bottom shelf, right side”, screw driver is “top shelf center”
### Example 1
Same directory 
```powershell
.\Get-FolderSize.ps1
```
### Example 2
Root directory
```powershell
.\Get-FolderSize.ps1
```
### Example 3
Different directory
```powershell
.\Functions\Get-RandomPassword.ps1
```
## Using Relative Paths
Using Relative Paths in dot-sourcing we have to consider how the script will be executed in relation to the $pwd. When we write it in the ISE and test by executing in the ISE with a $pwd like is currently set, with c:\PowerShell being the working directory, the ISE will help us complete the source path. 
What happens if we try to execute the script by changing directory to the source folder and (dot slash Execute) the script?
Or if we dot-source the execution from a completely different folder? 
```powershell
cd c:\temp
. ..\PowerShell\GenerateRandomPassword\PasstoFIle.ps1
```

To get around this, we could add this snippet to the script that sets the root directory to where the script is located regardless of the present working directory

```powershell
# Creates new Profile ps1 
if (!(Test-Path -Path $PROFILE ))
{ New-Item -Type File -Path $PROFILE -Force }
```
