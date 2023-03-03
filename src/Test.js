let oldobj = [{
    "id": 2,
    "attributes": {
        "name": "kallu",
        "createdAt": "2023-03-02T17:49:59.822Z",
        "updatedAt": "2023-03-02T17:50:00.342Z",
        "publishedAt": "2023-03-02T17:50:00.339Z"
    }
}]
console.log('oldobj', oldobj)

let newobj = oldobj.map((cv, idx, arr) => {
    return {
        id: cv.id,
        name: cv.attributes.name,
        createdAt: cv.attributes.createdAt
    }


})

console.log('newobj', newobj)