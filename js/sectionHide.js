document.getElementById('btn-donation').addEventListener('click',function(event){
    event.preventDefault();

     const donation = document.getElementById("btn-donation");
    donation.style.backgroundColor = '#B4F461';
    const history = document.getElementById("btn-history");
    history.style.backgroundColor = 'white';

    showSectionById('donate-section');

})

document.getElementById('btn-history').addEventListener('click',function(event){
    event.preventDefault();
    const history = document.getElementById("btn-history");
    history.style.backgroundColor = '#B4F461';
    const donation = document.getElementById("btn-donation");
    donation.style.backgroundColor = 'white';
    showSectionById('history-section');
})