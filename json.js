
let mods_dom = document.getElementById("mods")

let mods_list = {}

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
}

let html = "";

window.onload = (event) => {
    console.log("ye m8");
    getJSON("https://wolfpackmc.github.io/Wolfpack-Odin/manifest.lock").then(data => {
        let num = 0
        data["mods"].forEach(obj => {
            html += `<div class="mod" id="${obj['id']}">${obj['downloadUrl']}</div><br><br>`;
            console.log(`Appended ${obj['id']} to the html`);
        })
        mods_dom.innerHTML = html;
    })
}