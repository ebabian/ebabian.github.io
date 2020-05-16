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
      }
    }
      ).then((data) => {
        const $update = data.articles[0].title

         




            // console.log(data.articles[0].title);
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
