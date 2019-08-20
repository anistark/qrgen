$(document).ready(function() {
    // Test for placeholder support
    $.support.placeholder = (function() {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function() {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch (e.type) {
                case 'keyup':
                    {
                        $parent.toggleClass('js-hide-label', $this.val() == '');
                    }
                    break;
                case 'blur':
                    {
                        if ($this.val() == '') {
                            $parent.addClass('js-hide-label');
                        } else {
                            $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                        }
                    }
                    break;
                case 'focus':
                    {
                        if ($this.val() !== '') {
                            $parent.removeClass('js-unhighlight-label');
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }
});

function makeCode() {
    document.getElementById("qrcode").innerHTML = '';
    var elText = $('#message').val();
    if (!elText) {
        // console.log("Input a text");
        elText.focus();
        return;
    }
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: elText,
        logo: "https://i.imgur.com/iv1yQNl.png",
        colorDark : "#575757",
        colorLight : "#fff",
    });
    $('#qrcode img').attr('crossorigin','anonymous');
}

$('#message').keyup(function() {
    makeCode();
});
