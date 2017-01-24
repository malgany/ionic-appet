function getImage() {
    navigator.camera.getPicture(uploadPhoto, function(message) {
        alert('get picture failed');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function uploadPhoto(imageURI) {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    console.log(options.fileName);
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    options.chunkedMode = false;

    plugins.crop.promise(imageURI, {quality: 90})
    .then(function success (newPath) {
        saveImage(newPath);
        $("#pet-image").html('<img src="'+newPath+'" alt="Smiley face" height="100%" width="100%">');
    })
    .catch(function fail (err) {

    })
    /*var ft = new FileTransfer();
    ft.upload(imageURI, "http://192.168.1.4/phonegap/upload/upload.php", function(result){
        console.log(JSON.stringify(result));
    }, function(error){
        console.log(JSON.stringify(error));
    }, options);*/
 }

function saveImage(newPath) {
    alert(newPath);
    $.ajax({
        type: "POST",
        url: "http://api.tumblr.com/v2/blog/tonyhtml.tumblr.com/post?api_key=jlZbRx7boomg9Cvk6PlckOA4DI38rNzNm5x9GKrQjWWPxd7Ptf",
        dataType: 'jsonp',
        data: { type: 'photo', source: newPath },
        success: function (posts) {
            alert('ok');
            //var postings = posts.response.posts;
            //alert(posts.response);
            //alert(postings);
        }
    });
}