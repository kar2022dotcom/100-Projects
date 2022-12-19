let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let colors = ['blue', 'grey', 'yellow', 'orange', 'pink', 'black', 'purple', 'red', 'green'];
    let randomNum = Math.floor(Math.random() * colors.length);
    console.log(colors[randomNum]);

    document.body.style.backgroundColor = `${colors[randomNum]}`;
    btn.style.color = `${colors[randomNum]}`
    btn.innerHTML = `${colors[randomNum]}`;
})