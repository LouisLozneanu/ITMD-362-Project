// JavaScript to handle form interactions and progress bar updates

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('signup-form');
  const progressBar = document.querySelector('.progress');
  
  // Update progress bar based on form input fields being filled out
  form.addEventListener('input', function() {
    const totalFields = form.querySelectorAll('input').length;
    let filledFields = 0;

    form.querySelectorAll('input').forEach(function(input) {
      if (input.value.trim() !== '') {
        filledFields++;
      }
    });