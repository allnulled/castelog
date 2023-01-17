Castelog.metodos.un_abstract_factory_design_pattern = function(data) {
	// Collect:
	const dp = {};
	Object.assign(dp, {
		abstractFactory: (dp) => ({ build(productParams) { return productParams; } }),
		factories: (dp) => ({}),
		products: (dp) => ({})
	}, data);
	// Make
	Castelog.metodos.un_call_wait_map([
		["products", dp.products()],
		["factories", dp.factories()],
		["abstractFactory", dp.abstractFactory()]
	], dp);
	dp.abstractFactory.createFactory = function (factoryParams = {}) {
		if(typeof factoryParams !== "object") throw new Error("Required «factoryParams» to be an object in order to «Castelog.metodos.un_abstract_factory_design_pattern»");
		if(typeof factoryParams.type !== "string") throw new Error("Required «factoryParams.type» to be a string in order to «Castelog.metodos.un_abstract_factory_design_pattern»");
		if(!(factoryParams.type in dp.factories)) throw new Error("Required «factoryParams.type» to be a known factory class in order to «Castelog.metodos.un_abstract_factory_design_pattern»");
		const factoryClass = dp.factories[factoryParams.type];
		let factoryInstance = undefined;
		if(typeof factoryClass === "object") { factoryInstance = Object.assign(factoryClass, factoryParams); }
		else if(typeof factoryClass === "function") { factoryInstance = new factoryClass(factoryParams); }
		else throw new Error("Required «factories." + factoryParams.type + "» to be an object or a class in order to «Castelog.metodos.un_abstract_factory_design_pattern»");
		return factoryInstance;
	};
	dp.abstractFactory.createProduct = function (factoryParams = {}, productParams = {}) {
		const factoryInstance = dp.abstractFactory.createFactory(factoryParams);
		if(typeof factoryInstance !== "object") throw new Error("Required «new factories." + factoryParams.type + "(...)» to return an object in order to «Castelog.metodos.un_abstract_factory_design_pattern»");
		if(typeof factoryInstance.build === "function") return factoryInstance.build(productParams);
		return dp.abstractFactory.build(productParams);
	};
	// Use
	return dp;
};