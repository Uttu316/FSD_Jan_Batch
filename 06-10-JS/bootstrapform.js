
/*
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

<!-- Write your code here -->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

<div class="contianer m-4 ">
    <h1 class="text-center">Newton Forms</h1>
    <form>
<div class="mb-3">
 <div class="form-floating mb-3">
  <input required type="text" class="form-control" id="username-input" placeholder="UserName">
  <label for="username-input">Username</label>
</div>
<div class="input-group mb-3">
  <input required type="email" id="email-handler-input" class="form-control" placeholder="Email handler" aria-label="Username">
  <span class="input-group-text">@</span>
  <input required type="text" id="server-input" class="form-control" placeholder="Server" aria-label="Server">
</div>
<div class="mb-3">
  <label for="password-input" class="form-label">Password</label>
  <input required type="password" class="form-control" id="password-input" placeholder="Password...">
</div>
<div class="mb-3">
  <label for="college-input" class="form-label">Select your college name.</label>
<input required class="form-control" list="collge-options" id="college-input" placeholder="Type to search...">
<datalist id="collge-options">
  <option value="NIT">
  <option value="BITS">
  <option value="IIT">
  <option value="IIIT">
  <option value="Others">
</datalist>
</div>
  <div class="form-check form-switch mb-3">
  <input required class="form-check-input" type="checkbox" role="switch" id="conditions-input" >
  <label class="form-check-label" for="conditions-input">Accept all terms and conditions</label>
</div>
</div>
<div  class="progress mb-3" role="progressbar" >
  <div id="progress-bar-new" class="progress-bar" style="width: 0%"></div>
</div>
<div class="text-center">
   <button disabled id="submit-button" type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
</div>

*/
__________________________


const form = document.querySelector('form')
var formValues = {};

form.addEventListener('change',function(e){
    const id = e.target.id 
      if(id==='conditions-input'){
        var value = e.target.checked;
      }else{
        var value = e.target.value;
      }
       formValues[id] = value;

    // let filledInputs = 0;
    // for(let key in formValues){
    //     const inputValue =  formValues[key];
    //     if(inputValue){
    //     filledInputs+=1;
    //     }
    // }

    const filledInputs = Object.values(formValues).reduce((acc,inputValue)=>{
        if(inputValue){
            return acc+1
        }else{
            return acc
        }
    },0)
    document.getElementById("progress-bar-new").style =
            "width: " + (filledInputs * 100) / 6 + "%";
    console.log(filledInputs)

    document.getElementById("submit-button").disabled = filledInputs!==6;

})