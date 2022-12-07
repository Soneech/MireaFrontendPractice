var productListDoc = document.querySelector(".product-list");
var basketListDoc = document.querySelector(".basket-list");
var filterListDoc = document.querySelector(".filter-list");
var totalPriceElem = document.querySelector(".total-price");

var basketBlock = document.querySelector(".basket-block");
var basketRect = basketBlock.getBoundingClientRect();

document.onselectstart = function() {
    return false;
}

var productList = [
    {name:"Витаминки", price: 50}, 
    {name: "Корм", price: 100}, 
    {name: "Наполнитель для клетки", price: 280}, 
    {name: "Лакомства", price: 195}, 
    {name: "Домик", price: 220}, 
    {name: "Миска", price: 135}
];

function setProductContent(element, item) {
    element.textContent = item.name + "; Цена: " + item.price + " р";
}

function showProducts(listDoc, list) {
    for (let i = 0; i < list.length; i++) {
        let element = document.createElement("li");
        setProductContent(element, list[i]);
        listDoc.appendChild(element);
    }
}
showProducts(productListDoc, productList);

var totalPrice = 0;
var basketList = [];

function getProductNumber() {
    let result = prompt("Введите номер товара");
    addProduct(result);
}

function addProduct(result) {
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

function dragProduct(event, product, index) {
    console.log(index);

    let copyProduct = product.cloneNode(true);
    copyProduct.style.position = "absolute";

    moveAt(event);
    document.body.appendChild(copyProduct);
    copyProduct.style.zIndex = 1000;

    function moveAt(event) {
        copyProduct.style.left = event.pageX - copyProduct.offsetWidth / 2 + 'px';
        copyProduct.style.top = event.pageY - copyProduct.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function(event) {
        moveAt(event);
    }

    copyProduct.onmouseup = function(event) {
        document.onmousemove = null;
        if (event.clientX >= basketRect.left && event.clientY >= basketRect.top) {
            addProduct(index + 1);
        }
        document.body.removeChild(copyProduct);
    }

    copyProduct.ondragstart = function() {
        return false;
    };
}


var pushButton = document.querySelector(".push");
pushButton.onclick = getProductNumber;


var productsElements = productListDoc.querySelectorAll("li");
for (let i = 0; i < productsElements.length; i++) {
    productsElements[i].onmousedown = function(event) {
        dragProduct(event, productsElements[i], i);
    };
}


function updateTotalPrice(summand) {
    totalPrice += summand;
    totalPriceElem.textContent = "Итог: " + totalPrice + "р";
}

function updateBasket(index) {
    let item = basketList[index];

    let element = document.createElement('li');
    setBasketContent(element, item);
    basketListDoc.appendChild(element);

    element.addEventListener('click', {handleEvent: replaceItem, oldItem: item, oldItemInd: index, elem: element});
}

function updateBasketItem(index) {
    let item = basketList[index];
    let elements = basketListDoc.querySelectorAll("li");
    let element = elements[index];
    setBasketContent(element, item);
}

function setBasketContent(element, item) {
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
var filterList;

function filterProductsList() {
    filterListDoc.innerHTML = "";

    let start = prompt("Введите начало диапазона цен");
    let end = prompt("Введите конец диапазона цен");
    try {
        filterList = productList.filter(item => (item.price >= start && item.price <= end));
        for (let i = 0; i < filterList.length; i++) {
            let element = document.createElement("li");
            setProductContent(element, filterList[i]);
            filterListDoc.appendChild(element);
        }
    } catch {
        alert("Некорректный ввод! Попробуйте ещё раз.");
    }
    
}

var filterButton = document.querySelector(".filter-btn");
filterButton.onclick = filterProductsList;

function compareProducts(a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price == b.price) {
        return 0;
    }
    return -1;
}

function sortFilterProducts() {
    filterList.sort(compareProducts);
    filterListDoc.innerHTML = "";
    showProducts(filterListDoc, filterList);
}

var sortButton = document.querySelector(".sort-btn");
sortButton.onclick = sortFilterProducts;
