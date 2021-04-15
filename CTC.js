let grabTheButton = document.querySelector('.btn');

let grabTheLine = document.querySelector('#input');

grabTheButton.addEventListener('click', function () {
    
    input.select();
    document.execCommand('copy');
    alert('DONE');

})

