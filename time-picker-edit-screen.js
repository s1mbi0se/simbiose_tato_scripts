components.agenda__start_hour.value = '00:00'
components.agenda__end_hour.value = '00:00'

function limitEndHour()  {
	let sH = parseInt(components.agenda__start_hour.value.split(':')[0])
	let startMinute = parseInt(components.agenda__start_hour.value.split(':')[1])
	let startHour = parseInt(sH*60)
	let startTime = parseInt(startHour+startMinute)

	let eH = parseInt(components.agenda__end_hour.value.split(':')[0])
	let endMinute = parseInt(components.agenda__end_hour.value.split(':')[1])
	let endHour = parseInt(eH*60)
	let endTime = parseInt(endHour + endMinute)

	if (endTime <= startTime){
		let timeHour = Math.floor(startTime / 60)
		let timeMinutes = startTime % 60
		components.agenda__end_hour.value = `${timeHour}:${timeMinutes + 30}`
	}
}

components.agenda__start_hour.onChange(() => {
		limitEndHour()
})

components.agenda__end_hour.onChange(() => {
		limitEndHour()
})
