
let mods = document.getElementById("mods")

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
}

window.onload = (event) => {
    console.log("ye m8");
    getJSON("manifest.lock").then(data => {
        console.log(data);
    })
    mods.innerHTML = "a";
}