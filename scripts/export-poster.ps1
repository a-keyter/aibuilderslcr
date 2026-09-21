Add-Type -AssemblyName System.Drawing

$width = 800
$height = 2100
$outputDir = Join-Path $PSScriptRoot '..\public'
$logoPath = Join-Path $outputDir 'liver_bird_sq_icon_transparent.png'
$pngPath = Join-Path $outputDir 'ai-builders-lcr-poster.png'
$jpgPath = Join-Path $outputDir 'ai-builders-lcr-poster.jpg'
$pdfPath = Join-Path $outputDir 'ai-builders-lcr-poster.pdf'

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$background = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  [System.Drawing.Rectangle]::new(0, 0, $width, $height),
  [System.Drawing.Color]::FromArgb(9, 7, 13),
  [System.Drawing.Color]::FromArgb(5, 4, 9),
  90
)
$graphics.FillRectangle($background, 0, 0, $width, $height)
$background.Dispose()

$logo = [System.Drawing.Image]::FromFile($logoPath)
$logoSize = 240
$logoX = [int](($width - $logoSize) / 2)
$graphics.DrawImage($logo, $logoX, 130, $logoSize, $logoSize)
$logo.Dispose()

$font = New-Object System.Drawing.Font('Consolas', 31, [System.Drawing.FontStyle]::Regular)
$smallFont = New-Object System.Drawing.Font('Consolas', 23, [System.Drawing.FontStyle]::Regular)
$footerFont = New-Object System.Drawing.Font('Consolas', 17, [System.Drawing.FontStyle]::Bold)
$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(239, 236, 247))
$ink = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(197, 192, 214))
$accent = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(169, 125, 255))

$center = New-Object System.Drawing.StringFormat
$center.Alignment = [System.Drawing.StringAlignment]::Center
$center.LineAlignment = [System.Drawing.StringAlignment]::Near

$graphics.DrawString('AI BUILDERS', $font, $white, [System.Drawing.RectangleF]::new(0, 455, $width, 55), $center)
$graphics.DrawString('LCR', (New-Object System.Drawing.Font('Consolas', 92, [System.Drawing.FontStyle]::Bold)), $white, [System.Drawing.RectangleF]::new(0, 530, $width, 110), $center)

for ($x = 125; $x -lt 690; $x += 37) {
  $graphics.FillEllipse($accent, $x, 735, 8, 8)
}

$copy = "The community for cracked`nAI builders in the`nLiverpool City region."
$graphics.DrawString($copy, $font, $white, [System.Drawing.RectangleF]::new(70, 815, 660, 170), $center)

$invite = "Bring your ideas.`nBuild something brilliant."
$graphics.DrawString($invite, $smallFont, $ink, [System.Drawing.RectangleF]::new(70, 1260, 660, 120), $center)

for ($x = 155; $x -lt 655; $x += 34) {
  $graphics.FillEllipse($accent, $x, 1515, 8, 8)
}

$footer = 'COWORKING  /  DEMOS  /  HACKATHONS'
$graphics.DrawString($footer, $footerFont, $accent, [System.Drawing.RectangleF]::new(40, 1925, 720, 35), $center)

$bitmap.Save($pngPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Save($jpgPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$graphics.Dispose()
$bitmap.Dispose()
$font.Dispose()
$smallFont.Dispose()
$footerFont.Dispose()
$white.Dispose()
$ink.Dispose()
$accent.Dispose()
$center.Dispose()

# Embed the JPEG as a single image on one 800 x 2100 point PDF page.
$imageBytes = [System.IO.File]::ReadAllBytes($jpgPath)
$content = 'q 800 0 0 2100 0 0 cm /Im0 Do Q'
$stream = New-Object System.IO.MemoryStream
$writer = New-Object System.IO.BinaryWriter($stream, [Text.Encoding]::ASCII)
$offsets = New-Object System.Collections.Generic.List[int]
$writeAscii = { param([string]$value) $writer.Write([Text.Encoding]::ASCII.GetBytes($value)) }
$writeObject = {
  param([string]$header, [byte[]]$body)
  $offsets.Add([int]$stream.Position)
  & $writeAscii $header
  if ($body.Length -gt 0) { $writer.Write($body) }
}
$writer.Write([Text.Encoding]::ASCII.GetBytes("%PDF-1.4`n"))
& $writeObject '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj`n' ([byte[]]@())
& $writeObject '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj`n' ([byte[]]@())
& $writeObject '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 800 2100] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >> endobj`n' ([byte[]]@())
$offsets.Add([int]$stream.Position)
$writer.Write([Text.Encoding]::ASCII.GetBytes("4 0 obj`n<< /Type /XObject /Subtype /Image /Width $width /Height $height /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length $($imageBytes.Length) >>`nstream`n"))
$writer.Write($imageBytes)
$writer.Write([Text.Encoding]::ASCII.GetBytes("`nendstream`nendobj`n"))
& $writeObject "5 0 obj`n<< /Length $($content.Length) >>`nstream`n$content`nendstream`nendobj`n" ([byte[]]@())
$xref = [int]$stream.Position
$writer.Write([Text.Encoding]::ASCII.GetBytes("xref`n0 6`n0000000000 65535 f `n"))
foreach ($offset in $offsets) { $writer.Write([Text.Encoding]::ASCII.GetBytes(('{0:D10} 00000 n `n' -f $offset))) }
$writer.Write([Text.Encoding]::ASCII.GetBytes("trailer << /Size 6 /Root 1 0 R >>`nstartxref`n$xref`n%%EOF"))
$writer.Flush()
[System.IO.File]::WriteAllBytes($pdfPath, $stream.ToArray())
$stream.Dispose()
$writer.Dispose()
Remove-Item $jpgPath

Write-Output "Created $pngPath"
Write-Output "Created $pdfPath"