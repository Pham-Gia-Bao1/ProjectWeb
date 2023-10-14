function fetchCustomers() {
  fetch('http://localhost:3000/customer')
    .then(response => response.json())
    .then(data => {
      var listCustomerTable = document.getElementById('list_customer');
      var tableBody = listCustomerTable.tBodies[0];
      tableBody.innerHTML = ""; // Clear the table body

      data.forEach(customer => {
        var row = tableBody.insertRow();
        row.innerHTML = `
          <td>${customer.id}</td>
          <td>${customer.name}</td>
          <td>${customer.email}</td>
          <td>${customer.phoneNumber}</td>
          <td>${customer.address}</td>
          <td>
            <button onclick="update_customer(${customer.id})">Update</button>
            <button onclick="delete_customer(${customer.id})">Delete</button>
          </td>
        `;
      });
    });
}

fetchCustomers();

const customerForm = document.getElementById("cusForm");
customerForm.addEventListener("submit", createOrUpdateCustomer);

function createOrUpdateCustomer(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const roleId = document.getElementById("role_id").value;
  const address = document.getElementById("address").value;

  const customer = {
    name: name,
    password: password,
    phoneNumber: phone,
    email: email,
    roleId: roleId,
    address: address
  };

  const customerId = localStorage.getItem("customer_id");

  if (customerId) {
    // Update existing customer
    fetch(`http://localhost:3000/customer/${customerId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(response => {
        if (response.ok) {
          console.log("Customer updated successfully!");
          localStorage.removeItem("customer_id"); // Remove the stored customer ID
        } else {
          console.log("Failed to update customer.");
        }
        fetchCustomers(); // Refresh the customer table
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    // Create new customer
    fetch("http://localhost:3000/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(response => {
        if (response.ok) {
          console.log("Customer added successfully!");
          fetchCustomers(); // Refresh the customer table
        } else {
          console.log("Failed to add customer.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  // Reset the form
  customerForm.reset();
}

function delete_customer(id) {
  fetch(`http://localhost:3000/customer/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      fetchCustomers(); // Refresh the customer table
      alert("Delete success");
    })
    .catch(() => {
      alert("Delete fail");
    });
}

function update_customer(id) {
  fetch(`http://localhost:3000/customer/${id}`)
    .then(response => response.json())
    .then(customer => {
      document.getElementById("name").value = customer.name;
      document.getElementById("password").value = customer.password;
      document.getElementById("phone").value = customer.phoneNumber;
      document.getElementById("email").value = customer.email;
      document.getElementById("role_id").value = customer.role_id;
      document.getElementById("address").value = customer.address;

      localStorage.setItem("customer_id", id); // Store the customer ID

      var modal = new bootstrap.Modal(document.getElementById("myModal"));
      modal.show();
    })
    .catch(() => {
      alert("Error retrieving customer data");
    });
}