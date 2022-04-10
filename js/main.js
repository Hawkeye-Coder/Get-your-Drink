//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM



document.querySelector('button').addEventListener('click', getInput)
document.querySelector('.button').addEventListener('click', getRandom)
function getInput() {
    let inputTxt = document.querySelector('input').value
    inputTxt.trim()
    if (inputTxt.includes(" ")) {
        inputTxt = inputTxt.replaceAll(" ", "+")

    }
    let myNode = document.getElementById("container");
    myNode.innerHTML = '';
    myNode = document.getElementById("ingredients");
    myNode.innerHTML = '';
    console.log(inputTxt)
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputTxt
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerHTML = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('#instruction').innerHTML = data.drinks[0].strInstructions
            var arr1 = Object.entries(data.drinks[0])
            for (i = 17; i < 32; i++) {
                if(arr1[i][1]== null){
                    break;
                }
                let p = document.createElement("li")
                console.log(p)
                p.innerHTML = arr1[i][1]
                document.getElementById('ingredients').appendChild(p);
            }
            var arr = []
            data.drinks.forEach(element => {
                let img = new Image(200, 200)
                img.className = " removable"
                img.scr = element.strDrinkThumb
                img.alt = element.strDrink
                arr.push(img)
            });
            console.log(arr)
            arr.forEach(element => {
                let img = document.createElement("img");
                img.src = element.scr;
                document.getElementById('container').appendChild(img);
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
function getRandom() {
    let myNode = document.getElementById("container");
    myNode.innerHTML = '';
    myNode = document.getElementById("ingredients");
    myNode.innerHTML = '';
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerHTML = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('#instruction').innerHTML = data.drinks[0].strInstructions

            var arr1 = Object.entries(data.drinks[0])
            for (i = 17; i < 32; i++) {
                if(arr1[i][1]== null){
                    break;
                }
                let p = document.createElement("li")
                console.log(p)
                p.innerHTML = arr1[i][1]
                document.getElementById('ingredients').appendChild(p);
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}