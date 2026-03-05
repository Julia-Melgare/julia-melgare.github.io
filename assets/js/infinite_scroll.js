document.addEventListener("DOMContentLoaded", function () {

  var elem = document.querySelector('.posts');

  if (elem) {
    var infScroll = new InfiniteScroll(elem, {
      path: '.pagination__next',
      append: '.post',
      history: false,
    });
  }

});