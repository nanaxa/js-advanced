/*const goods = [
    {
        title: "Shirt",
        option: "Lorem ipsum dolor sit amet.",
        price: 150
    },
    {
        title: "Socks",
        option: "Lorem ipsum dolor sit amet.",
        price: 50
    },
    {
        title: "Jacket",
        option: "Lorem ipsum dolor sit amet.",
        price: 350
    },
    {
        title: "Shoes",
        option: "Lorem ipsum dolor sit amet.",
        price: 250
    },
    {
        title: "Shirt Wide",
        option: "Lorem ipsum dolor sit amet.",
        price: 150
    },
    {
        title: "Cap",
        option: "Lorem ipsum dolor sit amet.",
        price: 50
    },
    {
        title: "Sneakers",
        option: "Lorem ipsum dolor sit amet.",
        price: 350
    },
    {
        title: "Bra",
        option: "Lorem ipsum dolor sit amet.",
        price: 250
    },
    {
        title: "Trousers",
        option: "Lorem ipsum dolor sit amet.",
        price: 232
    }
]

const renderGoodsItem = (title, option, price) => {
    return `<div class="goods-item">
    <h3>${title}</h3>
    <img src="../img/t-shirt.png" title="Футболка с надписью поехали" alt="logo" height="219" width="160">
    <p>Характеристика<br> ${option}</p>
    <p>Цена ${price} рублей</p>
     <a href="#" title="Добавить в корзину" onclick="add_to_cart">Купить</a>
  </div>`;
}

const renderGoodsList = (list) => {
    const goodsList = list.map(item =>
        renderGoodsItem(item.title, item.option, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods)
*/

// Объявляем новый класс
class GoodsItem {
    constructor(title="Без имени", option="Нет в продаже", price="Последняя  1000$") {
        this.title = title;
        this.option = option;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
    <h3>${this.title}</h3>
    <img src="../img/t-shirt.png" title="Футболка с надписью поехали" alt="logo" height="219" width="160">
    <p>Характеристика<br> ${this.option}</p>
    <p>Цена ${this.price} рублей</p>
     <a href="#" title="Добавить в корзину" onclick="add_to_cart">Купить</a>
  </div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods()  {
        this.goods = [
        {
        title: "Shirt",
        option: "Lorem ipsum dolor sit amet.",
        price: 150
    },
    {
        
     
    },
    {
        title: "Jacket",
        option: "Lorem ipsum dolor sit amet.",
        price: 350
    },
    {
        title: "Shoes",
        option: "Lorem ipsum dolor sit amet.",
        price: 250
    },
    {
        title: "Shirt Wide",
        option: "Lorem ipsum dolor sit amet.",
        price: 150
    },
    {
        title: "Cap",
        option: "Lorem ipsum dolor sit amet.",
        price: 50
    },
    {
        title: "Sneakers",
        option: "Lorem ipsum dolor sit amet.",
        price: 350
    },
    {
        title: "Bra",
        option: "Lorem ipsum dolor sit amet.",
        price: 250
    },
    {
        title: "Trousers",
        option: "Lorem ipsum dolor sit amet.",
        price: 232
    }
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.option, good.price)
        listHtml += goodItem.render();
          })
          document.querySelector('.goods-list').innerHTML = listHtml;
             }
}
const list = new GoodsList();
list.fetchGoods();
list.render();