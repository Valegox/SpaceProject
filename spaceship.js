const spaceship = document.getElementById('spaceship')

/* --------------------------- MOVE --------------------------- */

const spaceshipSpeed = 10

let spaceshipMove = 0
let spaceshipPosition = SCREEN_WIDTH/2

spaceship.style.left = spaceshipMove + 'px'

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

/* --------------------------- SHOOT --------------------------- */

let cooldown = false
let cooldownTime = 1000
let shootInterval

document.addEventListener('keydown', event => {
	if (event.keyCode === 90 && !cooldown)
	{
		cooldown = true
		shoot()
		setTimeout( () => {
			clearInterval(shootInterval)
			cooldown = false
		}, cooldownTime)
	}
})

function shoot()
{
	const missile = document.createElement('div')
	missile.className = 'missile'
	document.getElementById('spaceship').appendChild(missile)

	missileHeight = 0
	shootInterval = setInterval( () => {
		missileHeight += 3
		missile.style.marginBottom = missileHeight + 'px'

		const missileX = missile.getBoundingClientRect().left
		const missileY = missile.getBoundingClientRect().bottom
		const alienX = alien.getBoundingClientRect().left
		const alienY = alien.getBoundingClientRect().bottom

		if ((missileX > alienX && missileX < alienX + PLAYER_SIZE) && (missileY > alienY && missileY < alienY + PLAYER_SIZE))
		{
			alien.style.display = 'none'
			alienPosition = {
				x: SCREEN_WIDTH/2,
				y: SCREEN_HEIGHT/4
			}
			scoreSpaceship = scoreSpaceship + 1 
			document.getElementById('spaceshipScore').textContent = 'Vaisseau : ' + scoreSpaceship + ' kills'

			setTimeout(function() {
				alien.style.display = 'block'
				alienTimer = 0
			}, 1500);
		}

		if (missileHeight > SCREEN_HEIGHT)
			missile.remove()

	}, 1)
}
