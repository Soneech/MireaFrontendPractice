var productListDoc = document.querySelector(".product-list");
var basketListDoc = document.querySelector(".basket-list");
var totalPriceElem = document.querySelector(".total-price");

var productList = [
    {name:"Витаминки", price: 50}, 
    {name: "Корм", price: 100}, 
    {name: "Наполнитель для клетки", price: 280}, 
    {name: "Лакомства", price: 195}, 
    {name: "Домик", price: 220}, 
    {name: "Миска", price: 135}
];

function showProducts() {
    for (let i = 0; i < productList.length; i++) {
        let element = document.createElement('li');
        element.textContent = productList[i].name + "; Цена: " + productList[i].price + " р";
        productListDoc.appendChild(element);
    }
}
showProducts();

var totalPrice = 0;
var basketList = [];

function addProduct() {
    let result = prompt("Введите номер товара");
    let findIndex;

    let findRes = basketList.find(function(item, index, arr) {
        if (item.name == productList[result - 1].name) {
            findIndex = index;
            return item;
        }
    });
    if (findRes) {
        findRes.count++;
        updateTotalPrice(findRes.price);
        updateBasketItem(findIndex);
    }
    else {
        let newItem = {
            name: productList[result - 1].name,
            price: productList[result - 1].price,
            count: 1
        }

        basketList.push(newItem);
        updateTotalPrice(newItem.price);

        updateBasket(basketList.length - 1);
    }
}

var pushButton = document.querySelector(".push");
pushButton.onclick = addProduct;


function updateTotalPrice(summand) {
    totalPrice += summand;
    totalPriceElem.textContent = "Итог: " + totalPrice + "р";
}

function updateBasket(index) {
    let item = basketList[index];

    let element = document.createElement('li');
    setTextContent(element, item);
    basketListDoc.appendChild(element);

    element.addEventListener('click', {handleEvent: replaceItem, oldItem: item, oldItemInd: index, elem: element})
}

function updateBasketItem(index) {
    let item = basketList[index];
    let elements = basketListDoc.querySelectorAll("li");
    let element = elements[index];
    setTextContent(element, item);
}

function setTextContent(element, item) {
    element.textContent = item.name + "; Цена: " + item.price + " р; Кол-во: " + item.count 
        + "; Итоговая стоимость: " + item.price * item.count + "р";
}

function replaceItem(event) {
    let result = prompt("Хотите заменить товар? Введите новый номер");

    let newItem = productList[result - 1];
    let oldItem = basketList[this.oldItemInd];

    newItem.count = 1;
    updateTotalPrice(-(oldItem.price * oldItem.count) + newItem.price);

    basketList[this.oldItemInd] = newItem;
    updateBasketItem(this.oldItemInd);
}


function shiftItem() {
    let elem = basketList.shift();
    let elemDoc = basketListDoc.querySelector("li");
    basketListDoc.removeChild(elemDoc);

    updateTotalPrice(-(elem.price * elem.count));
}

var shiftButton = document.querySelector(".shift");
shiftButton.onclick = shiftItem;
