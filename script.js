document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let dob = document.getElementById("dob").value;
        let age = document.getElementById("age").value;
        let gender = document.getElementById("gender").value;
        let password = document.getElementById("password").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value;

        // Validate form fields
        if (!firstname || !lastname || !dob || !age || !gender || !password || !email || !phone || !address) {
            alert("Please fill in all fields.");
            return;
        }

        // Insert data into the table
        let table = document.getElementById("userTable");

        if (!table) {
            createTable(); // Create table if it doesn't exist
            table = document.getElementById("userTable");
        }

        let row = table.insertRow(-1);
        row.insertCell(0).textContent = firstname;
        row.insertCell(1).textContent = lastname;
        row.insertCell(2).textContent = dob;
        row.insertCell(3).textContent = age;
        row.insertCell(4).textContent = gender;
        row.insertCell(5).textContent = email;
        row.insertCell(6).textContent = phone;
        row.insertCell(7).textContent = address;

        // Clear form after submission
        document.querySelector("form").reset();
        document.getElementById("age").value = ""; // Reset age field

        // Scroll to the table smoothly
        setTimeout(() => {
            document.getElementById("tableContainer").scrollIntoView({ behavior: "smooth" });
        }, 300);

        // Adjust page height dynamically
        document.body.style.height = "auto";
    });

    function createTable() {
        let container = document.createElement("div");
        container.id = "tableContainer";
        container.innerHTML = `
            <h2>Registered Users</h2>
            <table id="userTable">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </table>
        `;
        document.body.appendChild(container);
    }
});
