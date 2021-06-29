const PLAYER_SIZE = 100
const SCREEN_WIDTH = window.screen.width-PLAYER_SIZE
const SCREEN_HEIGHT = window.screen.height
let alienPosition = {
	x: SCREEN_WIDTH/2-PLAYER_SIZE/2,
	y: 0
}
const alien = document.getElementById('alien')
let scoreSpaceship = 0