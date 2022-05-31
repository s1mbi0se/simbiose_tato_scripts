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

	if (endTime < startTime){
		let timeHour = Math.floor(startTime / 60)
		let timeMinutes = startTime % 60
		components.agenda__end_hour.value = `${timeHour}:${timeMinutes}`
	}
}

components.agenda__start_hour.onChange(() => {
		limitEndHour()
})

components.agenda__end_hour.onChange(() => {
		limitEndHour()
})

try {
	let cep = components.physiotherapist__zipcode.value
	fetch(`https://viacep.com.br/ws/${cep}/json/`)
	.then((response) => {
		response.json().then(data => {
			components.physiotherapist__street.value = data.logradouro
			components.physiotherapist__city.value = data.localidade
			components.physiotherapist__state.value = data.uf
		})
	})
}
finally {
	components.physiotherapist__zipcode.onChange(() => {
		let cep2 = components.physiotherapist__zipcode.value
		fetch(`https://viacep.com.br/ws/${cep2}/json/`)
		.then((response) => {
			response.json().then(data => {
				console.log(data)
				components.physiotherapist__street.value = data.logradouro
				components.physiotherapist__city.value = data.localidade
				components.physiotherapist__state.value = data.uf
			})
		})
		.catch(error => {
			console.log(error)
		})
	})
}
