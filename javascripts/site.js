$(function() {
  var timeline = $('#twitter-timeline-container');

  if (timeline.length) {
    setTimeout(function() {
      timeline.fadeIn('slow');
    }, 2500);
  }
});
