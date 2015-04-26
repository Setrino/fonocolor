<?php

session_start();
header("Content-type: application/pdf");

require_once('php/tcpdf/config/tcpdf_config.php');
require_once('php/tcpdf/tcpdf.php');

class refulzPDF extends TCPDF {

    public function Header() {

        $this->setJPEGQuality(90);
    }

    public function Footer() {

        $this->SetY(-15);

        $this->SetFont(PDF_FONT_NAME_MAIN, 'I', 8);

        $this->Cell(0, 10, 'phonocolor.ch', 0, false, 'C');

    }
}

$pdf = new refulzPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// $pdf->SetCreator(PDF_CREATOR);

$pdf->SetAuthor('Phonocolor');

$pdf->SetTitle('Phonocolor PDF');

$pdf->SetSubject('Phonocolor PDF');

$pdf->SetKeywords('phonocolor, PDF');

$pdf->AddPage();

$html = $_SESSION['html'];

$base = $_SERVER['DOCUMENT_ROOT'].dirname($_SERVER['REQUEST_URI']);

$html .= '<style>'.file_get_contents($base.'/css/fonts.css').'</style>';
$html .= '<style>'.file_get_contents($base.'/css/pdf.css').'</style>';

$pdf->writeHTML($html, true, false, true, false, '');

$pdf->lastPage();

$pdf->Output('file.pdf', 'D'); // show pdf

?>