const PLAYER_SIZE = 100
const SCREEN_WIDTH = window.screen.width-PLAYER_SIZE
const SCREEN_HEIGHT = window.screen.height
let alienPosition = {
	x: SCREEN_WIDTH/2,
	y: SCREEN_HEIGHT/4
}
const alien = document.getElementById('alien')
let scoreSpaceship = 0
let timer = 0