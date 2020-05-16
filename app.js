////////////////////////////////////
//  SECTION 1: Add Gothamist API  //
////////////////////////////////////
$(() => {

  $('.gloveImg').on('click', event => {

    const titleNum = 4;

    let link = `https://api.nytimes.com/svc/topstories/v2/arts.json`;

    link += '?' + $.param({
      'api-key': "4eAfRFLc13vKAKo5Ah14UXZrjsmitkCF"
    });

    $.ajax({
          url: link,
          method: 'GET',
    }
      ).then((data) => {
        if (titleNum <= 4) {
          data.results[0].title
          data.results[1].title
          data.results[2].title

          const $ul = $('<ul>').attr('id', 'newsList')

          const $li1 = $('<li>').html(data.results[0].title).attr('id', 'article1')
          const $li2 = $('<li>').html(data.results[1].title).attr('id', 'article2')
          const $li3 = $('<li>').html(data.results[2].title).attr('id', 'article3')

          $('#gloveDiv').append($ul)
          $ul.append($li1)
          $ul.append($li2)
          $ul.append($li3)

          const $modal = $('#modal');
          const $articleBtn = $('#article');
            const modal = () => {

              const $p = $('<p>').html(data.results[0].abstract)
              $('#modal-text').append($p)

              $modal.css('display', 'block');
            $articleBtn.on('click', closeModal)

        }
            const closeModal = () => {
            $modal.css('display', 'none')

        }
        $('#article1').on('click', modal);
          }

          // console.log(data.results[0].title);
          // console.log(data.results[1].title);
          // console.log(data.results[2].title);





    }).catch(err => {
      console.log(err);
    })
  })
})

//event listener on image
//once image is clicked, a modal appears
//request the title
