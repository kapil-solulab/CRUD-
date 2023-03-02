const initialState = {
    user: [],
    filterUser:[],
    isFilter : false
    
}

const userReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case "ADD_DATA":
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case "DEL_DATA":
            return {
                ...state,
                user: state.user.filter((item) => item.id !== action.payload),
                filterUser: state.filterUser.filter((item) => item.id !== action.payload)
            }

        case "UPDATE_DATA":
            console.log("id", action.payload)
            return {
                ...state,
                user: state.user.map((item) => item.id === action.payload.id ? action.payload : item),
                filterUser: state.filterUser.map((item) => item.id === action.payload.id ? action.payload : item)
            }
        case "FILTER_DATA":
            return {
                ...state,
               filterUser: state.user.filter((item) => item.firstName.toLowerCase().includes(action.payload.toLowerCase())),
               isFilter : action.payload.length > 0 ?  true : false
                // const filteredUsers = state.user.filter((item) =>
                //     item.firstName.toLowerCase().includes(action.payload.toLowerCase())
                //     );

                // return {
                //     ...state,
                //     filteredUsers:
                //     action.payload.length > 0 ?  filteredUsers : [...state.user]
            };






        default:
            return state;
    }

}

export default userReducer;