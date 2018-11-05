---
title: PowerShell Notes
categories:
  - PowerShell
  - Free_eBooks
tags:
  - PowerShell
  - Links
  - Notes
  - Free_eBooks 
date: "2018-10-24"
---

# Free eBooks:

[Historical Trend Reports in Powershell](https://legacy.gitbook.com/book/devops-collective-inc/ditch-excel-making-historical-trend-reports-in-po/details){:target="_blank"}

[Where and Foreach Methods](https://freecontent.manning.com/powershell-v4-where-and-foreach-methods/?utm_content=article_powershellv4whereandforeachmethods_oct2115){:target="_blank"}

[PowerShell Advanced Functions](http://mikefrobbins.com/2015/04/17/free-ebook-on-powershell-advanced-functions/){:target="_blank"}

[Kevin Marquette on PowerShell Theory](https://kevinmarquette.github.io/){:target="_blank"}

================

[Automatically Store Last Output](https://vexx32.github.io/Store-Last-Output/){:target="_blank"}

================

# Hashtables

[Everything you wanted to know about HashTables](https://kevinmarquette.github.io/2016-11-06-powershell-hashtable-everything-you-wanted-to-know-about/?utm_source=blog&utm_medium=blog&utm_content=popref){:target="_blank"}

================

# Arrays

[Everything you wanted to know about arrays](https://kevinmarquette.github.io/2018-10-15-Powershell-arrays-Everything-you-wanted-to-know/?utm_source=blog&utm_medium=blog&utm_content=titlelink){:target="_blank"}

```powershell
##############################################################
    # Method 1
    # Create empty array then use the $variable.add("value") later

$Report = [System.Collections.ArrayList]@()
##############################################################
    # Method 2
    # Create and populate an array then use the $variable.add("value") later

$Report = [System.Collections.ArrayList]("A", "B", "C", "D")
##############################################################
    # Method 3
    # Create and populate an array then use the $variable.add("value") later

[System.Collections.ArrayList]$Report = "I", "J", "K", "L"
##############################################################

    # Methods 2 and 3 are the same just depending on how you want to initate it
    # All 3 methods use the following to add/remove values. 

$Collection = New-Object -TypeName System.Collections.ArrayList
$Random = New-Object -TypeName System.Random

$Collection.Add($Random.Next(0,1000)) | Out-Null 

```

More examples of System.Collections.ArrayList : 

[Write PowerShell for Speed](https://4sysops.com/archives/how-to-write-powershell-for-speed/){:target="_blank"}

[Userful .NET Classes for Powershell](https://4sysops.com/wiki/useful-net-classes-for-powershell/){:target="_blank"}

================

[Everything you ever wanted to know about the Switch statement](https://kevinmarquette.github.io/2018-01-12-Powershell-switch-statement/?utm_source=blog&utm_medium=blog&utm_content=titlelink){:target="_blank"}

# RegEx a Phonenumber

```powershell

# $a is the original phonenumber
$a = [int64]'1234567890'

# $b is the pattern we want to force $a into
$b = "{0:###-###-####}" -f $a

# output of our regex
$b

# get the last 4 digits of the number
$b.Substring($b.Length -4)

```

================

# Markdown template for Links

```Markdown

[Title](URL){:target="_blank"}

```
