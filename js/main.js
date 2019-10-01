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

var qrcode = new QRCode("qrcode");

function makeCode() {
    var elText = $('#message').val();
    if (!elText) {
        // console.log("Input a text");
        elText.focus();
        return;
    }
    qrcode.makeCode(elText);
    
}

function downloadCodePNG(){
    let code = $('#qrcode').children('img').attr('src');
    let link = document.getElementById('downloadButton');
    link.innerHTML = 'Download as PNG';
    link.download = 'qrcode.png';
    link.href = code;
}

function downloadCodePDF(){
    let code = $('#qrcode').children('img').attr('src');
    var doc = new jsPDF();
    doc.addImage(code, "JPEG", 15, 40, 100, 100); //You can change the size values here
    doc.save();
}

$('#message').keyup(function() {
    makeCode();
    downloadCodePNG();
});
