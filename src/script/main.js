const main = () => {
    const insertZodiak = async (zodiak) => {
            try{
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(zodiak)
                }
         
                const response = await fetch(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=&tanggal/add`, options)
                const responseJson = await response.json();
                console.log(constresponsejson)
                showResponseMessage(responseJson.message);
                getZodiak();
            } catch(error) {
                showResponseMessage(error)
            }
        }

        const removeZodiak = (nama) => {
            fetch(`https://script.google.com/macros/exec?service=AKfycbw7gKzP-WYV2F5mc9RaR7yE3Ve1yN91Tjs91hp_jHSE02dSv9w&nama=&tanggal/delete/${nama}`, {
                method: "DELETE",
                headers: {
                }
            })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                showResponseMessage(responseJson.message);
                getZodiak();      
            })
            .catch(error => {
                showResponseMessage(error);
            })
        };
    
    
    const inputNama = document.querySelector("#inputNama");
    const inputTanggal = document.querySelector("#inputTanggal");
    const buttonTampil = document. querySelector("#buttonTampil");

    const renderAllZodiak = (data) => {
        const hasilZodiakElement = document.querySelector("#zodiakHasil");
        hasilZodiakElement.innerHTML = "";

        data.forEach(data => {
            hasilZodiakElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>Hello ${data.nama} ${data.lahir} zodiak kamu adalah ${data.zodiak}</h5>
                            <button type="button" class="btn btn-danger button-delete">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const nama = event.target.nama;
                removeZodiak(nama);
            })
        })
    };

    const onButtonClicked = function () {
        buttonTampil.addEventListener("click", function () {
            const data = {
                nama: inputNama.value,
                lahir: inputTanggal.value
            };
            console.log("Tes Saja bro!")
            insertZodiak(data)
        });
    }

}
export default main;