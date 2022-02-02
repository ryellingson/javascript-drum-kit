// In all methods e represents the event
   function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Selects our audio
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // Selects the corresponding key

    if (!audio) return; // If there is no audio, stop the function from running altogether

    key.classList.add('playing'); // Adds the visual effect while sound plays 

    audio.currentTime = 0; // Rewinds audio to beginning if key is pressed again 

    audio.play(); // HTMLMediaElement.play() method attempts to begin playback of the media
  }

  function removeTransition(e) {
    // Removes the .playing styling, reverting back to the previous state
    if (e.propertyName !== 'transform') return; // Skip it if its not a transform
    e.target.classList.remove('playing');
  }

  // After selecting all the keys into an array, we add a listener to each one that listens for the end of the transition
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);