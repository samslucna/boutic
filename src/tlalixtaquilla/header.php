<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="utf-8">


    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie-edge">


    <title><?php wp_title('|', true, 'right'); ?></title>


    <!--Import materialize.css-->

    <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/jquery.min.js"></script>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/jquery.bxslider.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/semantic.min.css">

    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/css/style.css">


    <?php wp_head(); ?>

</head>

<body>

    <div class="header" style="margin-top:11px; ">
        <div class="ui internally container  grid">
            <div class="row fluid">
                <div class="ui two wide column  centered">
                    <div class="column">
                        <img class="ui image" style="width: 100%;height: auto;" src="<?php bloginfo('template_url'); ?>/img/logotlalix.svg">
                    </div>

                </div>
                <div class="ui twelve wide column ">
                    <div class="ui segment center aligned" style="background-color: #801330; color:white;">
                        <h5 style="margin: 0;">H. Ayuntmaiento Municipal de Tlalixtaquilla de Maldonado</h5>
                        <h5 style="margin: 0;">Administración 2021-2024</h5>
                        
                    </div>


                    <div class="ui stackable menu center aligned" style="background-color: #cbb778;margin: 0; ">
                        <div class="item ">
                            <img src="<?php bloginfo('template_url'); ?>/img/logotlalix.svg">
                        </div>
                        <a href="<?php echo home_url() ?>" class="item">
                            Inicio
                        </a>
                        <div class="menu">
                            <div class="ui dropdown item">
                                Gobierno Municipal <i class="dropdown icon"></i>
                                <div class="menu">
                                    <a href="<?php echo home_url() ?>/index.php/estructura-organica" class="item">Estructura Municipal</a>
                                    <a href="<?php echo home_url() ?>/index.php/marco-normativo" class="item">Marco Normativo</a>

                                </div>
                            </div>

                        </div>
                        <a class="item" href="<?php echo home_url() ?>/index.php/tramites-y-servicios">
                            Tramites y Servicios
                        </a>

                        <div class="menu">
                            <div class="ui dropdown item">
                                Transparencia <i class="dropdown icon"></i>
                                <div class="menu">
                                    <a href="<?php echo home_url() ?>/index.php/unidad-de-transparencia/" class="item">Ley 207</a>
                                    <a href="<?php echo home_url() ?>/index.php/armonizacion-contable" class="item">Armonizacion Contable</a>
                                </div>
                            </div>

                        </div>
                        <a class=" right item">
                            SEDEM
                        </a>

                    </div>

                </div>
                <div class="ui two wide column centered">
                    <div class="column">
                        <img class="ui image" style="width: 100%; margin-top:17px;" src="<?php bloginfo('template_url'); ?>/img/logoright.jpg">
                    </div>

                </div>
            </div>

        </div>

    </div>
