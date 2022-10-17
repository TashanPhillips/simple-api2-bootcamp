document.querySelector("button").addEventListener("click", getCatFact);
function getCatFact() {
  //const city = document.querySelector('#city').value
  //const maxLength = document.querySelector("#number").value;

  fetch(`https://catfact.ninja/fact?max_length`
  )
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

    document.querySelector("#results").innerText = data.fact;
    //document.querySelector("#currency").innerText = data[0].currencies.PEN;
      //document.querySelector("img").src = data.flag;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
