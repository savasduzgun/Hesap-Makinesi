let sonuc = document.querySelector(".sonuc");
let optbtn = document.querySelectorAll(".optbtn");
let rkmbtn = document.querySelectorAll(".rkmbtn");
let clear = document.querySelector(".clear");
let esittir = document.querySelector(".esittir");

clear.onclick = function (element) {
    sonuc.value = "";
    location.reload();
};

rkmbtn.forEach(function(element){
    element.onclick = function(e){
        if (sonuc.value =="0"){
            sonuc.value = "";
        }
        sonuc.value += this.textContent;
    };
});
optbtn.forEach(function(element){
    element.onclick = function(e){
        sonuc.value += this.textContent;
    }
});
esittir.onclick = function(element){
        sonuc.value = eval(sonuc.value);
};



