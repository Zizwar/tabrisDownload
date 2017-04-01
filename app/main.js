

var page = new tabris.Page({
     //
	 title:"download file",
	 topLevel: true,
        background: "#000"
    }).open();
//
var Downloader = window.plugins.Downloader;
var downloadSuccessCallback = function (folder) {
  //folder: string where the file has been downloaded
  window.plugins.toast.showShortCenter("bien downl ")
};
var downloadErrorCallback = function (error) {
	window.plugins.toast.showShortCenter("#errrrrrr !!!!! no downl")
  //error: string
};

//
     var text =    new tabris.TextView({
            font: "bold 26px",
            textColor: "#fff",
          
            centerX: 0,
            layoutData: {
                top: 20,
                left: 20,
             
            },
            text: "download file"
        }).on("tap", function(w, e) {
		//	console.debug("fnc unzip file")
				window.plugins.toast.showShortCenter("start")
	//http://hijamaonline.ma/wino/test.zip
			//http://hijamaonline.ma/wino/test.txt
			//http://hijamaonline.ma/wino/test.mp3
			Downloader.download({
    url: "http://hijamaonline.ma/wino/test.zip", //url of ressource to download: string
    path: "winoD" //path where to store ressource: string
  },
  downloadSuccessCallback,
  downloadErrorCallback
);
			
        }).appendTo(page);
        //
    //