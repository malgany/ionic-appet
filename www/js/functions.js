function getImage() {
    navigator.camera.getPicture(cortarImagem, function(message) {
        alert('get picture failed');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function cortarImagem(imageURI) {

    plugins.crop.promise(imageURI, {quality: 90})
    .then(function success (newPath) {
        $("#pet-image").html('<img src="'+newPath+'" alt="Smiley face" height="100%" width="100%">');
        $("#pet-image").data("urlimg", newPath);
    })
    .catch(function fail (err) {

    })
}

function transferirImagem() {

    var imageURI = $("#pet-image").data("urlimg");

    if(imageURI == "")
        return ;

    var params = JSON.stringify($('form').serializeObject());

    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://tony-malgany.rhcloud.com/ajax.php", function(result){
        alert(JSON.stringify(result));
    }, function(error){
        alert(JSON.stringify(error));
    }, options);
}

function saveCadastroDesaparecido() {

    transferirImagem();
}

$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};