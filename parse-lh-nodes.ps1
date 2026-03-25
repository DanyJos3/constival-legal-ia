$data = Get-Content 'C:/Users/USUARIO/Documents/GitHub/constival-legal-ia/lighthouse-phase2-final.json' -Raw | ConvertFrom-Json

Write-Output "=== HEADING ORDER FAILURES ==="
$headingAudit = $data.audits.'heading-order'
if ($headingAudit.details -and $headingAudit.details.items) {
    foreach($item in $headingAudit.details.items) {
        Write-Output $item.node.snippet
    }
}

Write-Output "`n=== COLOR CONTRAST FAILURES ==="
$contrastAudit = $data.audits.'color-contrast'
if ($contrastAudit.details -and $contrastAudit.details.items) {
    foreach($item in $contrastAudit.details.items) {
        Write-Output $item.node.snippet
    }
}
