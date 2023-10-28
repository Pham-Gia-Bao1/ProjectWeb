function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("opacity").style.display = "block";
  document.getElementById("open_sideBar").style.opacity = 0;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("opacity").style.display = "none";
  document.getElementById("open_sideBar").style.opacity = 1;
}
fetch("http://localhost:3000/products")
  .then((res) => res.json())
  .then((data) => {
    const productList = data;
    const productHTML = productList.map((product) => {
      return `
            <div class="product">
    <a target="_self" id="card" href="/page/product/ProductDetail/ProductDetail.html?id=${product.id}">
        <p id="evaluate1">${product.productReviews}<i class="material-symbols-outlined">star</i></p>
        <img id="main_img" src="${product.image1}" alt="${product.name}">
        <h2>${product.name}</h2>
        <div class="price">
            <p>${product.newPrice} VND</p>
            <p>${product.oldPrice} VND</p>
        </div>
    </a>
    <div class="descriptiom_and_btn">
        <p>${product.description}</p>
        <div class="icon-container">
       
        <button class="icon-btn" id="btn_favorite">
          <i class="fas fa-heart"></i>
      </button>
            <button id="btn_buy" onclick="redirectToOrderPage(${product.id})">
                <i id="icon_cart" class="fas fa-shopping-cart"></i>Buy
            </button>
        </div>
    </div>
</div>
                    `;
    });

    document.getElementById("product").innerHTML = `
                    <div class="product-container">
                        ${productHTML.join("")}
                    </div>
                `;
    document.getElementById("product1").innerHTML = `
                    <div class="product-container">
                        ${productHTML.join("")}
                    </div>
                `;
    document.getElementById("card_top").innerHTML = `
                    <div class="product-container_top">
                        ${productHTML.join("")}
                    </div>
                `;
  });
const menuIcon = document.querySelector(".navbar_menu-icon");
const navList = document.querySelector(".navbar__ul");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navList.classList.toggle("active");
});

const roleId = localStorage.getItem("roleId");

if (roleId === "2") {
  const managementElement = document.querySelector(".dropdown");
  const loginElement = document.querySelector(
    ".navbar__li--mobile a[href='/page/login/login.html']"
  );
  const signUpElement = document.querySelector(".navbar__li--mobile .border2");

  if (managementElement) {
    managementElement.style.display = "none";
  }

  if (loginElement) {
    loginElement.style.display = "none";
  }

  if (signUpElement) {
    signUpElement.style.display = "none";
  }
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("roleId");

localStorage.removeItem("userId");
