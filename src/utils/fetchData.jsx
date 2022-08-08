export const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": "43128831d2msh6c9edd68097a267p1545e3jsn7658546f7215",
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
