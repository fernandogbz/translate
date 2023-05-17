//Getting variables
const selectTag = document.querySelectorAll("select");

selectTag.forEach(tag => {
  for (const countryCode in countries) {
    console.log(countries[countryCode]);

  }
})