var cart = [];
var list = document.getElementById('list');
var text = "";
var html = "";
var total = 0;
var totalCount = document.querySelector("#setNumber");

function addItem(item) {
    var names = cart.map(item => item.name);
    var index = names.indexOf(item);
    console.log(index)
    if (index === -1) {
        cart.push({ name: item, count: 1 });
        totalCount.innerText = 1 + totla++;
    } else {
        cart = cart.map((item, idx) => {
            if (index == idx) {
                return ({ ...item, count: item.count + 1 });
            } else {
                return item;
            }
        })
        totalCount.inerText = 1 + totla++;
    }
    print();
}