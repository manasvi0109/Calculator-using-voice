const speechRecognition = new webkitSpeechRecognition();
speechRecognition.lang = 'en-US';
speechRecognition.maxResults = 10;

speechRecognition.onresult = event => {
  const transcript = event.results[0][0].transcript;
  console.log(transcript);
  // Process the transcript here, e.g., evaluate the math expression
  try {
    const result = eval(transcript);
    document.querySelector('input[name="display"]').value = result;
  } catch (error) {
    console.error(error);
  }
};

speechRecognition.onstart = () => {
  console.log('Speech recognition started');
};

speechRecognition.onerror = event => {
  console.error('Speech recognition error:', event);
};

document.querySelector('i.bx.bxs-microphone-alt').addEventListener('click', () => {
  speechRecognition.start();
});