const respuesta = document.querySelector(".Titulo");
//const respuesta = document.getElementById("respuesta");

function buscarID(campo){}
fetch("https://jsonplaceholder.typicode.com/todos/3" + campo)
.then(response => response.json())
.then(data => {

   //console.log(data)
   //foreach() encarga de contar los elementos del arrayt que esta recorriendo  


    //   def         condicion   incremento 
   //for(var i=0; i<data.length; i++)

   let linea = "";
   data.forEach(element => {

       console.log(element)
        //varaible acumulativa    
        linea +=
         `<tr>
        <th><td><span style="background:yellow;" >Titulo: <strong>${element.title}</strong></span></td><th>
            <th>ID: ${element.id} </th>
            <th>body: ${element.body} </th> 
            <th>User ID:${element.user} </th><br />
        </tr>`
       //respuesta.innerHTML = JSON.stringify(data);
       //console.log(element.body)
   });


   respuesta.innerHTML = linea;

})
