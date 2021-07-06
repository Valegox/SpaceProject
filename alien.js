const alienSpeed = 5

let alienMove = {
	x: 0,
	y: 0
}

alien.style.left = alienPosition.x + 'px'
alien.style.bottom = alienPosition.y + 'px'

document.addEventListener('keydown', event => {
	switch (event.keyCode)
	{
		case 38: // up arrow
			alienMove.y = alienSpeed
			break
		case 40: // down arrow
			alienMove.y = -alienSpeed
			break
		case 37: // left arrow
			alienMove.x = -alienSpeed
			break
		case 39: // right arrow
			alienMove.x = alienSpeed
			break
		default:
			return
	}
})

document.addEventListener('keyup', event => {
	if (event.keyCode === 38 && alienMove.y > 0) // up arrow
		alienMove.y = 0
	if (event.keyCode === 40 && alienMove.y < 0) // down arrow
		alienMove.y = 0
	if (event.keyCode === 37 && alienMove.x < 0) // left arrow
		alienMove.x = 0
	if (event.keyCode === 39 && alienMove.x > 0) // right arrow
		alienMove.x = 0
})

const alienMoveInterval = setInterval( () => {

	if ((alienPosition.x + alienMove.x) > SCREEN_WIDTH)
		alienPosition.x = SCREEN_WIDTH
	else if ((alienPosition.x + alienMove.x) < 0)
		alienPosition.x = 0
	else
		alienPosition.x += alienMove.x

	if ((alienPosition.y + alienMove.y) < 0)
		alienPosition.y = 0
	else if ((alienPosition.y + alienMove.y) > SCREEN_HEIGHT/2)
		alienPosition.y = SCREEN_HEIGHT/2
	else
		alienPosition.y += alienMove.y

	alien.style.left = alienPosition.x + 'px'
	alien.style.bottom = alienPosition.y + 'px'

	timer += 0.01

	document.getElementById('alienScore').textContent = 'Alien: ' + parseInt(timer) + ' secondes'
}, 10)