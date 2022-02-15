jQuery(".switch").on('click', function(){
            jQuery(this).toggleClass("active");
            if (jQuery('.span').text() == "ON")
                jQuery('.span').text("OFF")
            else
                jQuery('.span').text("ON");
        });
