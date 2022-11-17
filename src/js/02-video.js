import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savedPlayerTime = ({ percent, seconds }) => {
  if (percent < 1) {
    localStorage.setItem('videoplayer-current-time', seconds);
  } else localStorage.removeItem('videoplayer-current-time');
};

player.on('timeupdate', throttle(savedPlayerTime, 1000));

let lastTime = localStorage.getItem('videoplayer-current-time');
player

  .setCurrentTime(lastTime)
  .play()
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
