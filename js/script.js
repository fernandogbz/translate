//Getting variables
const selectTag = document.querySelectorAll("select"),
fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
  for (const countryCode in countries) {
    // Selecting English by default as FROM language and Italian as TO language
    let selected;
    if(id == 0 && countryCode == "en-GB") {
      selected = "selected";
    } else if(id == 1 && countryCode == "it-IT"){
      selected = "selected";
    }
    let option = `<option value="${countryCode}" ${selected}>${countries[countryCode]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
  }
})

translateBtn.addEventListener("click", () => {
  let text = fromText.value;
  translateFrom = selectTag[0].value; //getting fromSelect tag value
  translateTo = selectTag[1].value; //getting toSelect tag value
  
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

  // fetching api response and returning it with parsing into js object
  // And in another then method receiving that object
  fetch(apiUrl).then(res => res.json()).then(data => {
    console.log(data);
  })
})