---
Title: Present Working Directory
Date: "2018-11-20T14:53:23-05:00"
Author: "Scott Hurst"
cover: "/img/postImages/pwsh.jpeg"
categories:
  - PowerShell

tags:
  - PowerShell
  - $pwd
  
---

# Understanding Present Working Directory $PWD

## VSCode
VSCode sets the $PWD ("present working directory”) to the Workspace location

## PowerShell ISE / CLI
For the PowerShell ISE or PowerShell CLI you can set the $PWD in multiple ways
Edit the Shortcut “**Start in:**” location variable to your desired path


## Working with the $PWD within the Script
Explain why you need this and what this is doing
```powershell
# Creates new Profile ps1 
if (!(Test-Path -Path $PROFILE ))
{ New-Item -Type File -Path $PROFILE -Force }
```
Then explain how to use it using additional code
```powershell
COde that calls the other paths or somethign
```

## Setting $PWD in the $Profile
Or you can edit your profile to include a “*Set-Location*” command
put in a side note here about the different profiles, and what they do
```powershell
# Uses PowerShell ISE to edit the profile
psedit $profile.CurrentUserCurrentHost
```


### Additional Reading
[Using Profiles in the PowerShell_ISE](https://docs.microsoft.com/en-us/powershell/scripting/core-powershell/ise/how-to-use-profiles-in-windows-powershell-ise?view=powershell-6)

[About_Profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-6)