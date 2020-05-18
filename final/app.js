$(() => {
  let currentImg = 0;
  const numOfImgs = $('.imageRow').children().length - 1;
  $('.next').on('click', () => {
    $('.imageRow').children().eq(currentImg).css('display', 'none');
    if (currentImg < numOfImgs) {
      currentImg++;
    } else {
      currentImg = 0;
    }
    $('.imageRow').children().eq(currentImg).css('display', 'block')
  })
  $('.previous').on('click', () => {
    $('.imageRow').children().eq(currentImg).css('display', 'none')
    if(currentImg > 0) {
      currentImg--;
    } else {
      currentImg = numOfImgs;
    }
    $('.imageRow').children().eq(currentImg).css('display', 'block')
  })

})
$(() => {

  $('.gloveImg').on('click', event => {
    // event.preventDefault();
    const titleNum = 4;

    let link = `https://api.nytimes.com/svc/topstories/v2/home.json`;

    link += '?' + $.param({
      'api-key': "4eAfRFLc13vKAKo5Ah14UXZrjsmitkCF"
    });

    $.ajax({
          url: link,
          method: 'GET',
    }
      ).then((data) => {
        if (titleNum <= 4) {

          //ul to store article titles
          const $ul = $('<ul>').attr('id', 'newsList')
          //list top three article titles in array
          const $li1 = $('<li>').html(data.results[0].title).attr('id', 'article1')
          const $li2 = $('<li>').html(data.results[1].title).attr('id', 'article2')
          const $li3 = $('<li>').html(data.results[2].title).attr('id', 'article3')

          //append ul to first image div
          $('#gloveDiv').append($ul)
          $ul.append($li1)
          $ul.append($li2)
          $ul.append($li3)

          //modal for article abstract
          const $modal = $('#modal');
          const $closeBtn = $('#closeArticle');
          const $articleBtn = $('#goToArticle');

          const showAbstract = (abstract) => {

            $modal.css('display', 'block');

            const $p = $('<p>').html(abstract).attr('id', 'abstractText')
            $('#modal-text').append($p);

            $closeBtn.on('click', closeModal)

            $articleBtn.on('click', function () {
              if ($('#abstractText').text() == data.results[0].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/us/coronavirus-updates.html")
              } else if ($('#abstractText').text() == data.results[1].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/health/coronavirus-vaccine-moderna.html")
              } else if ($('#abstractText').text() == data.results[2].abstract) {
                window.location.assign("https://www.nytimes.com/interactive/2020/05/18/us/coronavirus-underlying-conditions.html")
            }
          })
        }
            //set modal display to none
            const closeModal = () => {
            $modal.css('display', 'none')
            //set ul list display to none
            $ul.css('display', 'none')
            $('#modal-text').empty();

        }
          // const redirectLink = () => {
          //
          // }

            //each article have an event listener with the abstract
            // $('#article1').on('click', data.results[0].abstract)
            $('#article1').click(function () {
              showAbstract(data.results[0].abstract)
            })
            $('#article2').click(function () {
              showAbstract(data.results[1].abstract)
            })
            $('#article3').click(function () {
              showAbstract(data.results[2].abstract)
          })
      }
    }).catch(err => {
      console.log(err);
    })
  })
})
//MIDDLE IMAGE
$(() => {

  $('.maskImg').on('click', event => {
    // event.preventDefault();

    const titleNum = 4;

    let link = `https://api.nytimes.com/svc/topstories/v2/health.json`;

    link += '?' + $.param({
      'api-key': "4eAfRFLc13vKAKo5Ah14UXZrjsmitkCF"
    });

    $.ajax({
          url: link,
          method: 'GET',
    }
      ).then((data) => {
        if (titleNum <= 4) {
          //ul to store article titles
          const $ul2 = $('<ul>').attr('id', 'healthList')
          //list top three article titles in array
          const $li1 = $('<li>').html(data.results[0].title).attr('id', 'article1')
          const $li2 = $('<li>').html(data.results[1].title).attr('id', 'article2')
          const $li3 = $('<li>').html(data.results[2].title).attr('id', 'article3')

          //append ul to first image div
          $('#maskDiv').append($ul2)
          $ul2.append($li1)
          $ul2.append($li2)
          $ul2.append($li3)

          //modal for article abstract
          const $modal = $('#modal');
          const $closeBtn = $('#closeArticle');
          const $articleBtn = $('#goToArticle');

          const showAbstract = (abstract) => {

            $modal.css('display', 'block');

            const $p = $('<p>').html(abstract).attr('id', 'abstractText')
            $('#modal-text').append($p);

            $closeBtn.on('click', closeModal)

            $articleBtn.on('click', function () {
              if ($('#abstractText').text() == data.results[0].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/health/coronavirus-contact-tracing-jobs.html")
              } else if ($('#abstractText').text() == data.results[1].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/world/asia/wuhan-coronavirus-lockdown.html")
              } else if ($('#abstractText').text() == data.results[2].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/books/coronavirus-books-publishing.html")
              }

            })
          }
            //set modal display to none
            const closeModal = () => {
            $modal.css('display', 'none')
            //set ul list display to none
            $ul2.css('display', 'none')
            $('#modal-text').empty();
        }
            //each article have an event listener with the abstract
            // $('#article1').on('click', data.results[0].abstract)
            $('#article1').click(function () {
              showAbstract(data.results[0].abstract)
            })
            $('#article2').click(function () {
              showAbstract(data.results[1].abstract)
            })
            $('#article3').click(function () {
              showAbstract(data.results[2].abstract)
            })
        }
    }).catch(err => {
      console.log(err);
    })
  })
})
//LAST IMAGE
 $(() => {
  $('.selfImg').on('click', event => {
    // event.preventDefault();
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
          //ul to store article titles
          const $ul3 = $('<ul>').attr('id', 'artList')
          //list top three article titles in array
          const $li1 = $('<li>').html(data.results[0].title).attr('id', 'article1')
          const $li2 = $('<li>').html(data.results[1].title).attr('id', 'article2')
          const $li3 = $('<li>').html(data.results[2].title).attr('id', 'article3')

          //append ul to first image div
          $('#artDiv').append($ul3)
          $ul3.append($li1)
          $ul3.append($li2)
          $ul3.append($li3)

          //modal for article abstract
          const $modal = $('#modal');
          const $closeBtn = $('#closeArticle');
          const $articleBtn = $('#goToArticle');

          const showAbstract = (abstract) => {

            $modal.css('display', 'block');

            const $p = $('<p>').html(abstract).attr('id', 'abstractText')
            $('#modal-text').append($p);

            $closeBtn.on('click', closeModal)

            $articleBtn.on('click', function () {
              if ($('#abstractText').text() == data.results[0].abstract) {
                window.location.assign("https://www.nytimes.com/interactive/2020/05/18/arts/music/eminem-marshall-mathers-lp.html")
              } else if ($('#abstractText').text() == data.results[1].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/18/arts/television/fred-willard-best-performances.html")
              } else if ($('#abstractText').text() == data.results[2].abstract) {
                window.location.assign("https://www.nytimes.com/2020/05/17/arts/design/guggenheim-countryside-tomatoes.html")
            }
          })
        }
            //set modal display to none
            const closeModal = () => {
            $modal.css('display', 'none')
            //set ul list display to none
            $ul2.css('display', 'none')
            $('#modal-text').empty();
        }
            //each article have an event listener with the abstract
            // $('#article1').on('click', data.results[0].abstract)
            $('#article1').click(function () {
              showAbstract(data.results[0].abstract)
            })
            $('#article2').click(function () {
              showAbstract(data.results[1].abstract)
            })
            $('#article3').click(function () {
              showAbstract(data.results[2].abstract)
            })
        }

    }).catch(err => {
      console.log(err);
    })
  })
})
