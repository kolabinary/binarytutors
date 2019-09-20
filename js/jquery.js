$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:1
        },

        800:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

// M.AutoInit();


  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn1');
var closeBtn = document.getElementById('closeBtn');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside (e) {
    if (e.target ==modal)
    {
    modal.style.display = 'none';}
}
