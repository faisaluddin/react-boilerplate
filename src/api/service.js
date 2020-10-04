import { headers, baseUrl } from "./properties";

export default class Service {
    static async post(dispatch, url, body, types) {
        dispatch({ type: types.start });
        let response = await fetch(baseUrl() + url, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(body),
        });

        this.dispatchResponse(dispatch, response, types);
    }

    static async put(dispatch, url, body, types) {
        dispatch({ type: types.start });
        let response = await fetch(baseUrl() + url, {
            method: "PUT",
            headers: headers(),
            body: JSON.stringify(body),
        });

        this.dispatchResponse(dispatch, response, types);
    }

    static async get(dispatch, url, types) {
        dispatch({ type: types.start });
        let response = await fetch(baseUrl() + url, {
            headers: headers(),
        });

        this.dispatchResponse(dispatch, response, types);
    }

    static async dispatchResponse(dispatch, response, types) {
        try {
            response.ok
                ? dispatch({ type: types.success, response: await response.json() })
                : dispatch({ type: types.failure, response: await response.json() });
        } catch (e) {
            return { error: e };
        }
    }
}
