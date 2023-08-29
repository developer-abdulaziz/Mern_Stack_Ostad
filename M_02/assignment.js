 // 1) DOM Manipulation
 const button = document.getElementById('btnChange');
 const divContent = document.getElementById('createNewMessage');

 button.addEventListener('click', function(){
     divContent.innerHTML = 'creat manipulation for assignment module two';
 })




 /*================ 2) Click Counter =============*/
   // Get references to the button and paragraph elements
 const clickButton = document.getElementById("clickButton");
 const countDisplay = document.getElementById("countDisplay");

 // Attach the click event listener to the button
clickButton.addEventListener('click', handleClick);

let clickCount = 0;
function handleClick (){
 // Increment the click count
 clickCount++;
 countDisplay.textContent = 'click count: ' + clickCount;
}



/* ================ 3) Image Switcher ================*/
 // Get references to the buttons and the image element
 const button1 = document.getElementById("button1");
 const button2 = document.getElementById("button2");
 const imageElement = document.getElementById("imageElement");

 // Add click event listeners to the buttons
 button1.addEventListener("click", function() {
     imageElement.src = "image1.jpg";
     imageElement.alt = "Image 1";
 });

 button2.addEventListener("click", function() {
     imageElement.src = "image2.jpg";
     imageElement.alt = "Image 2";
 });


 /*================= 4) Ajax ==============*/
 function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users-list');
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = 'user';
        li.innerText = user.name;
        ul.appendChild(li);
    }
}    