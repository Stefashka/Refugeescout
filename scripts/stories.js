
// Funktion für Drop-up-Menü
function dropup() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Drop-Up-Menü wieder schließen, wenn User woanders hinklickt
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// globale Variablen

var currentElement = 0;
var maxElements = 0;
var elements = [];


// Initialisierungs-Funktion
function init() {
    maxElements = 0;
    currentElement = 0;
    elements = [];
    
    $.getJSON("json/stories.json",function(json){
       $.each(json,function(storypart,daten){
          maxElements ++;   
          elements.push(daten);   
       });
    })   
    .done(function() {
   	 loadElement();
  	 })
  	 .fail(function() {
    	 alert("fail");
  	 });

    // JSON laden
    // Anzahl an Elementen auslesen
    // erstes Objekt laden
}

// Lade JSON-Element (nach Nummer)
function loadElement() {
    showArrow();   
    showPicture();
    showText(elements[currentElement].bildtext, elements[currentElement].typ, elements[currentElement].position);      
    //Pfeile anzeigen-Funktion aufrufen
    //Bild laden
    //Text laden-Funktion aufrufen
}

function showPicture() {
    document.getElementById("picture").src = "images/"+elements[currentElement].bild;
}

// Pfeile anzeigen Funktion (nach Nummer und max)
function showArrow() {
    if (currentElement <= 0) {
        document.getElementById("arrowLeft").style.visibility = "hidden";
    }
    else {
        document.getElementById("arrowLeft").style.visibility = "visible";
    }
    if (currentElement >= maxElements-1) {
        document.getElementById("arrowRight").style.visibility = "hidden";
    }
    else {
        document.getElementById("arrowRight").style.visibility = "visible";
    }
    // wenn currentElement <= 0 links ausblenden
    // sonst links einblenden
    // wenn currentElement >= maxElements, rechts ausblenden (-1?)
    // sonst rechts einblenden
}
   
   
// Text anzeigen Funktion 
   function showText(textdata, typ, pos) {
   // prüfen auf pos
   // oben / unten
   // eines anzeigen, andere ausblenden
   /*	if (typ == "thinkbox") {
   		document.getElementById("thinkbubble").style.visibility = "visible";
   	}
   	else {
   		document.getElementById("thinkbubble").style.visibility = "hidden";
   	}
   */
      if (pos == "top") {
         document.getElementById("textboxTop").style.visibility = "visible";
         document.getElementById("textboxBottom").style.visibility = "hidden";
         document.getElementById("textboxTop").innerHTML = textdata;
         document.getElementById("textboxBottom").innerHTML = " ";
      }
  
		if (pos == "") { 
			document.getElementById("textboxBottom").style.visibility = "hidden";
         document.getElementById("textboxTop").style.visibility = "hidden";
         document.getElementById("textboxBottom").innerHTML = " ";
         document.getElementById("textboxTop").innerHTML = " "; 
  		}
      else {
         document.getElementById("textboxBottom").style.visibility = "visible";
         document.getElementById("textboxTop").style.visibility = "hidden";
         document.getElementById("textboxBottom").innerHTML = textdata;
         document.getElementById("textboxTop").innerHTML = " ";
      }
   // eines text setzen, andere text auf lehrzeichen setzen         
   // prüfen auf typ, rand bei beiden oder nur beim pos setzen
   	
   }

// change shown element
function changeShownElement(newCurrentElement){
        // test ob newcurrent zahl ist und ungleich 0       
       // current + new current
      if ( !isNaN(newCurrentElement) && !0) {
         currentElement = currentElement + newCurrentElement;
      } 
      if( currentElement <0){
         currentElement =0;
      }
      if( currentElement >= maxElements){
         currentElement = maxElements-1;      
      }
      loadElement();
       // test ob inerhalb von 0 bis max
       // wenn zuklein = 0, wenn zu groß = max
       // wenn inerhalb einfach als current setzen
       // anzeige funktion aufrufen
       
    }


		
			

