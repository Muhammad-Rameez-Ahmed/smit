// program 1
// function parent(num1) {
//     return function (num2) {
//         console.log(num1 + num2);
//     }
// }
// first = parent(5)
// first(2)


// program 2
// const array = [2, 4, 6, 8, 10]
// function recursive(num) {

//     for (i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             console.log(`${array[i]} present`);
//         } else {
//             recursive()
//         }

//     }




// }
// recursive(6)


// function recursive(num) {
//     const array = [2, 4, 6, 8, 10]
//     if (array.length === 0) {
//         return false
//     } else {
//         for (i = 0; i < array.length; i++) {
//             if (array[i] === num) {
//                 console.log(`${array[i]} present`);
//             }

//         }
//         return recursive(array.slice(1), 8)
//     }
// }
// recursive(8)





// program 6
// function storage(key, value) {
//     localStorage.setItem(key, value)


// }
// storage("name", JSON.stringify({ name1: "raees", name2: "rameez" }))

// program 7
// function getObject(key) {
//     let data = localStorage.getItem(key)
//     console.log(data);
// }
// getObject("name")

// program 8
// function takeObj(myObj) {
//     localStorage.setItem("info", myObj)
// }
// takeObj(JSON.stringify({
//     name: "rameez",
//     age: 22,
//     gender: "M"
// }))

// program 3
// function newPra(paragraph) {
//     let para = document.querySelector("p")
//     para.innerHTML = paragraph;
// }
// newPra("hello i am a developer")



// program4
// function listItem(text) {
//     let html = document.getElementById("list").innerHTML = `<li>${text}</li>`
// }
// listItem("wash")



// program5
// let element = document.querySelector("p")
// function changeColor(element, backgroundColor) {

//     element.style.backgroundColor = backgroundColor
//     element.style.color = "#fff"
// }
// changeColor(element, "#000")
const movies = [
    { title: "Movie 1", genre: "Action", rating: 8, year: 2000 },
    { title: "Movie 2", genre: "Comedy", rating: 7, year: 1999 },
    { title: "Movie 3", genre: "Drama", rating: 9, year: 2005 },
    // Add more movies as needed
];

const recommendationsList = document.getElementById("recommendations");
const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const genreInput = document.getElementById("genre").value;
    const ratingInput = document.getElementById("rating").value;
    const yearInput = document.getElementById("year").value;

    // Recommendation logic goes here

    // Example recommendation:
    const recommendation = movies[0].title;

    // Add recommendation to the DOM
    const recommendationItem = document.createElement("li");
    const recommendationText = document.createTextNode(recommendation);
    recommendationItem.appendChild(recommendationText);
    recommendationsList.appendChild(recommendationItem);
});
