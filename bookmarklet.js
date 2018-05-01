(() => { 
    console.log("Hello there!");

    // Sound
    let audio = document.createElement('audio');
    let source = document.createElement('source');

    audio.setAttribute('autoplay', 'true');

    source.src = 'http://mtxx.sweb.cz/chrome_ext/hellothere.mp3';
    source.type = 'audio/mpeg';

    audio.appendChild(source);

    let container = document.getElementsByClassName('hello_there_container')[0];

    container.appendChild(audio);
})();