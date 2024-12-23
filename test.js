 const diss = document.getElementById("testhere")
  const getdishehehehe = document.getElementById('testingheres')
 const pluss = document.getElementById("plusplus")
 const minus = document.getElementById("minusminus")
   currentPage = 0
    perPage = 4

 async function getdatas() {

     try {
 const promise = await fetch('info.json')
 const data  = await promise.json()
        

         renderdata(data)
        
        pluss.addEventListener('click', () => {
   
           if (currentPage < (data.length / perPage)-1) { 
               currentPage ++  
               renderdata(data);
             
          }
       });
      
       minus.addEventListener('click', () => {
          
          if (currentPage > 0) { 
              currentPage--
              renderdata(data);
          }
       });
        
    } catch (error) {
 


        
    }

     function renderdata (data){
   

         const rends = newfunc(data).map((items) =>` <img src ="${items.img}"><p>${items.Name}</p> <p>${items.Ratio} </p> <button class="dhiss" data-name="${items.Name}" data-ids="${items.id}">Select</button> <p>${items.Phase} </p> `

         )
        
        diss.innerHTML = rends
        
        holderfunc(data)
       
   
   function newfunc (data){
     return data.slice(currentPage * perPage, (currentPage * perPage) + perPage)
   }
 
        
    }


    function holderfunc(data){

       const buttons = document.querySelectorAll(".dhiss");
      const secondarray = [];
    


       buttons.forEach((button) => {
          button.addEventListener("click", (e) => {
             const  holdheres = [];
         
            secondarray.push(1);
              const savehere = e.target.dataset.ids;
            
               holdheres.push(savehere)
             
                 //filtrerar
              const testss = data.filter((params) => params.id === parseInt(holdheres));
               
          
              if (secondarray.length >= 6){
                alert("shit too many ")
              }else {
              const addingstyle =  testss.map((item)=>`<p>${item.Name}</p> <img src ="${item.img}">`)
              getdishehehehe.innerHTML += addingstyle
          

             }
               
            
         
        
             
                 console.log(secondarray.length)
         
        
              
          });
         
        
         
     
  
     
       });



     }
   
 }

getdatas()

