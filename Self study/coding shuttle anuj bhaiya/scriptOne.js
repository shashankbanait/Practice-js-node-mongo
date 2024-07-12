let students = [
    {
        "id": 1,
        "name": "Alice",
        "favorite_color": "Blue"
    },
    {
        "id": 2,
        "name": "Bob",
        "favorite_color": "Green"
    },
    {
        "id": 3,
        "name": "Charlie",
        "favorite_color": "Red"
    },
    {
        "id": 4,
        "name": "Diana",
        "favorite_color": "Yellow"
    },
    {
        "id": 5,
        "name": "Eve",
        "favorite_color": "Purple"
    }
]

const names = students.map((curValue, index, array)=>{
    return `<li>${curValue.name}</li>`;
})

console.log(names);

const div = document.getElementById('container');
div.innerHTML = `<ul>${names.join('')}</ul>`