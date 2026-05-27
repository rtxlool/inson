$ErrorActionPreference = 'Stop'
$outDir = Join-Path $PSScriptRoot 'images\projects'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# slug | url
$projects = @(
  @('greenwich-manor-house',           'https://insonduboiswood.com/wp-content/uploads/2022/10/Epicurean-distinction-1.jpg'),
  @('malmo-pool-house',                'https://insonduboiswood.com/wp-content/uploads/2018/08/MALMO0114.jpg'),
  @('west-village-townhouse',          'https://insonduboiswood.com/wp-content/uploads/2018/08/001-1024x667.jpg'),
  @('upper-east-side-townhouse',       'https://insonduboiswood.com/wp-content/uploads/2018/08/75thStreet_01-1024x690.jpg'),
  @('palm-beach-residence',            'https://insonduboiswood.com/wp-content/uploads/2022/10/ynDyoPPQ-1024x768.jpg'),
  @('tribeca-loft',                    'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_tribeca_livingroom.jpg'),
  @('5th-avenue-condo',                'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_uppereastside_2_moderndecor.png'),
  @('upper-eastside-condo',            'https://insonduboiswood.com/wp-content/uploads/2018/08/INSON-73RD-ST0142.jpg'),
  @('upper-eastside-renovation',       'https://insonduboiswood.com/wp-content/uploads/2018/08/DSC_1407.jpg'),
  @('greenwich-carriage-house',        'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_greenwich_staircase-1024x684.jpg'),
  @('greenwich-village-church-condo',  'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_judelaw_livingroom.jpg'),
  @('central-park-penthouse',          'https://insonduboiswood.com/wp-content/uploads/2018/08/DALE-NY-0240.jpg'),
  @('upper-east-side-carriage-house',  'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_waterfallmansion_living7.jpg'),
  @('lake-como-farm-house',            'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_lakecomo_livingroom.jpg'),
  @('upper-east-side-studio',          'https://insonduboiswood.com/wp-content/uploads/2018/08/HYMAN-0006-1.jpg'),
  @('townhouse-holiday',               'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_holiday_livingroom.jpg'),
  @('greenwich-village-townhouse',     'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_greenwichave_livingroom3.jpg'),
  @('park-avenue-duplex',              'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_52parkave_livingroom3.jpg'),
  @('5th-avenue-museum-mile',          'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_lauto_livingroom-e1666558191293.png'),
  @('greenwich-manor',                 'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_stanwich_11_diningroom.jpg'),
  @('connecticut-country-house',       'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_fallsvillage_livingroom2.jpg'),
  @('mardi-gras-academy-mansion',      'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_bradfield_avantgarde1.jpg'),
  @('hamptons-colonial',               'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_quogue_livingroom.jpg'),
  @('northern-thailand-retreat',       'https://insonduboiswood.com/wp-content/uploads/2018/08/Inson_Thailand06Ha-1024x682.jpg'),
  @('chiangmai-country-house',         'https://insonduboiswood.com/wp-content/uploads/2018/08/insonwood_interiordesign_chiangmai_livingroom.jpg'),
  @('uppereastside-custom-kitchen',    'https://insonduboiswood.com/wp-content/uploads/2018/08/75thStreet-8-1024x684.jpg'),
  @('paris-penthouse',                 'https://insonduboiswood.com/wp-content/uploads/2018/08/MADELINE0148.jpg'),
  @('mediterranean-villa',             'https://insonduboiswood.com/wp-content/uploads/2018/08/SANTANYI0483.jpg'),
  @('lower-east-side-triplex',         'https://insonduboiswood.com/wp-content/uploads/2018/08/1L.jpg'),
  @('palm-beach-villa',                'https://insonduboiswood.com/wp-content/uploads/2023/08/4-Front-3-1024x683.jpg')
)

$ok = 0; $fail = 0
foreach ($p in $projects) {
  $slug = $p[0]; $url = $p[1]
  $ext = [System.IO.Path]::GetExtension(($url -split '\?')[0])
  if (-not $ext) { $ext = '.jpg' }
  $dest = Join-Path $outDir ($slug + $ext)
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -Headers @{ 'User-Agent' = 'Mozilla/5.0' } -TimeoutSec 30
    $ok++
    Write-Output "OK   $slug"
  } catch {
    $fail++
    Write-Output "FAIL $slug  $($_.Exception.Message)"
  }
}
Write-Output "---"
Write-Output "Downloaded: $ok / $($projects.Count)  (failed: $fail)"
