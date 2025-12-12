let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");
let form = document.getElementById("registrationForm");
let outputDiv = document.getElementById("output");

// ✅ Core logic: update total fee live on selecting/deselecting subjects
subjects.forEach(subject => {
  subject.addEventListener("change", () => {
    let total = 0;
    subjects.forEach(sub => {
      if (sub.checked) {
        total += Number(sub.value); // ensure numeric addition
      }
    });
    totalBox.value = total; // update input box value
  });
});

// ✅ Show details below form on submit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual submission

  let studentName = document.getElementById("stuname").value;
  let selectedSubjects = [];

  subjects.forEach(sub => {
    if (sub.checked) {
      selectedSubjects.push(sub.nextSibling.textContent.trim());
    }
  });

  let totalFee = totalBox.value;

  // Use <ol> for numbered list
  outputDiv.innerHTML = `
    <h3>Registration Details</h3>
    <p><strong>Student Name:</strong> ${studentName}</p>
    <p><strong>Selected Subjects:</strong></p>
    <ol>
      ${selectedSubjects.map(sub => `<li>${sub}</li>`).join("")}
    </ol>
    <p><strong>Total Fee:</strong> $${totalFee}</p>
  `;
});
