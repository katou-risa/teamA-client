const json = [
    { "_id": 1, "B": 100 },
    { "_id": 2, "A": 200 }
];

let array = [];
json.forEach(record => {
    let data = [];
    Object.values(record).forEach(field => {
        data.push(field);
    });
    array.push(data);
});
console.log(array);