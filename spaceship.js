const spaceship = document.getElementById('spaceship')
const spaceshipSpeed = 10

let spaceshipMove = 0
let spaceshipPosition = SCREEN_WIDTH/2-PLAYER_SIZE/2

spaceship.style.left = spaceshipMove + 'px'

//Move spaceship
document.addEventListener('keydown', event => {
	switch (event.keyCode)
	{
		case 81: // q key
			spaceshipMove = -spaceshipSpeed
			break
		case 68: // d key
			spaceshipMove = spaceshipSpeed
			break
		default:
			return
	}
})

document.addEventListener('keyup', event => {
	if (event.keyCode === 81 && spaceshipMove < 0) // q key
		spaceshipMove = 0
	if (event.keyCode === 68 && spaceshipMove > 0) // d key
		spaceshipMove = 0
})

const spaceshipMoveInterval = setInterval( () => {

	if ((spaceshipPosition + spaceshipMove) > SCREEN_WIDTH)
		spaceshipPosition = SCREEN_WIDTH
	else if ((spaceshipPosition + spaceshipMove) < 0)
		spaceshipPosition = 0
	else
		spaceshipPosition += spaceshipMove

	spaceship.style.left = spaceshipPosition + 'px'

}, 10)

