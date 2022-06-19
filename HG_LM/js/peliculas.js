function loadPeliculas() {
  const options = {
    method: "GET",
  };
  
  fetch("https://swapi.dev/api/films/", options)
        .then(response => response.text())
        .then(data => llenarTabla(data));
} 

function llenarTabla(data){
  var obj = JSON.parse(data);
  var peliculas = obj.results;
  var count=0;


  // Obtener la referencia del elemento table
  var tabla   = document.getElementById("tabla");
  tabla.innerHTML="";


  // Crea un elemento <head>
  var tblHead = document.createElement("thead");

  var tr = document.createElement("tr");

  for (var key in peliculas[0]){
    count++;

    if(count>4){
      break;

    }else if(!(key == "opening_crawl")){
      var th = document.createElement("th");
      var node = document.createTextNode(key);
      th.appendChild(node);
      tr.appendChild(th);

    }
  }

  tblHead.appendChild(tr);

  count=0;

  // Crea un elemento <tbody>
  var tblBody = document.createElement("tbody");

  // Crea las celdas
    for (var i of peliculas) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");

      for (var key in i) {

        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i[key]);

        count++;
        if(count<=4){
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }

      }
      count=0
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  //  // appends <tblBody> into <table>
  tabla.appendChild(tblHead);
  tabla.appendChild(tblBody);
}

