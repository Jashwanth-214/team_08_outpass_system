// login.html
function loginUser() {
  const studentName = document.getElementById("studentName").value;
  const enroll = document.getElementById("enroll").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  localStorage.setItem("studentInfo", JSON.stringify({ studentName, enroll, phone, course }));

  window.location.href = "request.html";
  return false;
}

// request.html
function submitRequest(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const reason = document.getElementById("reason").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  localStorage.setItem("outpassData", JSON.stringify({ name, reason, date, time }));
  window.location.href = "confirmation.html";
}

// confirmation.html
window.onload = () => {
  if (window.location.pathname.includes("confirmation.html")) {
    const outpassData = JSON.parse(localStorage.getItem("outpassData"));
    const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));
    const details = document.getElementById("details");

    if (outpassData && studentInfo) {
      details.innerHTML = `
        <p><strong>Name:</strong> ${outpassData.name}</p>
        <p><strong>Reason:</strong> ${outpassData.reason}</p>
        <p><strong>Date:</strong> ${outpassData.date}</p>
        <p><strong>Time:</strong> ${outpassData.time}</p>
        <hr>
        <p><strong>Enrollment No:</strong> ${studentInfo.enroll}</p>
        <p><strong>Phone:</strong> ${studentInfo.phone}</p>
        <p><strong>Course:</strong> ${studentInfo.course}</p>
      `;
    } else {
      details.innerHTML = "<p>No request data found.</p>";
    }
  }
};

  
