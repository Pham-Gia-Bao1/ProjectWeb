function validation() {
  if (document.Formfill.Email.value == "") {
    document.getElementById("result").innerHTML = "Enter your Email";
    return false;
  } else if (document.Formfill.Password.value == "") {
    document.getElementById("result").innerHTML = "Enter your Password";
    return false;
  } else if (document.Formfill.Con_password.value == "") {
    document.getElementById("result").innerHTML = "Enter Confirm Password";
    return false;
  } else if (
    document.Formfill.Password.value !== document.Formfill.Con_password.value
  ) {
    document.getElementById("result").innerHTML = "Passsword doesn't matched";
    return false;
  } else if (document.Formfill.Password.value.length <= 6) {
    document.getElementById("result").innerHTML = "Password must be 6-digits";
    return false;
  } else if (
    document.Formfill.Password.value == document.Formfill.Con_password.value
  ) {
    popup.classList.add("open-slize");
    return false;
  }
}

var popup = document.getElementById("popup");
function closeSlize() {
  popup.classList.remove("open-slize");
}

function hashPassword(password) {
  return CryptoJS.SHA256(password).toString();
}

function register(email, password) {
  const hashedPassword = hashPassword(password);

  const customer = {
    roleId: 2,
    phoneNumber: "",
    avata: "",
    address: "",
    name: "user",
    email: email,
    password: hashedPassword,
  };

  localStorage.setItem("customer", JSON.stringify(customer));

  fetch("https://coffee-web-api-dkrq.onrender.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("An error occurred while registering the customer.");
      }
    })
    .then(function (user) {
      const userInfo = JSON.stringify(user);
      localStorage.setItem("token", hashUserInfo(userInfo));
      alert("Registration successful! New customer ID: " + user.name);
      window.location.href = "/page/home/home.html";
    })
    .catch(function (error) {
      alert(error.message);
    });
}