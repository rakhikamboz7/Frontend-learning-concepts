
//
function loadData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })

    // var Code: The closure has a live link to a variable that changes before the closure is used.
    // 
    
    .then(function(data) { 
      console.log("This is data befroe loop:", data)
       //outer function
      for (let i = 0; i < data.length; i++) {  
        console.log(i); 
          // loop starts i=0  -- closure is like a live link of a variable
        setTimeout(function() {  //inner function- using "data" from outer function 
          document.getElementById("data").innerHTML += "<p>" + data[i].name + "</p>";
         
        console.log("This is data befroe loop:", data)
        }, 1000);   
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}