console.log("Let's get this party started!");

const gifArea = $("#gif-area");
const searchInput = $("#search");


function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let gifImg = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    newDiv.append(gifImg);
    gifArea.append(newDiv);
  }
}

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = searchInput.val();
  searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

$("#delete").on("click", function() {
  gifArea.empty();
});