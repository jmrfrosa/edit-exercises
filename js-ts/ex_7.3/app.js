const DEFAULT_SYNTH = "sine";
const FADE_DELAY = 0.5;

// https://en.wikipedia.org/wiki/Piano_key_frequencies
const keys = {
  c4: 261.6256,
  d4: 293.6648,
  e4: 329.6276,
  f4: 349.2282,
  g4: 391.9954,
  a4: 440.0,
  b4: 493.8833,
  c5: 523.2511,
};

const audioContext = new AudioContext();
const synthSelectElement = document.querySelector("select[name='synth']");

const notes = [];

for (const [key, freq] of Object.entries(keys)) {
  const keyElement = document.getElementById(key);

  const { gainNode, oscNode } = buildOscillator(freq);

  keyElement.addEventListener("mousedown", () => {
    audioContext.resume();

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      1,
      audioContext.currentTime + FADE_DELAY
    );
  });

  keyElement.addEventListener("mouseup", () => {
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + FADE_DELAY
    );
  });

  notes.push({ gainNode, oscNode });
}

synthSelectElement.addEventListener("change", (e) => {
  const synthType = e.currentTarget.value;

  notes.forEach((note) => (note.oscNode.type = synthType));
});

function buildOscillator(frequency) {
  const oscNode = audioContext.createOscillator();

  oscNode.frequency.value = frequency;
  oscNode.type = DEFAULT_SYNTH;
  oscNode.start(audioContext.currentTime);

  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(audioContext.destination);

  oscNode.connect(gainNode);

  return { gainNode, oscNode };
}
