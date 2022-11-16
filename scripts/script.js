var contrastBtn = document.querySelector('.contrastknop');
var menuFotos = document.querySelectorAll("header nav ul li img");
var footerList = document.querySelectorAll("footer nav ul:not(:first-child) li");
var footerImg = document.querySelectorAll("footer nav ul li img");
var headerList = document.querySelectorAll("nav ul li a");
var imageContrast = document.querySelectorAll("body section ul li");
var contrastTekstBodyHeaderTwee = document.querySelectorAll("body section ul li h2");
var contrastTekstBodyHeaderDrie = document.querySelectorAll("body section ul li h3");
var contrastTekstBodyHeaderVier = document.querySelectorAll("body section ul li a");
var contrastBodyImage = document.querySelectorAll("body section ul li img");
const btn = document.querySelector('.contrastknop');


console.log(footerList);

contrastBtn.addEventListener('click', function() {

    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 4000);
  
 
    menuFotos.forEach(function(foto){
        foto.classList.toggle('menufoto1');
    })

    footerList.forEach(function(list){
        list.classList.toggle('footercontrast');
    })

    footerImg.forEach(function(img){
        img.classList.toggle('contrastIcoon');
    })

    headerList.forEach(function(headerList){
        headerList.classList.toggle('contrastsubtekst');
    })

    imageContrast.forEach(function(imgContrast){
        imgContrast.classList.toggle('contrastlijst');
    })

    contrastTekstBodyHeaderTwee.forEach(function(hTwee){
        hTwee.classList.toggle('contrasttekst');
    })

    contrastTekstBodyHeaderDrie.forEach(function(hDrie){
        hDrie.classList.toggle('contrasttekst');
    })

    contrastTekstBodyHeaderVier.forEach(function(hVier){
        hVier.classList.toggle('contrasttekst');
    })

    contrastBodyImage.forEach(function(bodyImg){
        bodyImg.classList.toggle('fotocontrast');
    })

    console.log("nu gaat de contrast veranderen");
});

