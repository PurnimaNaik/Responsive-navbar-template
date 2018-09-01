function setActive(imageTitle) {

  //create a list of all the navbar links
  const linksArray = document.getElementById('navbarList').getElementsByTagName('a');

  //iterate through; find the active link and remove the active state highlights
  for (i = 0; i < linksArray.length; i++) {
    if (linksArray[i].className != '') {
      linksArray[i].className = '';
      linksArray[i].children[0].src = linksArray[i].children[0].src.substring(0, linksArray[i].children[0].src.indexOf('_')) + '.svg';
    }
  }

  //extract the event and it's source element in variables
  var event = event || window.event;
  const sender = event.srcElement || event.target;

  //create new image source based on the parameter passed to this function
  const activeImageSrc = 'assets/icons/' + imageTitle + '_active.svg';

  //check if the sender is an image or an anchor element; accordingly access the elements to change their properties
  if (sender.tagName == "IMG") {
    event.currentTarget.children[0].className = 'active';
    sender.src = activeImageSrc;
  } else if (sender.tagName == "A") {
    sender.className = 'active';
    sender.children[0].src = activeImageSrc;
  }
}

//Using jquery
//Using 2 approaches - img src and img alt ; to modify src string.

// $('.Navbar a').click(function(e) {
//     //extracting the previous active image source
//     let previousActiveImageSrc = $('.Navbar li').find('a.active').children("img").attr("src");
//     previousActiveImageSrc= previousActiveImageSrc.substring(0, previousActiveImageSrc.indexOf('_'));
//
//    //creating inactive image source
//    const inactiveImageSrc=previousActiveImageSrc + '.svg';
//
//     //replacing old image source with inactive image source
//     $('.Navbar li').find('a.active').children("img").attr('src', inactiveImageSrc);
//
//     //removing active classname
//     $('.Navbar a').removeClass('active');
//
//     //extracting current image source alt
//     let alt = $(this).children("img").attr("alt");
//
//     //creating active image source
//     const activeImageSrc='assets/icons/' + alt + '_active.svg';
//
//    //adding active classname
//     $(this).addClass('active');
//
//     //adding active image source
//     $(this).children("img").attr('src', activeImageSrc);
// });
