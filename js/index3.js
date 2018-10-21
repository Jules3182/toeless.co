/*


  $$\                         $$\
  $$ |                        $$ |
$$$$$$\    $$$$$$\   $$$$$$\  $$ | $$$$$$\   $$$$$$$\  $$$$$$$\      $$$$$$$\  $$$$$$\
\_$$  _|  $$  __$$\ $$  __$$\ $$ |$$  __$$\ $$  _____|$$  _____|    $$  _____|$$  __$$\
  $$ |    $$ /  $$ |$$$$$$$$ |$$ |$$$$$$$$ |\$$$$$$\  \$$$$$$\      $$ /      $$ /  $$ |
  $$ |$$\ $$ |  $$ |$$   ____|$$ |$$   ____| \____$$\  \____$$\     $$ |      $$ |  $$ |
  \$$$$  |\$$$$$$  |\$$$$$$$\ $$ |\$$$$$$$\ $$$$$$$  |$$$$$$$  |$$\ \$$$$$$$\ \$$$$$$  |
   \____/  \______/  \_______|\__| \_______|\_______/ \_______/ \__| \_______| \______/



*/
var randomImages = (function(){
  'use strict';
  return{
    init: function(){
      this.events();// init events
    },
    events: function(){
      /* random images snippet*/
      var images = [
        '/images/hoco1.jpg',
        '/images/hoco2.jpg',
        '/images/hoco3.jpg',
        '/images/hoco4.jpg',
        '/images/hoco5.jpg',
        '/images/hoco6.jpg',
      ];
      // create style tag in head
      var s = document.createElement('style');
      // add id
      s.id = 'random-Img';
      // type css
      s.type = 'text/css';
      // append in head
      document.head.appendChild(s);
      // math random
      var r = images[Math.floor(Math.random() * images.length)];
      // add into style
      s.textContent = '#rand-images{background:url('+r+') no-repeat center center fixed #eee;background-size:cover;-moz-background-size:cover;}';
    }
  };
})();
// Ready for the war
randomImages.init();
