jQuery(document).ready(function($) {

const $bod = $('body');
const $current = $(".current")
const $search = $(".search")
const $input = $("input[type]")
const $button = $('button');


$button.on("click", () => {
    $input.val()
    jazz($input.val())

})


let jazz = (movieTitle) => {
    // let movie = movieTitle;
    $.ajax({
        url:  "http://www.omdbapi.com/?s="+movieTitle,
        type: "GET",
        success: (data) => {
              console.log(data.Search)
              rend(data.Search)
        },
        error: (err) => {
          console.log(err);
        }
    })
}


let rend = (a) => {
      a.forEach(obj => {

          let $img = $('<img class="movie">');
          let $title = $('<h2 class="title">');
          let $year = $('<h2 class="year">');
          let $div = $('<div class="all">')
          console.log($img)

          $img.attr("src", obj.Poster);

          $title.text(obj.Title);
          $year.text(obj.Year);
          $div.append($img)
                 .append($title)
                 .append($year);
           $search.append($div);
           buttonShit($div);
      })

}

let r;
let buttonShit = (a) => {
      a.on("click", (e) => {
          console.log(e.target.nextSibling)
          r = e.target.nextSibling;
          console.log(r.innerText)
          jazz2(r.innerText)
      })
      console.log(r)
}


let jazz2 = (movieTitle) => {
    // let movie = movieTitle;
    $.ajax({
        url:  "http://www.omdbapi.com/?t="+movieTitle,
        type: "GET",
        success: (data) => {
              console.log(data)
              jazzPost(data);

        },
        error: (err) => {
          console.log(err);
        }
    })
}

let jazzPost = (title) => {
    // let movie = movieTitle;
    $.ajax({
        url:  "api/movies",
        type: "POST",
        data: title,
        success: (response) => {
              console.log(response)

        },
        error: (err) => {
          console.log(err);
        }
    })
}






});



