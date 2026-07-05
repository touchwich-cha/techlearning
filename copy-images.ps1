param()

$src = 'C:\Users\touch\Desktop\my-next-app\extra-portfolio'
$dst = 'C:\Users\touch\Desktop\my-next-app\public\projects\extra-portfolio'

# Clean ALL existing in dst
if (Test-Path $dst) { Remove-Item -Recurse -Force -Path $dst }
New-Item -ItemType Directory -Force -Path $dst | Out-Null

# --- Step 1: Copy Gamifications ---
$gamSrc = Get-ChildItem -Path $src -Recurse -Directory | Where-Object { $_.Name -eq 'Gamifications' } | Select-Object -First 1
if ($gamSrc) {
    $gamDst = Join-Path $dst 'gamifications'
    New-Item -ItemType Directory -Force -Path $gamDst | Out-Null
    $i = 1
    foreach ($f in (Get-ChildItem $gamSrc.FullName -File | Sort-Object Name)) {
        $newName = 'gamifications-' + $i.ToString('D2') + $f.Extension.ToLower()
        Copy-Item $f.FullName (Join-Path $gamDst $newName) -Force
        Write-Host "OK: gamifications/$newName"
        $i++
    }
}

# --- Step 2: Copy Logical Test ---
$ltSrc = Get-ChildItem -Path $src -Recurse -Directory | Where-Object { $_.Name -eq 'Logical Test' } | Select-Object -First 1
if ($ltSrc) {
    $ltDst = Join-Path $dst 'logical-test'
    New-Item -ItemType Directory -Force -Path $ltDst | Out-Null
    $i = 1
    foreach ($f in (Get-ChildItem $ltSrc.FullName -File | Sort-Object Name)) {
        $newName = 'logical-test-' + $i.ToString('D2') + $f.Extension.ToLower()
        Copy-Item $f.FullName (Join-Path $ltDst $newName) -Force
        Write-Host "OK: logical-test/$newName"
        $i++
    }
}

# --- Step 3: GMP folders (Thai names - match by file count) ---
# Get all dirs with files, exclude Gamifications and Logical Test
$gmpDirs = Get-ChildItem -Path $src -Recurse -Directory |
    Where-Object { $_.Name -ne 'Gamifications' -and $_.Name -ne 'Logical Test' -and $_.Name -notlike '*kebab*' } |
    Where-Object { (Get-ChildItem $_.FullName -File).Count -gt 0 } |
    Sort-Object { (Get-ChildItem $_.FullName -File).Count }

$gmpPrefixes = @('gmp-cleanliness','gmp-floor','gmp-pest-control')

$idx = 0
foreach ($dir in $gmpDirs) {
    if ($idx -ge $gmpPrefixes.Length) { break }
    $prefix = $gmpPrefixes[$idx]
    $dirDst = Join-Path $dst $prefix
    New-Item -ItemType Directory -Force -Path $dirDst | Out-Null
    $i = 1
    foreach ($f in (Get-ChildItem $dir.FullName -File | Sort-Object Name)) {
        $newName = $prefix + '-' + $i.ToString('D2') + $f.Extension.ToLower()
        Copy-Item $f.FullName (Join-Path $dirDst $newName) -Force
        Write-Host "OK: $prefix/$newName"
        $i++
    }
    Write-Host "--- $prefix done ($($i-1) files, from $($dir.Name))"
    $idx++
}

Write-Host 'ALL DONE'
