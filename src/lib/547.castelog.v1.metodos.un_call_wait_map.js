Castelog.metodos.un_call_wait_map = function(promiseMapping, defaultObject = {}, args = []) {
	// Collect:
	const startedPromises = [];
	const out = defaultObject;
	// Collect:
	for(const prop in promiseMapping) {
		try {
			const val = promiseMapping[prop];
			let result = undefined;
			if((typeof result === "function") && (result instanceof Promise)) {
				const currentPromise = result.then(data => {
					out[prop] = data;
					return out;
				});
				startedPromises.push(currentPromise);
			} else if(typeof val === "function") {
				result = val(...args);
				out[prop] = result;
			} else {
				result = val;
				out[prop] = result;
			}
		} catch(error) {
			console.log("Error en «Castelog.metodos.un_call_wait_map» índice «" + prop + "»:", error);
		}
	}
	if(startedPromises.length) {
		return Promise.all(startedPromises).then(data => out).catch(error => console.log("Error en «Castelog.metodos.un_call_wait_map» con una función-promesa:", error));
	}
	return out;
};