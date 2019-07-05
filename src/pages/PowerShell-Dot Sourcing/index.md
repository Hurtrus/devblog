---
Title: Dot-Sourcing in PowerShell
categories:
  - PowerShell

tags:
  - PowerShell
  - Dot-Sourcing

date: "2018-11-23"
featuredImage: './powershellLogosmaller.png'
cover : "/img/postImages/6.jpg"
author: "Scott Hurst"

---

# Dot Sourcing in PowerShell

## Introduction
When writing PowerShell scripts, the best practice is to keep your scripts as simple as possible. 

Scripts and functions should do one "thing."  (multiple VSCode windows?) This helps with troubleshooting since the function is small and does just one thing, and allows for any enhancements to the function we create in the future to be automatically available to every script in which we have used that function.

What happens when what we are trying to accomplish requires multiple things?

We could copy/paste the functions from one script to another, over and over again, but if we were to do that, those enhancements mentioned earlier, would have to be copy/pasted to each place that the code was used. 

Dot-sourcing allows us to maintain best practices while creating robust projects that compile our output from multiple sources. 

The most important part is that we have easily accessible, tested code, that we can trust!

Before we can get started with Dot-Sourcing, we need to understand a few concepts

## “Present Working Directory”: $PWD
This is seen as the PS C:\PowerShell> in the terminal window
If you are using Relative Paths, and things are failing, normally it is due to the $PWD, as we will see a bit later in this demonstration.

## The all-important Paths
2 different types of Paths
Relative: This is relative to the present working directory
Absolute: This is the exact path to the file

## The Dot in dot-sourcing
Now that we have an understanding of how the paths work with dot sourcing, the let’s see how to use dot-sourcing.
Show the (dot) in front of the path

We can execute a script by typing
```powershell
.\ScriptName.ps1
```

This creates a child scope for the script, and variables and functions defined in the script are not added to the current scope. Once the script completes any objects create are discarded, for example any variables created.

_Show where each file is coming from_

When you dot source a script all variables and functions defined in the script will persist in the shell when the script ends.
dot source the script which will run in the current scope which means any variables etc will be maintained post script execution

## We’re all here for the execution
_Successful_
Now let’s put our Absolute Path and our Relative Path scripts to work

_Failure_
Move the folder
Show how it fails for Absolute Path works for relative paths.  Fix the Absolute Path, execute again


## Take away:
**First** – If importing the relative path isn’t working, check the $pwd

**Second** - If we plan to use relative paths in a Scheduled Task or Scripts that are just executed, we will want to set the $pwd using the Set-Location cmdlet so that the relative paths will function properly.


Thanks for watching

