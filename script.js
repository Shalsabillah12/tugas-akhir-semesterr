document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Perform form validation
    if (!validateForm()) {
      return;
    }
  
    // Extract form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
  
    this.reset();
  });
  
  function validateForm() {

    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
      }
    }
    return true;
  }
  