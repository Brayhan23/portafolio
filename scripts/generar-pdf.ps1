# Genera los PDF del portafolio con Chrome sin ventana a partir de /[lang]/imprimir.
# Requiere el sitio corriendo (npm run build; npm start). Uso:
#   powershell -File scripts/generar-pdf.ps1 [-Base http://localhost:3000]
# Públicos (sin teléfono) -> public/cv/ ; con teléfono (?contacto=completo) -> _privado/ (ignorada en git).
param([string]$Base = "http://localhost:3000")

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$raiz = Split-Path $PSScriptRoot -Parent
New-Item -ItemType Directory -Force "$raiz\public\cv", "$raiz\_privado" | Out-Null

$salidas = foreach ($lang in "es", "en") {
  @{ url = "$Base/$lang/imprimir"; pdf = "$raiz\public\cv\portafolio-brayhan-escobar-$lang.pdf" }
  @{ url = "$Base/$lang/imprimir?contacto=completo"; pdf = "$raiz\_privado\portafolio-brayhan-escobar-$lang-completo.pdf" }
}

foreach ($s in $salidas) {
  & $chrome --headless=new --disable-gpu --no-first-run --no-pdf-header-footer `
    --blink-settings=preferredColorScheme=1 --virtual-time-budget=10000 `
    "--user-data-dir=$env:TEMP\chrome-pdf" "--print-to-pdf=$($s.pdf)" $s.url 2>$null | Out-Null
  $bytes = [System.IO.File]::ReadAllText($s.pdf, [System.Text.Encoding]::GetEncoding(28591))
  $paginas = ([regex]::Matches($bytes, "/Type\s*/Page[^s]")).Count
  "{0}  {1} páginas  {2} KB" -f (Split-Path $s.pdf -Leaf), $paginas, [int]((Get-Item $s.pdf).Length / 1KB)
}
