// const constraints = { audio: false, video: { width: 1326, height: 685, facingMode: 'environment' } };
const constraints = {
  audio: false,
  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 776, ideal: 720, max: 1080 },
    facingMode: 'environment',
  },
};
let streamRef;
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.start').addEventListener('click', async () => {
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      console.log(error);
    }

    streamRef = stream;
    const video = document.querySelector('#v');
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  });

  document.querySelector('.stop').addEventListener('click', () => {
    streamRef = null;
  });
});
