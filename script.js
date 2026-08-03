// =========================
// Baylos Shop Script
// =========================

// Keranjang
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

updateCart();

// =========================
// Tambah Keranjang
// =========================

function addToCart(nama,harga){

cart.push({
nama:nama,
harga:harga
});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert(nama+" berhasil ditambahkan.");
}

// =========================
// Wishlist
// =========================

function addWishlist(nama){

wishlist.push(nama);

localStorage.setItem("wishlist",JSON.stringify(wishlist));

alert(nama+" ditambahkan ke Wishlist.");
}

// =========================
// Update Icon Keranjang
// =========================

function updateCart(){

const cartCount=document.getElementById("cart-count");

if(cartCount){

cartCount.innerHTML=cart.length;

}

}

// =========================
// Search
// =========================

const search=document.querySelector("input");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let card=document.querySelectorAll(".card");

card.forEach(function(item){

let text=item.innerText.toLowerCase();

if(text.indexOf(value)>-1){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

}

// =========================
// Login
// =========================

const login=document.querySelector(".login-btn");

if(login){

login.onclick=function(){

alert("Fitur Login akan segera hadir.");

}

}

// =========================
// Banner Slider
// =========================

let slide=0;

const slides=document.querySelectorAll(".slide");

if(slides.length>0){

setInterval(function(){

slides.forEach(function(img){

img.classList.remove("active");

});

slide++;

if(slide>=slides.length){

slide=0;

}

slides[slide].classList.add("active");

},3000);

}

// =========================
// Countdown Flash Sale
// =========================

const timer=document.getElementById("timer");

if(timer){

let total=13*60*60;

setInterval(function(){

let h=Math.floor(total/3600);

let m=Math.floor((total%3600)/60);

let s=total%60;

timer.innerHTML=
h.toString().padStart(2,"0")
+" : "+
m.toString().padStart(2,"0")
+" : "+
s.toString().padStart(2,"0");

if(total>0){

total--;

}

},1000);

}

// =========================
// Halaman Keranjang
// =========================

const cartList = document.getElementById("cart-list");

if(cartList){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(function(item){

total += item.harga;

cartList.innerHTML += `

<div class="card">

<h3>${item.nama}</h3>

<p>Rp ${item.harga.toLocaleString()}</p>

</div>

`;

});

document.getElementById("totalHarga").innerHTML =
"Total : Rp "+total.toLocaleString();

}

/* ===========================
LOGIN
=========================== */

const loginBtn = document.querySelector(".login-btn");

if(loginBtn){

loginBtn.onclick=function(){

document.getElementById("loginPopup").style.display="flex";

}

}

function tutupLogin(){

document.getElementById("loginPopup").style.display="none";

}

function prosesLogin(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user=="" || pass==""){

alert("Lengkapi data login.");

return;

}

localStorage.setItem("username",user);

alert("Selamat datang "+user);

tutupLogin();

}
