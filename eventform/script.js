const typeSelect = document.querySelector("#type");
const extraInfoDiv = document.querySelector("#extraInfo");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const form = document.querySelector("#ticketForm");
const errorsDiv = document.querySelector("#errors");
const ticketResultDiv = document.querySelector("#ticketResult");

typeSelect.addEventListener("change", () => {
  const value = typeSelect.value;

  if (value === "student") {
    extraLabel.textContent = "Student I#";
    extraInput.value = "";
    extraInfoDiv.classList.remove("hidden");
  } else if (value === "guest") {
    extraLabel.textContent = "Access Code";
    extraInput.value = "";
    extraInfoDiv.classList.remove("hidden");
  } else {
    extraInfoDiv.classList.add("hidden");
    extraInput.value = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  errorsDiv.innerHTML = "";
  ticketResultDiv.innerHTML = "";

  const errors = [];

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const email = document.querySelector("#email").value.trim();
  const type = typeSelect.value;
  const eventDateValue = document.querySelector("#eventDate").value;
  const extra = extraInput.value.trim();

  if (!firstName) errors.push("First name is required.");
  if (!lastName) errors.push("Last name is required.");
  if (!email) errors.push("Email is required.");
  if (!type) errors.push("Please choose a type (student or guest).");

  if (!eventDateValue) {
    errors.push("Event date is required.");
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(eventDateValue);

    if (eventDate <= today) {
      errors.push("Event date must be later than today.");
    }
  }

  if (type === "student") {
    const studentPattern = /^\d{9}$/;
    if (!studentPattern.test(extra)) {
      errors.push("Student I# must be exactly 9 digits.");
    }
  } else if (type === "guest") {
    if (extra !== "EVENT131") {
      errors.push("Access Code must be EVENT131.");
    }
  }

  if (errors.length > 0) {
    errors.forEach((msg) => {
      const p = document.createElement("p");
      p.textContent = msg;
      errorsDiv.appendChild(p);
    });
    return;
  }

  ticketResultDiv.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDateValue}</p>
  `;

  form.reset();
  extraInfoDiv.classList.add("hidden");
});