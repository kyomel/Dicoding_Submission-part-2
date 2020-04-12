const main = () => {
    const getZodiak = async (zodiak) => {
        console.log(zodiak)
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const url = 'https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=' + zodiak.nama + '&tanggal=' + zodiak.lahir
        fetch(url, options)
            .then(r => r.json())
            .then(data => console.log("hasil data : " + data))
            .catch(e => console.log(e))
    }

    const inputNama = document.querySelector("#inputNama");
    const inputLahir = document.querySelector("#inputLahir");
    const buttonTampil = document.querySelector("#buttonTampil");
    buttonTampil.addEventListener("click", function () {
        const data = {
            nama: inputNama.value,
            lahir: inputLahir.value
        };
        console.log("nama : " + data.nama)
        console.log("lahir : " + data.lahir)
        getZodiak(data)
    });

    // const removeZodiak = (nama) => {
    //     fetch(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=&tanggal/delete/${nama}`, {
    //         method: "DELETE",
    //         headers: {
    //         }
    //     })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(responseJson => {
    //         showResponseMessage(responseJson.message);
    //         getZodiak();      
    //     })
    //     .catch(error => {
    //         showResponseMessage(error);
    //     })
    // };

    // const renderAllZodiak = (data) => {
    //     const hasilZodiakElement = document.querySelector("#zodiakHasil");
    //     hasilZodiakElement.innerHTML = "";

    //     data.forEach(data => {
    //         hasilZodiakElement.innerHTML += `
    //             <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
    //                 <div class="card">
    //                     <div class="card-body">
    //                         <h5>Hello ${data.nama} ${data.lahir} zodiak kamu adalah ${data.zodiak}</h5>
    //                         <button type="button" class="btn btn-danger button-delete">Hapus</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    //     });

    //     const buttons = document.querySelectorAll(".button-delete");
    //     buttons.forEach(button => {
    //         button.addEventListener("click", event => {
    //             const nama = event.target.nama;
    //             removeZodiak(nama);
    //         })
    //     })
    // };


}
export default main;