//Getting variables
const selectTag = document.querySelectorAll("select");

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