// $(".form-field").on('change keydown paste input', function(){
$('#btn-generate').click(function () {
    let requestString = {
        length: 4,
        count: 1,
        prefix: '',
        suffix: ''
    }
    // Validate
    if($('#length').val().length>0) {
        requestString.length = $('#length').val()
    }
    if($('#count').val().length>0) {
        requestString.count = $('#count').val()
    }
    if($('#prefix').val().length>0) {
        requestString.prefix = $('#prefix').val()
    }
    if($('#suffix').val().length>0) {
        requestString.suffix = $('#suffix').val()
    }
    // Process
    generateRandomStrings(requestString, function (resultArrayRaw) {
        let resultString = ''
        let resultArray = [...new Set(resultArrayRaw)];
        // console.log('resultArray len:', resultArray.length);
        for (var i = 0; i < resultArray.length; i++) {
            resultString = resultString + resultArray[i]+'\n'
            $('#result-text').val(resultString)
        }
    })

    $('#export-container').removeClass('hide')
});

async function generateRandomStrings(requestString, cb) {
    // console.log('-in->>', requestString);
    let resultArray = []
    let generatedString = ''
    for (var i = 0; i < requestString.count; i++) {
        generatedString = await makeString(requestString.length)
        generatedString = requestString.prefix+generatedString+requestString.suffix
        resultArray.push(generatedString)
        if(resultArray.length == requestString.count) {
            cb(resultArray)
        }
    }
}

function makeString(length) {
   var result           = '';
   // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

$('#btn-download-csv').click(function () {
    var resultDataArray = $('#result-text').val().split('\n').filter(Boolean);
    // const rows = [
    //     []
    // ];
    let csvContent = "data:text/csv;charset=utf-8,";
    // resultDataArray.forEach(function(row) {
    //     csvContent += row + "\r\n";
    // });
    csvContent = csvContent + resultData.join("\n");
    // console.log('csvContent:', csvContent);

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "qrgen.csv");
    document.body.appendChild(link);
    link.click();
})
