const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


//UI objesini balatma

const ui = new UI();

//TÜM EVENETLERİ YÜKLEME

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "" ){
        //Hata
        ui.displayMessages("Tüm alanları doldurun!","danger");
    }
    else{
        //Yeni film
        const newFilm= new Film(title,director,url);

        ui.addFilmToUI(newFilm);//arayüze film ekleme
        ui.clearInputs(titleElement,directorElement,urlElement);
        ui.displayMessages("Başarıyla eklendi","success");

    }



    e.preventDefault();
}

function deleteFilm(e){
    

}