//Getting variables
const selectTag = document.querySelectorAll("select"),
fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchangeIcon = document.querySelector(".exchange"),
translateBtn = document.querySelector("button"),
icons = document.querySelectorAll(".row i");

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

exchangeIcon.addEventListener("click", () => {
  // Exchanging textarea and select tag values
  let tempText = fromText.value,
  tempLang = selectTag[0].value;
  fromText.value = toText.value;
  selectTag[0].value = selectTag[1].value;
  toText.value = tempText;
  selectTag[1].value = tempLang;
})

translateBtn.addEventListener("click", () => {
  let text = fromText.value;
  translateFrom = selectTag[0].value; //getting fromSelect tag value
  translateTo = selectTag[1].value; //getting toSelect tag value
  if(!text) return;
  toText.setAttribute("placeholder", "Translating...") // changing textarea placeholder to Translating... before fetching data
  let apiUrl = `https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}`;

  // fetching api response and returning it with parsing into js object
  // And in another then method receiving that object
  fetch(apiUrl).then(res => res.json()).then(data => {
    console.log(data);
    toText.value = data.responseData.translatedText;
    toText.setAttribute("placeholder", "Translation...")
  })
})

icons.forEach(icon => {
  icon.addEventListener("click", ({target}) => {
    if(target.classList.contains("fa-copy")) {
      // if clicked icon has from id, copy the fromTextarea value. Else copy the toTextarea value
      if(target.id == "from") {
        navigator.clipboard.writeText(fromText.value);
      } else {
        navigator.clipboard.writeText(toText.value);
      }
    } else {
      let utterance;
      // if clicked icon has from id, speak the fromTextarea value, else speak the toTextarea value
      if(target.id == "from") {
        utterance = new SpeechSynthesisUtterance(fromText.value); //SpeechSynthesisUtterance represents a speech request
        utterance.lang = selectTag[0].value; // setting utterance language to fromSelect tag value
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        utterance.lang = selectTag[1].value; // setting utterance language to toSelect tag value
      }
      speechSynthesis.speak(utterance); // speak the passed utterance
    }
  })
})