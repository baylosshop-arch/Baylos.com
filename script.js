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
