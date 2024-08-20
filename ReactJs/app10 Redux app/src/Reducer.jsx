const defaultstate = {
    users:['Shekar', 'Murali']
}

export const rootReducer = (state = defaultstate, action) => {
    switch (action.type) {
        case 'CREATE':
            break;
        case 'RED':
            break;
        case 'UPDATE':
            break;
        case 'DELETE':
            break;
        default:
            return state;
    }
}