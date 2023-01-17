Castelog.metodos.un_factory_method_design_pattern = function (data) {
	// Collect:
	const dp = {};
	Object.assign(dp, {
		factory: (dp) => {
			return (name = "DefaultFactory", parameters = {}, buildParameters = {}, usingOop = true) => {
				if(typeof name !== "string") throw new Error("Required parameter «name» to be a string in order to «Castelog.metodos.un_factory_method_design_pattern»");
				if(typeof parameters !== "object") throw new Error("Required parameter «name» to be an object in order to «Castelog.metodos.un_factory_method_design_pattern»");
				if(!(name in dp.classes)) throw new Error("Required parameter «name» to be a class known by «dp.classes» in order «Castelog.metodos.un_factory_method_design_pattern»");
				const clazz = dp.classes[name];
				let instanze = undefined;
				if(usingOop === true) {
					instanze = new clazz(parameters);
				} else {
					instanze = clazz(parameters);
				}
				if (typeof instanze.build === "function") {
					return instanze.build(buildParameters);
				}
				return instanze;
			};
		},
		classes: (dp) => {
			return {};
		},
		products: (dp) => {
			return {};
		}
	}, data);
	// Consume && Format
	return Castelog.metodos.un_call_wait_map([
		["factory", dp.factory()],
		["classes", dp.classes()],
		["products", dp.products()]
	], dp);
};