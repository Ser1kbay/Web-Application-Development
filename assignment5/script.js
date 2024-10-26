function playSound(note) {
    const audio = new Audio(`sounds/${note}.wav`);
    audio.play();
}
