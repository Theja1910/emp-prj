export async function fetchData(url, token, data = "") {
    try {
        console.log(url, "newUrl");
        const getData = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });
        return getData;
    } catch (error) {
        console.log("errorDetails", "error");
        return 'errorDetails';
    }
}

export async function getFetchData(url) {
    try {
        console.log(url, "newUrl");
        const getData = await fetch(url);
        const dataJson=await getData.json()
        return dataJson;
    } catch (error) {
        console.log("errorDetails", "error");
        return 'errorDetails';
    }
}

