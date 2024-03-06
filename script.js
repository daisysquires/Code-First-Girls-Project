

function displayValues(event) {
    // Retrieve form values
    var name = document.getElementById('inputName').value;

    var time = document.getElementById('inputStartTimeHour').value;

    var timemin = document.getElementById('inputStartTimeMinute').value;

    var date = document.getElementById('inputDate').value;

    var email = document.getElementById('inputEmail').value;

    // var displayDiv = document.getElementById('displayValues');

    //     displayDiv.innerHTML = `<ul> <li><strong> Name: </strong>  ${name}  </li> <li><strong> Time: </strong>  ${time} : ${timemin}  </li></ul>`  
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("time", time);
    sessionStorage.setItem("timemin", timemin);
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("email", email);

    
    // Redirect to another page
  window.location.href = "submitpage.html"

}




