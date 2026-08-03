/* ==========================================
   BAYLOS SHOP V3
========================================== */

// =========================
// SLIDER
// =========================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

function nextSlide(){

    slideIndex++;

    if(slideIndex >= slides.length){
        slideIndex = 0;
    }

    showSlide(slideIndex);

}

setInterval(nextSlide,3000);


// =========================
// COUNTDOWN
// =========================

let jam = 12;
let menit = 59;
let detik = 59;

setInterval(()=>{

    detik--;

    if(detik < 0){
        detik = 59;
        menit--;
    }

    if(menit < 0){
        menit = 59;
        jam--;
    }

    if(jam < 0){
        jam = 12;
    }

    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

},1000);


// =========================
// KERANJANG
// =========================

let cart = 0;

const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".cart-btn").forEach((btn)=>{

    btn.addEventListener("click",()=>{

        cart++;

        cartCount.innerHTML = cart;

        alert("Produk berhasil masuk keranjang");

    });

});


// =========================
// BELI
// =========================

document.querySelectorAll(".buy-btn").forEach((btn)=>{

    btn.addEventListener("click",()=>{

        alert("Menu Checkout akan segera dibuka.");

    });

});


// =========================
// SEARCH
// =========================

const search = document.getElementById("searchInput");

search.addEventListener("keyup",()=>{

    let keyword = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach((card)=>{

        let nama = card.innerText.toLowerCase();

        if(nama.indexOf(keyword) > -1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});


// =========================
// WISHLIST
// =========================

document.querySelector(".icon-btn").addEventListener("click",()=>{

    alert("Produk ditambahkan ke Wishlist ❤️");

});

/* =====================================
   BAYLOS SHOP PART 5
===================================== */

/* ===== LOCAL STORAGE CART ===== */

let jumlahKeranjang = localStorage.getItem("cart");

if(jumlahKeranjang == null){
    jumlahKeranjang = 0;
}

cartCount.innerHTML = jumlahKeranjang;

document.querySelectorAll(".cart-btn").forEach(function(btn){

    btn.addEventListener("click",function(){

        jumlahKeranjang++;

        localStorage.setItem("cart", jumlahKeranjang);

        cartCount.innerHTML = jumlahKeranjang;

        tampilNotif("Produk berhasil ditambahkan.");

    });

});


/* ===== NOTIFIKASI ===== */

function tampilNotif(teks){

    let notif = document.createElement("div");

    notif.className="notif";

    notif.innerHTML=teks;

    document.body.appendChild(notif);

    setTimeout(function(){

        notif.classList.add("show");

    },100);

    setTimeout(function(){

        notif.remove();

    },2500);

}


/* ===== DARK MODE ===== */

let dark=document.createElement("button");

dark.innerHTML="🌙";

dark.className="dark-btn";

document.body.appendChild(dark);

dark.onclick=function(){

    document.body.classList.toggle("dark");

}


/* ===== BACK TO TOP ===== */

let topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.onscroll=function(){

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ===========================
WISHLIST
=========================== */

let wishlist = localStorage.getItem("wishlist");

if(wishlist == null){

wishlist = 0;

}

const tombolWishlist = document.querySelectorAll(".icon-btn");

tombolWishlist.forEach(function(btn){

btn.addEventListener("click",function(){

wishlist++;

localStorage.setItem("wishlist",wishlist);

tampilNotif("❤️ Ditambahkan ke Wishlist");

});

});
