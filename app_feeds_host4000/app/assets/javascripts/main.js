$(function(){

  var $feedsSection = $('.feedsSection');
  var feeds = new Feeds($feedsSection);

  var $mashablesSection = $('.mashablesSection');
  var feeds = new Mashables($mashablesSection);

  var $redditsSection = $('.redditsSection');
  var feeds = new Reddits($redditsSection);

  var $diggsSection = $('.diggsSection');
  var feeds = new Diggs($diggsSection);
  });