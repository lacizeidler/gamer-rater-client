export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const createCategory = (category) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(category)
    }
    return fetch(`http://localhost:8000/categories`, fetchOptions)
    .then(response => response.json())
}