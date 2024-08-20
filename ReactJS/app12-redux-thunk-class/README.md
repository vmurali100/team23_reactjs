
1. Created a Blank Project
2. Install redux in npm install redux react-redux
3. Create a file Called Store 
4. Create a store with createStore Method in react-redux
        export const Store = createStore(rootReducer);
5. To Create a Store , we need to have a reducer which handles all the Business Logic
6. After Creating the Store , Go to Index.js Use <Provider> from React-redux , add the Store to the Project as follows 
             <Provider store={Store}>
                <App />
            </Provider>
7. Consume the Store in Component as follows
     const storeDetails = useSelector((store)=>{
        return store.users
    })
    
