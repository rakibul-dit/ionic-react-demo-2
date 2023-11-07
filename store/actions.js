import Store from ".";

export const setIsBack = (v) => {
	Store.update((s) => {
		s.isBack = v;
	});
};

export const setScrollPosition = (key, v) => {
	Store.update((s) => {
		s.yp[key] = v;
	});
};
