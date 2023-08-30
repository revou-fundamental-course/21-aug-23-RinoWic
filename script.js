document.addEventListener("DOMContentLoaded", function() {
    const namePlaceholder = document.getElementById("namePlaceholder");
    const nameInput = document.getElementById("name");
    const messageForm = document.getElementById("messageForm");
    const submittedTable = document.getElementById("submittedTable");
  
    nameInput.addEventListener("input", function() {
      namePlaceholder.textContent = nameInput.value;
    });
  
    messageForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = nameInput.value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.getElementById("gender").value;
      const message = document.getElementById("message").value;
      const currentTime = new Date().toLocaleTimeString();
  
      const newRow = submittedTable.insertRow();
      newRow.innerHTML = `
        <td>${currentTime}</td>
        <td>${name}</td>
        <td>${birthdate}</td>
        <td>${gender}</td>
        <td>${message}</td>
      `;
  
      messageForm.reset();
    });
  });
  