---
title: PowerShell - Advanced Functions
categories:
  - PowerShell
  - Advanced_Functions  
  - Programming
  - Education
tags:
  - PowerShell
  - Advanced_Functions  
  - Programming
  - Education
date: 2018-10-23T18:15:01-05:00
---

# Advanced Functions

when giving a default parameter use
```powershell
[ValidateNotNullOrEmpty()]

[CmdletBinding()]
param (
      [ValidateNotNullOrEmpty()]
      [string[] ] $Computername = $env:COMPUTERNAME
)
```

[Standard and Advanced Functions](https://lazywinadmin.com/2015/03/standard-and-advanced-powershell.html){:target="_blank"}

[PowerShell Advanced Functions: Can we build them better? With parameter validation, yes we can!](https://mikefrobbins.com/2015/03/31/powershell-advanced-functions-can-we-build-them-better-with-parameter-validation-yes-we-can/){:target="_blank"}

[About Functions Advanced on PSCore](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced?view=powershell-6&viewFallbackFrom=powershell-Microsoft.PowerShell.Core){:target="_blank"}

[About Functions Advanced Methods](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_methods?view=powershell-6&viewFallbackFrom=powershell-Microsoft.PowerShell.Core){:target="_blank"}

[About Functions Advanced Parameters](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-6&viewFallbackFrom=powershell-Microsoft.PowerShell.Core){:target="_blank"}

Which leads to learning how to use Plaster
[What is Plaster](https://hurst.systems/blog/What-is-Plaster/)
