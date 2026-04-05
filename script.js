//

const loadBtn = document.getElementById('loadBtn');
const dataOutput = document.getElementById('data');

function loadData() {

  loadBtn.disabled =  true;
  loadBtn.textContent = 'Loading...';
  dataOutput.innerHTML = `<p class="status-message"> Fetching data...</p>`;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
      if(!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })

    // var Code: The closure has a live link to a variable that changes before the closure is used.
    //

    .then(function (data) {
      console.log("This is data befroe loop:", data);
      //outer function
      data.forEach(function (user) {
        // 'user' is a new variable for THIS specific turn
        setTimeout(function () {
          const userParagraph = document.createElement('p');
          userParagraph.className = 'user-item';
          userParagraph.textContent= user.name;

          dataOutput.appendChild(userParagraph);
          // This closure captures the 'user' variable
          console.log("rendered user via closure",user.name);
        }, 1000);
      });
      console.log("Loop initiated:", data);
    })
    .catch(function (err) {
      dataOutput.innerHTML = `<p class="error-message"> Error: ${err.message}</p>`;
      //handling network errors or parsing errors
      console.error(err);
    })
    .finally(function() {
      // Re-enable button after logic done
      loadBtn.disabled= false;
      loadBtn.textContent = 'Loaded Data'
      if(data) {
         dataOutput.innerHTML= "Below are User's names"
      } 
   

    });
    
}
if(loadBtn){
  loadBtn.addEventListener('click', loadData);
 }



 



