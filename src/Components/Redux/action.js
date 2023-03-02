export const addData = (data) => {
    console.log("action called", data)
    return {
        type: "ADD_DATA",
        payload: data
    }

}
export const deleteData = (id) => {
    return {
        type: "DEL_DATA",
        payload: id
    }
}
export const updateData = (userInfo) => {
    console.log("action called", userInfo)
    return {
        type: "UPDATE_DATA",
        payload: userInfo
    }
}
export const filterData = (value) => {
    console.log("action called", value)
    return {
        type: "FILTER_DATA",
        payload: value
    }
}