# javascript-drum-kit
### Made with vanilla JavaScript.  🍦   Check out the [Live Demo](https://ryellingson.github.io/javascript-drum-kit/).

![drums](https://user-images.githubusercontent.com/56618947/152451477-c1c2a44b-70b7-4af1-9172-cfbc7e556dff.gif)

This is a JavaScript program that plays a sound when a specific key on the keyboard is pressed, and adds a visual effect to the corresponding key on the screen. The program starts by selecting the audio element and the key element from the HTML document that corresponds to the keyCode of the key pressed. If there is no audio element, the function stops running altogether. 

When the key is pressed, the program adds the "playing" class to the key element, which triggers a visual effect. The audio element rewinds to the beginning if the key is pressed again, and the play method is called to start the playback of the sound. When the transition of the key element ends, the program removes the "playing" class, reverting back to the previous state. An event listener is added to each key element to listen for the end of the transition, and another event listener is added to the window to listen for keydown events, which triggers the playSound function.
