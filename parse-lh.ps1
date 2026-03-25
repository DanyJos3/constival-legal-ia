$data = Get-Content 'C:/Users/USUARIO/Documents/GitHub/constival-legal-ia/lighthouse-phase2-final.json' -Raw | ConvertFrom-Json
Write-Output "=== PHASE 2 FINAL SCORES ==="
foreach($cat in $data.categories.PSObject.Properties) {
    Write-Output "$($cat.Name): $([math]::Round($cat.Value.score * 100))"
}
Write-Output ""
Write-Output "=== REMAINING ISSUES ==="
foreach($audit in $data.audits.PSObject.Properties) {
    if ($null -ne $audit.Value.score -and $audit.Value.score -lt 1 -and $audit.Value.score -ge 0) {
        Write-Output "$($audit.Name): score=$([math]::Round($audit.Value.score * 100)) | $($audit.Value.title)"
    }
}
