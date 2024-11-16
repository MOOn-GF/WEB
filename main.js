// fetch("./main.js")
// .then(response => response.json())
// .then(data=>{
//     console.log(data)
// })

// let mas =[{id: 1, name: "Шоколадный батончик", price: 50, ingredients: ["шоколад", "молоко", "орехи"]}]
// $("mas").map

// $.ajax({
//     type: "GET",
//     url: "./json/png.json",
//     data: "data",
//     dataType: "json",
//     success: function (start) {
//         start.map
//     }
// });

$.ajax({
    type: "GET",
    url: "./json/png.json",
    dataType: "json",
    success: function (data) {
     
        const cards = document.querySelectorAll(" .card");

        
        data.slice(0, cards.length).map((item, index) => {
            cards[index].innerHTML = `
          
                <img class="img" src=${item.img} alt="#"></img>
                <h3 class="list__name">${item.name}</h3>
                <p>Цена: ${item.price} руб.</p>
                <p>Ингредиенты: ${item.ingredients.join(", ")}</p>
            `;
        });
    },
    error: function (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
});

