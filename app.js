/* jshint browser:true */

(function() {

  // util
  var $ = function(selector, context) {
    if (context === undefined) {
      context = document;
    }
    var nl = context.querySelectorAll(selector);
    return Array.prototype.slice.call(nl);
  };

  // Switch between code source / compiled

  var switchers = $('.code-switcher');

  switchers.forEach(function(switcher) {
    var before = $('.code-before', switcher)[0];
    var after = $('.code-after', switcher)[0];
    after.style.display = 'none';

    var beforeButton = document.createElement('div');
    beforeButton.innerText = 'Stylus + Nib';
    beforeButton.classList.add('code-switcher-button');
    beforeButton.classList.add('selected');
    beforeButton.addEventListener('click', function(e) {
      before.style.display = 'block';
      after.style.display = 'none';
      beforeButton.classList.add('selected');
      afterButton.classList.remove('selected');
    });
    switcher.insertBefore(beforeButton, before);

    var afterButton = document.createElement('div');
    afterButton.innerText = 'Compiled CSS';
    afterButton.classList.add('code-switcher-button');
    afterButton.addEventListener('click', function(e) {
      before.style.display = 'none';
      after.style.display = 'block';
      beforeButton.classList.remove('selected');
      afterButton.classList.add('selected');
    });
    switcher.insertBefore(afterButton, before);
  });

  // Sticky sidebar
  window.onscroll = function() {
    var sticky = $('#toc')[0];
    if (document.body.scrollTop +
        document.documentElement.scrollTop > 285) {
      sticky.className = 'stuck';
    }
    else {
      sticky.className = '';
    }
  };

}());
