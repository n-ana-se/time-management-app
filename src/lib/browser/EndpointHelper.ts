export const getJSON = async <T>(url: string): Promise<T | undefined> => {
	return await toJSON<T>(fetch(`/api/${url}`));
};

export const toJSON = async <T>(fetchRequest: Promise<Response>): Promise<T | undefined> => {
	return fetchRequest.then((res) => (res.ok ? res.json().then((json) => json) : undefined));
};

export const postJSON = <T>(url: string, data: T) => {
	return fetch(`/api/${url}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
};

export const putJSON = <T>(url: string, data: T) => {
	return fetch(`/api/${url}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	});
};
