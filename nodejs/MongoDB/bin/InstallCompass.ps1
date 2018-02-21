#Requires -Version 3.0
<#
.SYNOPSIS
    Download and install latest version of MongoDB Compass.

.DESCRIPTION
    A longer description.

.INPUTS
    Description of objects that can be piped to the script

.OUTPUTS
    Description of objects that are output by the script

.EXAMPLE
    Example of how to run the script

.LINK
    Links to further documentation

.NOTES
    Detail on what the script does, if this is needed
#>
param()
$ErrorActionPreference = 'Stop'

$CompassUrl = 'https://compass.mongodb.com/api/v2/download/latest/compass-community/stable/windows'

$TemporaryDir = [System.IO.Path]::GetTempPath()
$CompassExe = "$TemporaryDir" + "compass-install.exe"

Remove-Item $CompassExe -ErrorAction:Ignore

Write-Output "Downloading Compass from $CompassUrl"
Invoke-WebRequest -Uri $CompassUrl -OutFile $CompassExe

Write-Output "Installing Compass"
& $CompassExe

# Remove the binary we downloaded
Remove-Item $CompassExe -ErrorAction:Ignore

Write-Output "Successfully installed Compass"
