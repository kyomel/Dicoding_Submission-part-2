const main = () => {
    const inputNama = document.querySelector("#inputNama");
    const buttonTampil = document.querySelector("#buttonTampil");
    const app = document.querySelector("#app");
    
    buttonTampil.addEventListener("click", async function () {
        const negara = inputNama.value;

        //perform fetch data
        const data = await getData(negara)

        //perform render to html
        render(data)
    });

   
    //fetch data
    const getData = async (negara) => {
        console.log(negara)
        let result = null
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const url = 'https://corona.lmao.ninja/v2/countries/'+negara
        await fetch(url, options)
            .then(r => r.json())
            .then(r => result = r)
            .catch(e => console.log(e))
        return result 
    }

    //render
    const render = (data)=>{
        const html = `
        <h1>Negara : ${data.country}</h1>
        <div class="alert alert-warning">Total Kasus : ${data.cases} | Kasus Hari Ini : ${data.todayCases}</div>
        <div class="alert alert-primary">Total dirawat : ${data.active}</div>
        <div class="alert alert-success">Total Sembuh : ${data.recovered}</div>
        <div class="alert alert-danger">Total Meninggal : ${data.deaths} | Meninggal Hari Ini : ${data.todayDeaths}</div>
        
        `

        app.innerHTML = html
    }


}
export default main;