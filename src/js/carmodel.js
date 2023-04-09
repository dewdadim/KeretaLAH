const a = "Automatic", m = "Manual";//car transmission
const g = "Gasoline", d = "Diesel", e = "Electric", h = "Hybrid";//car fuel

let model = ["Honda CRV", "Perodua Axia", "Toyota Vios", "Proton X90"];
let transmission = [a, m, a, a];
let seat = [5, 5, 5, 7];
let year = [2015, 2020, 2019, 2023];
let fuel = [g, g, g, g];


const tableContent = document.querySelectorAll(".content").item;

for(i=0; i < model.length; i++) {
    console.log(tableContent[i]);
}
