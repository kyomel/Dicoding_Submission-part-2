const main =()=>{
    const baseUrl = "https://corona.lmao.ninja/v2/countries/Indonesia?yesterday=false&strict=true";
    const getCountries = async () => {
        try {
            const response = await fetch(`${baseUrl}`);
            const responseJson = await response.json();
            if(responseJson.error) {
               showResponseMessage(responseJson.message);
            } else {
               renderCountries(responseJson.country);
            }
          } catch(error) {
             showResponseMessage(error);
          }
    }
    

    const renderCountries = (country) => {
        const listCountryElement = document.querySelector("#listCountry");
        listCountryElement.innerHTML = ``;

        country.forEach(country => {
            listCountryElement.innerHTML += `
                <div class="col-6">
                    <div class="card-responsive">
                        <div class="card-body">
                            <h3>Negara (${country}) ${countryInfo.flag}</h3>
                            <h5>Total Kasus: (${cases})</h5>
                            <h5>Meninggal: (${deaths})</h5>
                            <h5>Sembuh: (${recovered})</h5>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const inputNegara = document.querySelector("#inputNegara");
    const buttonTampil = document.querySelector("#buttonTampil");

    buttonTampil.addEventListener("click", function () {
        const country = {
            negara: inputNegara.value
        };
        getCountries(country)
    });
}
export default main;