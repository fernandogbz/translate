//Getting variables
const selectTag = document.querySelectorAll("select"),
fromText = document.querySelector(".from-text"),
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
  console.log(text, translateFrom, translateTo);
})