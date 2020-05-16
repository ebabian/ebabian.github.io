////////////////////////////////////
//  SECTION 1: Add Gothamist API  //
////////////////////////////////////
$(() => {

  $('.gloveImg').on('click', event => {

    const titleNum = 4;

    $.ajax({

          url: `https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-US&api_key=74857994CE8A451F806D0F2A9B84FE6F`,
          data: {
            "$limit": 5,
            "$q": "title"
      }
    }
      ).then((data) => {
        if (titleNum <= 4) {
          data.articles[0].title

          const $ul = $('<ul>').attr('id', 'newsList')

          const $li1 = $('<li>').html(data.articles[0].title)
          const $li2 = $('<li>').html(data.articles[1].title)
          const $li3 = $('<li>').html(data.articles[2].title)

          $('.text-section').append($ul)
          $ul.append($li1)
          $ul.append($li2)
          $ul.append($li3)

          }

          console.log(data.articles[0].title);
            // console.log(data.articles[1].snippet);
            // console.log(data.articles[2].snippet);

    }).catch(err => {
      console.log(err);
    })
  })
})

//event listener on image
//once image is clicked, a modal appears
//request the title
