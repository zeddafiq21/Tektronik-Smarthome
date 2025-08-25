




const firebaseConfig = {
apiKey: "AIzaSyBCEUR21q2-OxbU4ikZTCcnwSGhDfCygh8",
  authDomain: "smarthome-v2-tektronik.firebaseapp.com",
  databaseURL: "https://smarthome-v2-tektronik-default-rtdb.firebaseio.com",
  projectId: "smarthome-v2-tektronik",
  storageBucket: "smarthome-v2-tektronik.firebasestorage.app",
  messagingSenderId: "259874048885",
  appId: "1:259874048885:web:53870a46ac4d722e51a13c",
  measurementId: "G-2SL9TBPRJP"
  };

  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);	// Initialize Firebase
 
$(document).ready(function(){
    var database = firebase.database();
    var Lampu_1;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Lampu_1").on("value", function(snap){
        Lampu_1 = snap.val();
        if(Lampu_1 == 1){
            $("#a").prop("checked", true);
        } else {
            $("#a").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#a").click(function(){
        var firebaseRef = database.ref("Lampu_1");
        if(Lampu_1 == 1){
            firebaseRef.set(0);
            Lampu_1 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_1 = 1;
        }
    });
});






$(document).ready(function(){
    var database = firebase.database();
    var Lampu_2;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_2").on("value", function(snap){
        Lampu_2 = snap.val();
        if(Lampu_2 == 1){
            $("#b").prop("checked", true);
        } else {
            $("#b").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#b").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_2");
        if(Lampu_2 == 1){
            firebaseRef.set(0);
            Lampu_2 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_2 = 1;
        }
    });
});




$(document).ready(function(){
    var database = firebase.database();
    var Lampu_3;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_3").on("value", function(snap){
        Lampu_3 = snap.val();
        if(Lampu_3 == 1){
            $("#c").prop("checked", true);
        } else {
            $("#c").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#c").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_3");
        if(Lampu_3 == 1){
            firebaseRef.set(0);
            Lampu_3 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_3 = 1;
        }
    });
});




$(document).ready(function(){
    var database = firebase.database();
    var Lampu_4;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_4").on("value", function(snap){
        Lampu_4 = snap.val();
        if(Lampu_4 == 1){
            $("#d").prop("checked", true);
        } else {
            $("#d").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#d").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_4");
        if(Lampu_4 == 1){
            firebaseRef.set(0);
            Lampu_4 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_4 = 1;
        }
    });
});






$(document).ready(function(){
    var database = firebase.database();
    var Lampu_5;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_5").on("value", function(snap){
        Lampu_5 = snap.val();
        if(Lampu_5 == 1){
            $("#e").prop("checked", true);
        } else {
            $("#e").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#e").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_5");
        if(Lampu_5 == 1){
            firebaseRef.set(0);
            Lampu_5 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_5 = 1;
        }
    });
});


$(document).ready(function(){
    var database = firebase.database();
    var Lampu_6;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_6").on("value", function(snap){
        Lampu_6 = snap.val();
        if(Lampu_6 == 1){
            $("#f").prop("checked", true);
        } else {
            $("#f").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#f").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_6");
        if(Lampu_6 == 1){
            firebaseRef.set(0);
            Lampu_6 = 0;
        } else {
            firebaseRef.set(1);
            Lampu_6 = 1;
        }
    });
});


$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_1;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_7").on("value", function(snap){
        Pendingin_1 = snap.val();
        if(Pendingin_1 == 1){
            $("#g").prop("checked", true);
        } else {
            $("#g").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#g").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_7");
        if(Pendingin_1 == 1){
            firebaseRef.set(0);
            Pendingin_1 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_1 = 1;
        }
    });
});


$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_2;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_8").on("value", function(snap){
        Pendingin_2 = snap.val();
        if(Pendingin_2 == 1){
            $("#h").prop("checked", true);
        } else {
            $("#h").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#h").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_8");
        if(Pendingin_2 == 1){
            firebaseRef.set(0);
            Pendingin_2 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_2 = 1;
        }
    });
});


$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_3;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_9").on("value", function(snap){
        Pendingin_3 = snap.val();
        if(Pendingin_3 == 1){
            $("#i").prop("checked", true);
        } else {
            $("#i").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#i").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_9");
        if(Pendingin_3 == 1){
            firebaseRef.set(0);
            Pendingin_3 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_3 = 1;
        }
    });
});



$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_4;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_10").on("value", function(snap){
        Pendingin_4 = snap.val();
        if(Pendingin_4 == 1){
            $("#j").prop("checked", true);
        } else {
            $("#j").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#j").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_10");
        if(Pendingin_4 == 1){
            firebaseRef.set(0);
            Pendingin_4 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_4 = 1;
        }
    });
});


$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_5;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_11").on("value", function(snap){
        Pendingin_5 = snap.val();
        if(Pendingin_5 == 1){
            $("#k").prop("checked", true);
        } else {
            $("#k").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#k").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_11");
        if(Pendingin_5 == 1){
            firebaseRef.set(0);
            Pendingin_5 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_5 = 1;
        }
    });
});




$(document).ready(function(){
    var database = firebase.database();
    var Pendingin_6;

    // Listener realtime ke node lampu/Lampu_1
    database.ref("Saklar/Lampu_12").on("value", function(snap){
        Pendingin_6 = snap.val();
        if(Pendingin_6 == 1){
            $("#l").prop("checked", true);
        } else {
            $("#l").prop("checked", false);
        }
    });

    // Klik checkbox untuk ubah state
    $("#l").click(function(){
        var firebaseRef = database.ref("Saklar/Lampu_12");
        if(Pendingin_6 == 1){
            firebaseRef.set(0);
            Pendingin_6 = 0;
        } else {
            firebaseRef.set(1);
            Pendingin_6 = 1;
        }
    });
});

 
var database = firebase.database();
var dataRef1 = database.ref('PV/Tegangan');
var dataRef2 = database.ref('PV/Arus');
var dataRef3 = database.ref('PV/Daya');



var dataRef4 = database.ref('Baterai/Tegangan');
var dataRef5 = database.ref('Baterai/Arus');
var dataRef6 = database.ref('Baterai/Daya');



var dataRef7 = database.ref('Beban/Tegangan');
var dataRef8 = database.ref('Beban/Arus');
var dataRef9 = database.ref('Beban/Daya');

var dataRef10 = database.ref('dht/Suhu_1');
var dataRef11 = database.ref('dht/Suhu_2');
var dataRef12 = database.ref('dht/Suhu_3');

var dataRef13 = database.ref('dht/kelembapan_1');
var dataRef14 = database.ref('dht/kelembapan_2');
var dataRef15 = database.ref('dht/kelembapan_3');


dataRef1.on('value', function(getdata1){
    var teganganPV = getdata1.val();
	
document.getElementById("teganganPV").innerHTML=  teganganPV +" V"; 

})


dataRef2.on('value', function(getdata1){
    var arusPV = getdata1.val().toFixed(2);

document.getElementById("arusPV").innerHTML= arusPV + " A"; 

})



dataRef3.on('value', function(getdata1){
    var dayaPV = getdata1.val().toFixed(2);
document.getElementById("dayaPV").innerHTML= dayaPV +" W"; 

})
dataRef4.on('value', function(getdata1){
    var teganganBaterai = getdata1.val();
document.getElementById("teganganBaterai").innerHTML= teganganBaterai +" V"; 

})
dataRef5.on('value', function(getdata1){
    var arusBaterai = getdata1.val();
document.getElementById("arusBaterai").innerHTML= arusBaterai +" A"; 

})
dataRef6.on('value', function(getdata1){
    var dayaBaterai = getdata1.val();
document.getElementById("dayaBaterai").innerHTML= dayaBaterai +" W"; 

})
dataRef7.on('value', function(getdata1){
    var teganganBeban = getdata1.val();
document.getElementById("teganganBeban").innerHTML= teganganBeban +" V"; 

})

dataRef8.on('value', function(getdata1){
    var arusBeban = getdata1.val();
document.getElementById("arusBeban").innerHTML= arusBeban +" A"; 

})
dataRef9.on('value', function(getdata1){
    var dayaBeban = getdata1.val();
document.getElementById("dayaBeban").innerHTML= dayaBeban +" W"; 

})


dataRef10.on('value', function(getdata1){
    var Suhu_1 = getdata1.val();
document.getElementById("Suhu_1").innerHTML= Suhu_1 +" °C"; 

})
dataRef11.on('value', function(getdata1){
    var Suhu_2 = getdata1.val();
document.getElementById("Suhu_2").innerHTML= Suhu_2 +" °C"; 

})

dataRef12.on('value', function(getdata1){
    var Suhu_3 = getdata1.val();
document.getElementById("Suhu_3").innerHTML= Suhu_3 +" °C"; 

})


dataRef13.on('value', function(getdata1){
    var kelembapan_1 = getdata1.val();
document.getElementById("kelembapan_1").innerHTML= kelembapan_1 +" %"; 

})
dataRef14.on('value', function(getdata1){
    var kelembapan_2 = getdata1.val();
document.getElementById("kelembapan_2").innerHTML= kelembapan_2 +" %"; 

})

dataRef15.on('value', function(getdata1){
    var kelembapan_3 = getdata1.val();
document.getElementById("kelembapan_3").innerHTML= kelembapan_3 +" %"; 

})


// const child = document.getElementById("#teg")






