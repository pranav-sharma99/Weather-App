const city= document.querySelector("#cityName");
const button= document.querySelector("#searchButton");

const cityName= document.querySelector("#city-name");
const data= document.querySelector("#output");

async function getData(city){
	const promise = await fetch(
	`https://api.weatherapi.com/v1/current.json?key=089e1b174bc34e28b7e182407242407&q=${city}&aqi=yes`);
	 return await promise.json()
	}
button.addEventListener("click",async()=>{
	const value = city.value;
	const result = await getData(value);
	cityName.innerText= result.location.name, result.location.region,result.location.country;
	data.innerText= result.current.temp_c;
});
