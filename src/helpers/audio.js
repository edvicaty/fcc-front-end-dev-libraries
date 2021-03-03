const alarm = new Audio(
  "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
)

alarm.volume = 0.1

const click = new Audio(
  "https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-46416/zapsplat_technology_computer_mouse_click_apple_003_47279.mp3?_=3"
)

click.volume = 0.1

export default audio = {
  alarm,
  click,
}
