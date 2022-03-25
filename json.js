
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

getJSON("https://odin.vulpera.com/modlist.json").then(data => {
    let num = 0
    data.forEach(obj => {
        html += `<div class="mod" id="${obj['id']}"><img class="mod_logo" src="${obj['logo']}" /> <span class="name">${obj['name']}</span><br><span class="author"><a href="@${obj['author_url']}">${obj['author']}</a></span><span class="summary">${obj['summary']}</span></div>`;
    })
    mods_dom.innerHTML = html;
})

window.onload = (event) => {
    console.log("ye m8");
}