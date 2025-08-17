




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

	database.ref().on("value", function(snap){
		Lampu_1 = snap.val().Lampu_1;
		if(Lampu_1 == 1){
			document.getElementById("a").checked = true;  

		} else{
			document.getElementById("a").checked = false;
		}
	});	

	$("#a").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_1");

		if(Lampu_1 == 1){
			firebaseRef.set(0);
			Lampu_1 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_1 = 1;
		}
	})
});






$(document).ready(function(){
	var database = firebase.database();
	var Lampu_2;

	database.ref().on("value", function(snap){
		Lampu_2 = snap.val().Lampu_2;
		if(Lampu_2 == 1){
			document.getElementById("b").checked = true;  

		} else{
			document.getElementById("b").checked = false;
		}
	});

	$("#b").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_2");

		if(Lampu_2 == 1){
			firebaseRef.set(0);
			Lampu_2 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_2 = 1;
		}
	})
});





$(document).ready(function(){
	var database = firebase.database();
	var Lampu_3;

	database.ref().on("value", function(snap){
		Lampu_3 = snap.val().Lampu_3;
		if(Lampu_3 == 1){
			document.getElementById("c").checked = true;  

		} else{
			document.getElementById("c").checked = false;
		}
	});

	$("#c").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_3");

		if(Lampu_3 == 1){
			firebaseRef.set(0);
			Lampu_3 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_3 = 1;
		}
	})
});




$(document).ready(function(){
	var database = firebase.database();
	var Lampu_4;

	database.ref().on("value", function(snap){
		Lampu_4 = snap.val().Lampu_4;
		if(Lampu_4 == 1){
			document.getElementById("d").checked = true;  

		} else{
			document.getElementById("d").checked = false;
		}
	});

	$("#d").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_4");

		if(Lampu_4 == 1){
			firebaseRef.set(0);
			Lampu_4 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_4 = 1;
		}
	})
});






$(document).ready(function(){
	var database = firebase.database();
	var Lampu_5;

	database.ref().on("value", function(snap){
		Lampu_5 = snap.val().Lampu_5;
		if(Lampu_5 == 1){
			document.getElementById("e").checked = true;  

		} else{
			document.getElementById("e").checked = false;
		}
	});

	$("#e").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_5");

		if(Lampu_5 == 1){
			firebaseRef.set(0);
			Lampu_5 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_5 = 1;
		}
	})
});



$(document).ready(function(){
	var database = firebase.database();
	var Lampu_6;

	database.ref().on("value", function(snap){
		Lampu_6 = snap.val().Lampu_6;
		if(Lampu_6 == 1){
			document.getElementById("f").checked = true;  

		} else{
			document.getElementById("f").checked = false;
		}
	});

	$("#f").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu_6");

		if(Lampu_6 == 1){
			firebaseRef.set(0);
			Lampu_6 = 0;
		} else {
			firebaseRef.set(1);
			Lampu_6 = 1;
		}
	})
});



$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_1;

	database.ref().on("value", function(snap){
		Pendingin_1 = snap.val().Pendingin_1;
		if(Pendingin_1 == 1){
			document.getElementById("g").checked = true;  

		} else{
			document.getElementById("g").checked = false;
		}
	});

	$("#g").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_1");

		if(Pendingin_1 == 1){
			firebaseRef.set(0);
			Pendingin_1 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_1 = 1;
		}
	})
});



$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_2;

	database.ref().on("value", function(snap){
		Pendingin_2 = snap.val().Pendingin_2;
		if(Pendingin_2 == 1){
			document.getElementById("h").checked = true;  

		} else{
			document.getElementById("h").checked = false;
		}
	});

	$("#h").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_2");

		if(Pendingin_2 == 1){
			firebaseRef.set(0);
			Pendingin_2 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_2 = 1;
		}
	})
});


$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_3;

	database.ref().on("value", function(snap){
		Pendingin_3 = snap.val().Pendingin_3;
		if(Pendingin_3 == 1){
			document.getElementById("i").checked = true;  

		} else{
			document.getElementById("i").checked = false;
		}
	});

	$("#i").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_3");

		if(Pendingin_3 == 1){
			firebaseRef.set(0);
			Pendingin_3 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_3 = 1;
		}
	})
});



$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_4;

	database.ref().on("value", function(snap){
		Pendingin_4 = snap.val().Pendingin_4;
		if(Pendingin_4 == 1){
			document.getElementById("j").checked = true;  

		} else{
			document.getElementById("j").checked = false;
		}
	});

	$("#j").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_4");

		if(Pendingin_4 == 1){
			firebaseRef.set(0);
			Pendingin_4 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_4 = 1;
		}
	})
});


$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_5;

	database.ref().on("value", function(snap){
		Pendingin_5 = snap.val().Pendingin_5;
		if(Pendingin_5 == 1){
			document.getElementById("k").checked = true;  

		} else{
			document.getElementById("k").checked = false;
		}
	});

	$("#k").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_5");

		if(Pendingin_5 == 1){
			firebaseRef.set(0);
			Pendingin_5 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_5 = 1;
		}
	})
});




$(document).ready(function(){
	var database = firebase.database();
	var Pendingin_6;

	database.ref().on("value", function(snap){
		Pendingin_6 = snap.val().Pendingin_6;
		if(Pendingin_6 == 1){
			document.getElementById("l").checked = true;  

		} else{
			document.getElementById("l").checked = false;
		}
	});

	$("#l").click(function(){
		var firebaseRef = firebase.database().ref().child("Pendingin_6");

		if(Pendingin_6 == 1){
			firebaseRef.set(0);
			Pendingin_6 = 0;
		} else {
			firebaseRef.set(1);
			Pendingin_6 = 1;
		}
	})
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






