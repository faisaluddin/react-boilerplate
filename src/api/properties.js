export function baseUrl() {
    if (process.env.NODE_ENV === "development")
        return "http://localhost:8000/api/";
    else return "";
}

export function headers() {
    const obj = {
        "Content-Type": "application/json",
    };
    return obj;
}
