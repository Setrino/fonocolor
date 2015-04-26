<!DOCTYPE html>
<html moznomarginboxes mozdisallowselectionprint>
<head>
    <script src="js/jquery-1.10.2.min.js"></script>
    <link rel="stylesheet" href="css/fonts.css" media="screen, print"/>
    <link rel="stylesheet" href="css/pdf.css" media="screen, print"/>
    <title>Phonocolor PDF Generator</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<div id="template_selector">
    <div class="templates">
        <div class="template yellow_b">
            <img src="images/pdf/templates/c_only.png"/>
        </div>
        <div class="template">
            <img src="images/pdf/templates/c_t.png"/>
        </div>
    </div>
    <div class="text_size">
        <span class="small yellow_text">S</span>
        <span class="medium">M</span>
        <span class="large">L</span>
    </div>
    <div class="checks">
        <div class="checkboxes">
            <input type="checkbox" id="voyelle" name="vehicle" value="voyelle" checked>
            <label for="voyelle">Voyelles</label>
        </div>
        <div class="checkboxes">
            <input type="checkbox" name="consonnes" id="consonnes" value="consonnes" checked>
            <label for="consonnes">Consonnes</label>
        </div>
    </div>
</div>
<div id="download_pdf"></div>
<div id="move_top"></div>
<div class="book">
    <div class="page">
        <div class="subpage">
            <div class="outer_canvas">
                <hr>
                <canvas id="canvas1"></canvas>
            </div>
            <footer>
                <hr>
                <div class="phonocolor">phonocolor.ch</div>
                <div class="unil_logo"></div>
            </footer>
        </div>
    </div>
    <!--<div class="page">
        <div class="subpage">
            <div class="lines"></div>
            <img class="logo" src="images/logo.png" />
            <div class="half"><hr></div>
            <h4 class="text">Consonnes</h4>
            <img class="generated_image" src="images/pdf/consonnes.png" />
            <div class="half"><hr></div>
            <h4 class="text">Voyelles</h4>
            <img class="generated_image" src="images/pdf/voyenne.png" />
            <div class="page_number"></div>
            <div class="date"></div>
        </div>
    </div>
    <div class="page">
        <div class="subpage">
            <div class="lines"></div>
            <img class="logo" src="images/logo.png" />
            <div class="half"><hr></div>
            <img class="generated_image" src="images/pdf/text.png" />
            <div class="half"><hr></div>
            <img class="generated_image" src="images/pdf/text.png" />
            <div class="page_number"></div>
            <div class="date"></div>
        </div>
    </div>-->
</div>
</body>
<script>
    var arrayText = jQuery.parseJSON(<?php session_start(); echo json_encode($_SESSION['textArray']); ?>);
</script>
<script src="js/pdf.js"></script>
</html>