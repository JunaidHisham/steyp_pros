let store1 = [
    {
        name:"Apple",
        qty: 300,
        price:50,
    },
    {
        name:"Orange",
        qty: 100,
        price:30,
    },
    {
        name:"Mango",
        qty: 200,
        price:90,
    },
]

let store2 = [
    {
        name:"Apple",
        qty: 200,
        price:60,
    },
    {
        name:"Orange",
        qty: 100,
        price:30,
    },
    {
        name:"Mango",
        qty: 120,
        price:90,
    },
]

let store3 = [
    {
        name:"Apple",
        qty: 100,
        price:50,
    },
    {
        name:"Orange",
        qty: 110,
        price:40,
    },
    {
        name:"Mango",
        qty: 180,
        price:70,
    },
];

let store1_total = 0;
let store2_total = 0;
let store3_total = 0;

// find the value of total stocks

store1.forEach((product) => {
    store1_total += product.price * product.qty;
})
store2.forEach((product) => {
    store2_total += product.price * product.qty;
})
store3.forEach((product) => {
    store3_total += product.price * product.qty;
})

let total_cost = {
    store1:store1_total,
    store2:store2_total,
    store3:store3_total,
};

console.log(total_cost);

