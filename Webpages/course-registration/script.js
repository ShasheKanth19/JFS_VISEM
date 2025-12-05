// Select all subject checkboxes
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");
let form = document.getElementById("registrationForm");

subjects.forEach(subject => {
    subject.addEventListener("change", () => {
        let total = 0;
        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });
        totalBox.value = total;
    });
});
form.addEventListener("submit", function(event) {
    event.preventDefault();

    let studentName = document.getElementById("stuname").value;
    let selectedSubjects = [];

    subjects.forEach(sub => {
        if (sub.checked) {
            selectedSubjects.push(sub.nextSibling.textContent.trim());
        }
    });

    let totalFee = totalBox.value;
    let message = "Student Name: " + studentName + "\n" +
                  "Selected Subjects:\n" + selectedSubjects.join("\n") + "\n" +
                  "Total Fee: $" + totalFee;

    alert(message);
});
