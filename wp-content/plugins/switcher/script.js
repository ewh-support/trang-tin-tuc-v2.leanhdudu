jQuery(document).ready(function(){jQuery('#style_selector .close').click(function(e){e.preventDefault();jQuery('#style_selector').removeClass("visible").addClass("hidden-style");jQuery(this).hide();jQuery('#style_selector .open').show();});jQuery('#style_selector .open').click(function(e){e.preventDefault();jQuery('#style_selector').removeClass("hidden-style").addClass("visible");jQuery(this).hide();jQuery('#style_selector .close').show();});});