let dateTag = document.getElementById("Date")
fetch('https://ipinfo.io?token=f5ea3d083b1327')
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    console.log(country)
    if (country == "US"){
        dateTag.innerHTML = "Edited: "+date[0]+'/'+date[1]+'/'+date[2]
    } else {
        dateTag.innerHTML = "Edited: "+date[1]+'/'+date[0]+'/'+date[2]
    }
})
  .catch(error => {
    console.error("Error fetching geolocation data:", error);
  });