const data = "assets/Wisata.json";
const wisata = document.querySelector('#wisata');
const penginapan = document.querySelector('#penginapan');
const getWisata = () => {
    fetch(data)
        .then(response =>{
            return response.json();
        }).then(responseJson => {
            wisata.innerHTML = "";
            let wst = responseJson.wisata;
            wst.forEach(item => {
                wisata.innerHTML += `
                <div class="card">
                <h4>${item.name}</h4>
                <img src="${item.img}" alt="">
                <p>${item.desc}</p>
                </div>
                `
            });
        })
};
const getPenginapan = () => {
    fetch(data)
        .then(response =>{
            return response.json();
        }).then(responseJson => {
            penginapan.innerHTML = "";
            let pen = responseJson.penginapan;
            pen.forEach(item => {
                penginapan.innerHTML += `
                <div class="card">
                <h4>${item.name}</h4>
                <img src="${item.img}" alt="">
                <p>${item.desc}</p>
                </div>
                `
            });
        })
};
    
document.addEventListener('DOMContentLoaded', getWisata);
document.addEventListener('DOMContentLoaded', getPenginapan);