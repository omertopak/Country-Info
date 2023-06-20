const select = document.querySelector("#select")
const newDiv = document.querySelector("#country")


fetch("https://restcountries.com/v3.1/all")
.then((response)=>{
    if(!response.ok){
        console.log("error");
    }else{
        return response.json()
    }
})

    .then((countries)=>{
        console.log(countries);
        namesToSelection(countries)
        selectedOnTheScreen(countries)
    })



//option yakalama
const selectedOnTheScreen = (allCountries) =>{
select.addEventListener("change",()=>{
    const text = select.options[select.selectedIndex].text;
    console.log(text);
    //const value = select.value
    //console.log(value);
    allCountries.forEach(country => {
        const countryName = country.name.common
        console.log(countryName);
        if(text==countryName){
            countryInfo(country)
        }
    })
  
})

}

const countryInfo = (choosenCountry)=>{
    const {capital,continents,flags,maps,name,borders,languages} = choosenCountry
    const namee = name.common
    const flagg = flags.png
    const map = maps.googleMaps
    const omap = maps.openStreetMaps
    const arr = []
    console.log(borders);

    if(borders){
    borders.forEach((a)=>{
        arr.push(a)
        console.log(arr);
    })
    }else{
        arr[0]="island Country"
    }

    console.log(languages);
    
    const arr2 = (Object.values(languages));
    console.log(arr2);
    

    // console.log(namee);
    // console.log(flagg);
    // console.log(map);
    // console.log(omap);
    // console.log(capital);
    // console.log(continents);
    //flag.png
    //maps.googleMaps
    newDiv.innerHTML= `
    <img class="card-img-top border" src="${flagg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><i class="fa-solid fa-hashtag"></i> ${namee}</h5>
      <p class="card-text"><i class="fa-solid fa-bullseye"></i> ${capital}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa-solid fa-earth-asia"></i> Continent: ${continents}</li>
      <li class="list-group-item"><i class="fa-solid fa-globe"></i> Borders: ${arr}</li>
      <li class="list-group-item"><i class="fa-solid fa-language"></i> Languages: ${arr2}</li>
    </ul>
    <div class="card-body">
     <ul class="list-group list-group-flush">
      <li class="list-group-item"><a href="${map}" class="card-link"><i class="fa-solid fa-location-dot"></i> Google Maps</a></li>
      <li class="list-group-item"><a href="${omap}" class="card-link"><i class="fa-solid fa-location-dot"></i> Open Street Maps</a></li>
    </ul>
    </div>
    `


}





const namesToSelection = (countries) =>{
    countries.forEach(country => {
        const countryName = country.name.common
        //console.log(countryName);
        countryOptions(countryName)
    });
    
}

//selections push to select-option
const countryOptions = (name)=>{
    select.innerHTML += `<option value="">${name}</option>`
    
}





