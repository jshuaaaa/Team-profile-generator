function generateHTML(response) {
   let markdownDraft = `<!DOCTYPE html>
   <head>
       <title>My website</title>
   </head>
   <body>
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <title>Bootstrap Example</title>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
     <style>
       /* Remove the navbar's default margin-bottom and rounded borders */ 
       .navbar {
         margin-bottom: 0;
         border-radius: 0;
       }
       
       /* Add a gray background color and some padding to the footer */
       footer {
         background-color: #f2f2f2;
         padding: 25px;
       }
     </style>
   </head>
   <body>
   
   <nav class="navbar navbar-inverse">
     <div class="container-fluid">
       <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>                        
         </button>
         <a class="navbar-brand" href="#">Portfolio</a>
       </div>
       <div class="collapse navbar-collapse" id="myNavbar">
         <ul class="nav navbar-nav">
           <li class="active"><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Gallery</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
         <ul class="nav navbar-nav navbar-right">
           <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
         </ul>
       </div>
     </div>
   </nav>
   <div class="card" style="width: 18rem;">
 
        <div class="card-body" style="border: 1px solid black">
          <h2 class="card-title">${response[0].name}</h2>
          <h4 class="card-text">${response[0].type}</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${response[0].id}</li>
          <li class="list-group-item">Email: ${response[0].email}</li>
        </ul>
        
      </div>`


       for(let i = 1; i<response.length; i++) {
        
        if(response[i].type === 'Engineer') {
       markdownDraft += `
       <div class="card" style="width: 18rem;">
 
        <div class="card-body" style="border: 1px solid black">
          <h2 class="card-title">${response[i].name}</h2>
          <h4 class="card-text">${response[i].type}</h4>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${response[i].id}</li>
          <li class="list-group-item">Email: ${response[i].email}</li>
          <li class="list-group-item">Github: <a href="https://github.com/${response[i].work}"> ${response[i].work}</a></li>
        </ul>
        
      </div>
       `
        } else if(response[i].type === 'Intern') {
          markdownDraft += `
          <div class="card" style="width: 18rem;">
    
           <div class="card-body" style="border: 1px solid black">
             <h2 class="card-title">${response[i].name}</h2>
             <h4 class="card-text">${response[i].type}</h4>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${response[i].id}</li>
             <li class="list-group-item">Email: ${response[i].email}</li>
             <li class="list-group-item">School: ${response[i].work}</li>
           </ul>
           
         </div>
          `
           }

       }

     
   markdownDraft += `<div class="container-fluid bg-3 text-center">    
     <h3>Located in undefined</h3><br>
     <div class="row">
       <div class="col-sm-3">
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3"> 
         <p>My github username is: 1</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3"> 
         <p>My linkedin username is: undefined</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3">
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
     </div>
   </div><br>
   
   <div class="container-fluid bg-3 text-center">    
     <div class="row">
       <div class="col-sm-3">
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3"> 
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3"> 
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
       <div class="col-sm-3">
         <p>Some text..</p>
         <img src="https://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
       </div>
     </div>
   </div><br><br>
   
   <footer class="container-fluid text-center">
     <p>Footer Text</p>
   </footer>
   
   </body>
   </html>
   </body>
   </html>`
    return markdownDraft;
  }
  
  module.exports = generateHTML
  