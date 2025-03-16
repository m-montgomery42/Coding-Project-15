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

     // Task 3: Removing Risk Items
     resolveButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop propagation to avoid triggering unintended actions
        riskDashboard.removeChild(riskCard); // Remove the risk card from the dashboard when the resolve button is clicked
    });

    // Task 4: Categorizing Risks by Level
    updateRiskCardStyle(riskCard, riskLevel); // Update the background color of the card based on the risk level

    // Append the elements to the risk card
    riskCard.appendChild(riskNameElem); // Append the risk name element to the risk card
    riskCard.appendChild(riskLevelElem); // Append the risk level element to the risk card
    riskCard.appendChild(departmentElem); // Append the department element to the risk card
    riskCard.appendChild(resolveButton); // Append the resolve button to the risk card

    riskDashboard.appendChild(riskCard); // Append the risk card to the dashboard
}

// Task 4: Categorizing Risks by Level
function updateRiskCardStyle(riskCard, riskLevel) {
    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "green"; // Set background to green for low
            break;
        case "medium":
            riskCard.style.backgroundColor = "yellow"; // Set background to yellow for medium
            break;
        case "high":
            riskCard.style.backgroundColor = "red"; // Set background to red for high
            break;
        default:
            riskCard.style.backgroundColor = "white"; // Default background color
    }
}

    // Task 2: Adding Risk Items Dynamically
document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const riskName = document.getElementById("riskName").value; // Get the risk name input
    const riskLevel = document.getElementById("riskLevel").value; // Get the risk level input
    const department = document.getElementById("department").value; // Get the department input

    addRiskItem(riskName, riskLevel, department); // Add the new risk item to the dashboard
    document.getElementById("riskForm").reset(); // Reset the form fields
});