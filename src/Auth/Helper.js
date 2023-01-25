export async function fetchData(url, token, data = "") {
    try {
        console.log(url, "newUrl");
        const getData = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: data
        });
        return getData;
    } catch (error) {
        console.log("errorDetails", "error");
        return 'errorDetails';
    }
}
