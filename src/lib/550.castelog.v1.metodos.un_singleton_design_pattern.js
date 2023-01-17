Castelog.metodos.un_singleton_design_pattern = function(data) {
	// Collect:
	const dp = {};
	Object.assign(dp, {
		getter: (dp) => {
			return () => {
				if(typeof dp.value === "undefined") {
					dp.setter();
				}
				return dp.value;
			};
		},
		setter: (dp) => {
			return () => {
				dp.value = undefined;
			}
		},
		value: (dp) => 500
	}, data);
	// Consume && Format
	return Castelog.metodos.un_call_wait_map([
		[ "value", dp.value() ],
		[ "setter", dp.setter() ],
		[ "getter", dp.getter() ]
	], dp);
	return dp;
};