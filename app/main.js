

var page = new tabris.Page({
     //
	 title:"download file",
	 topLevel: true,
        background: "#000"
    }).open();
//
var rez;
  var db = window.sqlitePlugin.openDatabase({name: './app/ayat.db', location: 'default'});
//
     var text = new tabris.TextView({
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
	  db.transaction(function(tx) {
    tx.executeSql('SELECT *, text FROM ayat', [], function(tx, rs) {
      console.log('Record count (expected to be 2): ' + rs.rows.item(0).text);
	    rez.set("text","res="+rs.rows.item(0));
	    window.plugins.toast.showShortCenter("res = "+rs.rows.item(0).text)
	    
    }, function(tx, error) {
      window.plugins.toast.showShortCenter('SELECT error: ' + error.message);
	    rez.set("text","errrrrrrrr");
    });
  });
	    // var db = new sqlite3.Database();
	   //  SELECT *, text FROM ayat
	     
        }).appendTo(page);
rez = new tabris.TextView({
            font: "bold 12px",
            textColor: "#fff",
          
            centerX: 0,
            layoutData: {
                top: 100,
                left: 20,
             
            },
            text: "result here"
        }).appendTo(page);
        //
    //
