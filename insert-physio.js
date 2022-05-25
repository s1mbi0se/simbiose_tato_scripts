components.physiotherapist__cpf.onChange(() => {
		let physiotherapistCpf = components.physiotherapist__cpf.value
		components.organization__cnpj.value = physiotherapistCpf
})

components.physiotherapist__first_name.onChange(() => {
	let physiotherapistName = components.physiotherapist__first_name.value
	components.organization__name.value = physiotherapistName
})
