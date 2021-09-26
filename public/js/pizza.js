
function printCatalog() {
    fetch('catalog.json')
        .then(res => res.json())
        .then(catalog => {
            initrender(catalog)
        })
}

function initrender(catalog) {
    renderPizzas(catalog);
    renderPizzaPrice(catalog);
}
function renderPizzas(catalog) {
    var myPizzas = document.querySelector('.pizzas');
    for(var i = 0; i < catalog.length; i++) {
        var myPizza = document.createElement('ul');
        var listItem = document.createElement('li');
        listItem.innerHTML = '</br></br><p><strong>' + catalog[i].name + '</strong></p></br></br>';
        myPizza.appendChild(listItem);
        myPizzas.appendChild(myPizza);
        renderPizzaIngredients(catalog[i].ingredients, listItem, catalog[i].id)
    }
}

function renderPizzaIngredients(ingredients, myPizza, pizzaId) {
    var listIngredients = document.createElement('ul');
    for (var i = 0; i < ingredients.length; i++) {
        var listItem = document.createElement('li');
        var labelIngredient = document.createElement('label');
        var spanIngredient = document.createElement('span');
        var inputIngredient = document.createElement('input');
        inputIngredient.type = 'checkbox';
        inputIngredient.value = ingredients[i].price;
        inputIngredient.name = ingredients[i].name;
        inputIngredient.className = 'ingredientPizza' + pizzaId;
        inputIngredient.addEventListener('click', function () {
            renderPrice(pizzaId);
        });
        spanIngredient.innerHTML = ' ' + ingredients[i].name + ' ' + ingredients[i].price + ' eur';
        labelIngredient.appendChild(inputIngredient);
        listItem.appendChild(labelIngredient);
        listItem.appendChild(spanIngredient);
        listIngredients.appendChild(listItem);
    }
    myPizza.appendChild(listIngredients);
}

function renderPizzaPrice(catalog) {
    var myPizzas = document.querySelector('.price h2');
    for(var i = 0; i < catalog.length; i++) {
        var myPizza = document.createElement('h3');
        var myPizzaList = document.createElement('ul');
        var price = document.createElement('strong');
        price.className = 'pizzaPrice' + catalog[i].id;
        price.style.visibility = 'hidden';
        var subTotal = document.createElement('p');
        subTotal.className = 'subTotal' + catalog[i].id;
        subTotal.className = 'subTotal' + catalog[i].id;
        subTotal.style.visibility = 'hidden';
        myPizza.className = 'pizzaPrice' + catalog[i].id;
        myPizza.innerHTML = '</br><p>' + catalog[i].name + '</p></br>';
        myPizza.style.visibility = 'hidden';
        myPizza.appendChild(myPizzaList);
        myPizza.appendChild(subTotal);
        myPizza.appendChild(price);
        myPizzas.appendChild(myPizza);
    }
}

function renderPrice(pizzaId) {
    const pizzaPrice = document.querySelector('.pizzaPrice' + pizzaId);
    const pizzaPriceList = document.querySelector('.pizzaPrice' + pizzaId + ' ul');
    const ingredientPizzas = document.querySelectorAll('.ingredientPizza' + pizzaId);
    const subTotal = document.querySelector('.subTotal' + pizzaId);
    const price = document.querySelector('.pizzaPrice' + pizzaId + ' strong');

    let pizzaPriceListText = '';
    let sum = 0;
    let factoryPercent = 50;
    let countSelectIngredient = 0;

    for(var i = 0; i < ingredientPizzas.length; i++) {
        countSelectIngredient++;
        if (ingredientPizzas[i].checked) {
            pizzaPriceListText += `<li>$${ingredientPizzas[i].value} ${ingredientPizzas[i].name}</li>`;
            sum += parseFloat(ingredientPizzas[i].value);
        };
    }
    sum += (sum * factoryPercent/ 100);
    if (countSelectIngredient > 0) {
        pizzaPrice.style.visibility = 'visible';
        pizzaPriceList.innerHTML = pizzaPriceListText;
        price.style.visibility = 'visible';
        price.innerHTML = `${sum}`;
        subTotal.style.visibility = 'visible';
        subTotal.innerHTML = `<br>Sub-Total<br>`;
    }
    else {
        pizzaPrice.style.visibility = 'hidden';
        pizzaPriceList.innerHTML = '';
        subTotal.style.visibility = 'hidden';
    }
    renderTotalPrice()
}

function renderTotalPrice() {
    const prices = document.querySelectorAll('.price strong');
    const total = document.querySelector('.totalGeneral');
    let sum = 0;

    for(var i = 0; i < prices.length; i++) {
        if (!prices[i].innerHTML == '') {
            sum += parseFloat(prices[i].innerText);
        }
    }
    total.innerHTML = `<br>Total: ${sum}<br>`
}
printCatalog();

