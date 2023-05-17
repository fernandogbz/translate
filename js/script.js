//Getting variables
const selectTag = document.querySelectorAll("select");

selectTag.forEach(tag => {
  for (const countryCode in countries) {
    console.log(countries[countryCode]);
    let option = `<option value="${countryCode}">${countries[countryCode]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); // adding options tag inside select tag
  }
})