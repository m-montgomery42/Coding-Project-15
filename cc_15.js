// Task 1: Creating the Base Structure
// Completed in the html file

// Task 2: Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Create a div for the risk card
    riskCard.classList.add("riskCard"); // Add the "riskCard" class to the div

    const riskNameElem = document.createElement("div"); // Create a div for the risk name
    const riskNameLabel = document.createElement("span"); // Create a span for the label
    riskNameLabel.classList.add("riskLabel"); // Add "riskLabel" class to make the label bold
    riskNameLabel.textContent = "Risk Name: "; // Set the label text
    riskNameElem.appendChild(riskNameLabel); // Append the label
    riskNameElem.appendChild(document.createTextNode(riskName)); // Append the risk name text

    const riskLevelElem = document.createElement("div"); // Create a div for the risk level
    const riskLevelLabel = document.createElement("span"); // Create a span for the label
    riskLevelLabel.classList.add("riskLabel"); // Add "riskLabel" class to make the label bold
    riskLevelLabel.textContent = "Risk Level: "; // Set the label text
    riskLevelElem.appendChild(riskLevelLabel); // Append the label
    riskLevelElem.appendChild(document.createTextNode(riskLevel)); // Append the risk level text
    riskLevelElem.classList.add("riskLevelText"); // Add the "riskLevelText" class to the risk level element

    const departmentElem = document.createElement("div"); // Create a div for the department
    const departmentLabel = document.createElement("span"); // Create a span for the label
    departmentLabel.classList.add("riskLabel"); // Add "riskLabel" class to make the label bold
    departmentLabel.textContent = "Department: "; // Set the label text
    departmentElem.appendChild(departmentLabel); // Append the label
    departmentElem.appendChild(document.createTextNode(department)); // Append the department text

    const resolveButton = document.createElement("button"); // Create the resolve button
    resolveButton.classList.add("resolveButton"); // Add the "resolveButton" class to the button
    resolveButton.textContent = "Resolve"; // Set the button text to "Resolve"

    // Task 2: Adding Risk Items Dynamically
document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const riskName = document.getElementById("riskName").value; // Get the risk name input
    const riskLevel = document.getElementById("riskLevel").value; // Get the risk level input
    const department = document.getElementById("department").value; // Get the department input

    addRiskItem(riskName, riskLevel, department); // Add the new risk item to the dashboard
    document.getElementById("riskForm").reset(); // Reset the form fields
});