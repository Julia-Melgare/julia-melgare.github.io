document.addEventListener("DOMContentLoaded", function () {

  var elem = document.querySelector('.posts');

  if (elem) {
    var infScroll = new InfiniteScroll(elem, {
      path: '.older-posts',
      append: '.post',
      history: false,
    });
  }

});