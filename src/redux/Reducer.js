const initialState={
    loading:false,
    Add_to_cart:[]
}

export const Reducer=(state=initialState,Action)=>{
    switch(Action.type) {
        case "ADD_TO_CART":
        return{
            ...state,
            Add_to_cart:[...state.Add_to_cart,Action.payload]
            
        };
        case "UPDATE_CART":
            return{
                ...state,
                Add_to_cart:state.Add_to_cart.map(product=>product._id ===Action.payload._id ?{...product,quantity:Action.payload.quantity}:product),  
            };
        case "DELETE_CART":
            return{
                ...state,
                Add_to_cart:state.Add_to_cart.filter(product=>product._id !== Action.payload._id),
            };
       
       default:return state;

    }   
}