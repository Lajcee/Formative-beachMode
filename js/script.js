$(document).ready(function(){

// ==========================================================
// Declaration of an array of objects
// ==========================================================

var url = document.getElementById("youtube");




var music = [
      {
        id : 101 ,
        title : 'Issa Album',
        artist : '21 Savage',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-1.jpg',
        url : ('https://www.youtube.com/embed/djscsRpjGc4'),
        keywords :['issa album','21 savage', '2017', 'hiphop']
      },

      {
        id : 102 ,
        title : 'East Atlanta Love Letter',
        artist : '6lack',
        genre : 'hiphop',
        year : 2018,
        photo : 'hiphop-2.jpg',
        url : 'https://www.youtube.com/embed/tSCtCfIDMxU' ,
        keywords :['East Atlanta Love Letter', 'east atlanta love letter', '6lack', 'hiphop','2018']
      },

      {
        id : 103 ,
        title : 'Songs In A Minor',
        artist : 'Alicia Keys',
        genre : 'hiphop',
        year : 2016,
        photo : 'hiphop-4.jpg',
        url : 'https://www.youtube.com/embed/WpV6wOdkmmo' ,
        keywords :['Songs In A Minor', 'songs in a minor' , 'Alicia Keys', 'hiphop','2016']
      },

      {
        id : 104 ,
        title : 'We Got It From Here... TY4YS',
        artist : 'A Tribe Called Quest',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-3.jpg',
        url : 'https://www.youtube.com/embed/Fbuf6VbVQBQ' ,
        keywords :['we got it from here', 'A tribe called quest', 'hiphop','2017']
      },

      {
        id : 105 ,
        title : 'Loud',
        artist : 'Rihanna',
        genre : 'hiphop',
        year : 2017,
        photo : 'hiphop-5.jpg',
        url : 'https://www.youtube.com/embed/7OZoiv6S_F0' ,
        keywords :['loud', 'Rihanna', 'rihanna', 'hiphop','2017']
      },

      {
        id : 106 ,
        title : 'Ordinary Man',
        artist : 'Lorange',
        genre : 'rap',
        year : 2017,
        photo : 'rap-1.jpg',
        url : 'https://www.youtube.com/embed/a4YjqxPnlgo' ,
        keywords :['Ordinary Man', 'ordinary man', 'rap','2017']
      },

      {
        id : 107 ,
        title : 'Born Again',
        artist : 'Notorious B.i.g',
        genre : 'rap',
        year : 2000,
        photo : 'rap-2.jpg',
        url : 'https://www.youtube.com/embed/_xH8qN6B160' ,
        keywords :['Born Again', 'born again',  'biggie smalls', 'notorious','rap', '2000']
      },

      {
        id : 108 ,
        title : 'Straight Outta Compton',
        artist : 'NWA',
        genre : 'rap',
        year : 2013,
        photo : 'rap-3.jpg',
        url : 'https://www.youtube.com/embed/TMZi25Pq3T8' ,
        keywords :['Straight Outta Compton', 'straight outta compton', 'rap','2013']
      },

      {
        id : 109 ,
        title : 'Blue Slide Park',
        artist : 'Mac Miller',
        genre : 'rap',
        year : 2019,
        photo : 'rap-4.jpg',
        url : 'https://www.youtube.com/embed/7Sya2lGMuYE' ,
        keywords :['Blue Slide Park', 'blue slide park', 'rap','2019']
      },

      {
        id : 110 ,
        title : 'Tkay',
        artist : 'Tkay Maidza',
        genre : 'rap',
        year : 2017,
        photo : 'rap-5.jpg',
        url : 'https://www.youtube.com/embed/8WjKZbxlaFA' ,
        keywords :['Tkay', 'Tkay Maidza', 'rap', 'tkay', '2005']
      },

      {
        id : 111 ,
        title : 'A Sea Of Split Peas',
        artist : 'Courtney Barnett',
        genre : 'indie',
        year : 2013,
        photo : 'indie-1.jpg',
        url : 'https://www.youtube.com/embed/0c62JFTtImM' ,
        keywords :['A Sea Of Split Peas', 'a sea of split peas', 'indie', 'Courtney Barnett','2013']
      },

      {
        id : 112 ,
        title : 'Little Dark Age',
        artist : 'MGMT',
        genre : 'indie',
        year : 2018 ,
        photo : 'indie-2.jpg',
        url : 'https://www.youtube.com/embed/rtL5oMyBHPs' ,
        keywords :['hypnotize', 'system of a down', 'rock','2005']
      },

      {
        id : 113 ,
        title : 'Humbug',
        artist : 'Arctic Monkeys',
        genre : 'indie',
        year : 2009,
        photo : 'indie-3.jpg',
        url : 'https://www.youtube.com/embed/K6L_hkB8Z84' ,
        keywords :['Humbug', 'arctic monkeys', 'humbug', 'Indie','2009']
      },

      {
        id : 114 ,
        title : 'Currents',
        artist : 'Tame Impala',
        genre : 'indie',
        year : 2015,
        photo : 'indie-4.jpg',
        url : 'https://www.youtube.com/embed/NMRhx71bGo4' ,
        keywords :['Currents', 'currents', 'Tame Impala', 'tame impala', '2005']
      },

      {
        id : 115 ,
        title : 'Remote',
        artist : 'Wallows',
        genre : 'indie',
        year : 2020,
        photo : 'indie-5.jpg',
        url : 'https://www.youtube.com/embed/GOfjhukQMjE' ,
        keywords :['remote', 'Remote', 'indie','2020']
      },

      {
        id : 116 ,
        title : 'Live in Amsterdam',
        artist : 'Cypress Hill',
        genre : 'rock',
        year : 2015,
        photo : 'rock-1.jpg',
        url : 'https://www.youtube.com/embed/lL-dt56V9PE' ,
        keywords :['Cypress Hill', 'let them eat', 'cypress Hill', 'rock','2015']
      },

      {
        id : 117 ,
        title : 'Audioslave Best Tracks',
        artist : 'Audioslave',
        genre : 'rock',
        year : 2020,
        photo : 'rock-2.jpg' ,
        url : 'https://www.youtube.com/watch?v=Fbuf6VbVQBQ&list=PLxoxGLV4JjtgN2z-ZZ_Z3lfIRjW3MQ2gD' ,
        keywords :['Audioslave', 'audioslave', 'rock']
      },

      {
        id : 118 ,
        title : 'Hypnotize',
        artist : 'System Of A Down',
        genre : 'rock',
        year : 2005,
        photo : 'rock-3.jpg',
        url : 'https://www.youtube.com/watch?v=Fbuf6VbVQBQ&list=PLxoxGLV4JjtgN2z-ZZ_Z3lfIRjW3MQ2gD' ,
        keywords :['hypnotize', 'system of a down', 'rock','2005']
      },

      {
        id : 119 ,
        title : 'Greatest Hits',
        artist : 'Sublime',
        genre : 'rock',
        year : 2020,
        photo : 'rock-4.jpg' ,
        url : 'https://www.youtube.com/watch?v=Fbuf6VbVQBQ&list=PLxoxGLV4JjtgN2z-ZZ_Z3lfIRjW3MQ2gD' ,
        keywords :['Sublime', 'sublime', 'rock']
      },

      {
        id : 120 ,
        title : 'Minutes To Midnight',
        artist : 'Linkin Park',
        genre : 'rock',
        year : 2018,
        photo : 'rock-5.jpg' ,
        url : 'https://www.youtube.com/watch?v=Fbuf6VbVQBQ&list=PLxoxGLV4JjtgN2z-ZZ_Z3lfIRjW3MQ2gD' ,
        keywords :['minutes to midnight', 'linkin park', 'rock','2018']
      }




];




// ==========================================================
// Function call to display all items
// ==========================================================
$('input[type=checkbox]').prop('checked',false);
allMusic(); //displays all items on home page

$('#refresh').click(function(){
  music.sort(function(a,b){
    var itemA = a.id, itemB = b.id;

    if (itemA < itemB){
      return -1;
    }
    if (itemA > itemB){
      return 1;
    }


  });

  $('input[type=checkbox]').prop('checked',false);
  allMusic();//displays all items on home page
});



// ==========================================================
// Display items as per user's input - genre filter call
// ==========================================================
//
$('#showChoice').click(function(){
  var inputArray = [];


  var rock = $('#rock:checked').val();
  var rap = $('#rap:checked').val();
  var hiphop = $('#hiphop:checked').val();
  var indie = $('#indie:checked').val();


  if (rock === 'checked') {
        inputArray.push('rock');

  }

  if (rap === 'checked') {
        inputArray.push('rap');

  }

  if (hiphop === 'checked') {
        inputArray.push('hiphop');

  }

  if (indie === 'checked') {
        inputArray.push('indie');

  }

  filteredMusic(inputArray);

});//showChoice click function



// ==========================================================
// Function to display all items
// ==========================================================

function allMusic(){
  var i = 0;
  $('#result').text('');
  for (i = 0 ; i < music.length; i++){



    //bootstrap cards to $display
    displayCards(i);
    cardModal();
  } //end of for loop
} //end of allMusic function



// ==========================================================
// Modal
// ==========================================================

  function cardModal(){

    $('.moreDetails').click(function() {
      $('#imageCover').text(' '); //clearing the content
      var url = '';
      var i=0;
      for (i = 0; i < music.length; i++) {
        if (parseInt(this.id) === music[i].id) {
            $('#exampleModalLabel').text(music[i].title);
            // append will keep  adding to existing content, so clear if you want
            // or else use html to replace existing content
            $('#youtube').html('<iframe width="420" height="315" src="' + music[i].url +'"> </iframe>');


        } //end of if statement


      }//end of for statement






    }); // end of moreDetails click event

  } //cardModal






// ==========================================================
// Filter by music type
// ==========================================================


function filteredMusic(allMusic){
  var i,j;
  $('#result').text(' ');
  for(i = 0 ; i < music.length; i++) {
    for (j = 0 ; j < music.length; j++){
      if (allMusic[j] === music[i].genre) {
        displayCards(i);
        cardModal();
      }//if
    }//for j
  }//for i
}//filteredMusic



// ==========================================================
// Display cards
// ==========================================================

function displayCards(j){
  //access properties of objects using index number
  $('#result').append( '<div class="col-xs-12 col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mx-auto">' +
                          '<div class="card p-1 hover-rise mr-2 mx-auto text-primary bg-transparent " style="width: 18rem;">' +
                             '<img src="images/' + music[j].photo + '" class="card-img-top" alt="' + music[j].genre + '">' +
                             '<div class="card-body bg-transparent m-3>' +
                              '<h3 class="card-title ">'+ music[j].title + '</h1>' +
                              '<p class="card-text text-button "> ' + ' ' + '<span class="text-button mt-2">' + music[j].genre+ '</span> <br></p>' +
                              '<p class="card-text text-button>Artist : ' + ' ' + '<span class="text-button">' + music[j].artist + '</span> <br></p>' +
                              '<p class="card-text text-button>Year : ' + ' ' + '<span class="text-button">' + music[j].year + '</span> <br></p>' +

                              '<button id="' + music[j].id + '" type="button" class="btn  moreDetails" data-toggle="modal" data-target="#exampleModal">'+ '<i class="fas fa-play"></i>' + '</button>' +
                            '</div>' +
                          '</div>' +
                      '</div>'
                  ); //append ends here


  } //displayCards

$('#keywords').click(function(){
$('#result').text('');
  var searchItem = $('#search').val();
  var i,j;
  for(i = 0 ; i < music.length; i++){
    for (j = 0; j < music[i].keywords.length; j++){
    if (((music[i].keywords[j]).toLowerCase()).includes(searchItem.toLowerCase()) ) {

      displayCards(i);
      cardModal();
    }
    }

  }
});


// ==========================================================
// Sort by selection
// ==========================================================

$('#sortBtn').change(function(){
  $('input[type=checkbox]').prop('checked',false);
  var sortType = ($('#sortBtn').val()).toLowerCase();



  if ((sortType === 'title') || (sortType === 'artist') || (sortType === 'genre')) {
     sortByAscending(sortType);//calling function
    }

    if ((sortType === 'titleza') || (sortType === 'artistza') || (sortType === 'genreza')) {
     sortByDescending(sortType);//calling function
    }



});


// ==========================================================
// Sort by alphabetical order
// ==========================================================



    //function definition
    function sortByAscending(dummySortType){
      music.sort(function(a,b){
        // compare 2 consecutive objects' name property

        switch (dummySortType){
          case 'title':
            var itemA = a.title.toLowerCase(), itemB = b.title.toLowerCase();
            break;
          case 'artist' :
            var itemA = a.artist.toLowerCase(), itemB = b.artist.toLowerCase();
            break;
          case 'genre':
            var itemA = a.genre.toLowerCase(), itemB = b.genre.toLowerCase();
            break;
          default :
          }//switch

          if (itemA < itemB){
            return -1; //false
          }
          if (itemA > itemB){
            return 1; //true
          }

        });
            allMusic();

      }//sortBySelection


      //function definition
      function sortByDescending(dummySortType){
        music.sort(function(a,b){
          // compare 2 consecutive objects' name property

          switch (dummySortType){
            case 'titleza':
              var itemA = a.title.toLowerCase(), itemB = b.title.toLowerCase();
              break;
            case 'artistza' :
              var itemA = a.artist.toLowerCase(), itemB = b.artist.toLowerCase();
              break;
            case 'genreza':
              var itemA = a.genre.toLowerCase(), itemB = b.genre.toLowerCase();
              break;
            default :

            }//switch

            if (itemA > itemB){
              return -1; //false
            }
            if (itemA < itemB){
              return 1; //true
            }

          });

              allMusic();

        }//sortBySelection




//Show & hide Section

  $('#darkH1, #light').hide();



  $('#dark').click(function(){
    $('#myBackground').addClass('black');
    $('#dark').hide();
    $('#light').show();
    $('#darkH1').show();
    $('#beachTitle').hide();
    $('#waves').hide();
  });
  $('#light').click(function(){
    $('#myBackground').addClass('light');
    $('#dark').show();
    $('#darkH1').hide();
    $('#beachTitle').show();
    $('#waves').show();
  });

//Show & hide section end



}); //document.ready()
