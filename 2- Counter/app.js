//Initial count
let count = 0;

//Select value and buttons

const value = document.querySelector('#value');

//Results in a NodeList some array methods may or may not work
const btns = document.querySelectorAll('.btn');

btns.forEach(function (item) {

    item.addEventListener('click', function(event){
        const styles = event.currentTarget.classList;

        if(styles.contains('decrease'))
        {
            count--;
        }

        else if(styles.contains('increase'))
        {
            count++;
        }

        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }

        if(count < 0){
            value.style.color = "red";
        }

        if(count == 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});

