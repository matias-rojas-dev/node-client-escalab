import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useCurrentItemHeader = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [key, setKey] = useState(null);
    const [email, setEmail] = useState(undefined);

    const { headerReducer } = useSelector((state) => ({ ...state }));

    const dispatchKey = useCallback(
        (payload) => dispatch({ type: "SET_KEY_ITEM", payload }),
        [dispatch]
    )

    // memoazing
    const checkCurrentPage = useCallback(() => {
        const availablePage = {
            home: "home",
            shop: "shop",
            cart: "cart",
            register: "register",
            login: "login",
            user: "user-dash",
            admin: "user-admin"
        };

        const defaultPage = headerReducer || "home";
        const currentPage = history.location.pathname.split("/")[1];
        const payload = availablePage[currentPage] || defaultPage;
        dispatchKey(payload);
    }, [dispatchKey, headerReducer, history.location.pathname]);

    const checkIfKeyContainsValue = useCallback(
        () => !key && checkCurrentPage(),
        [checkCurrentPage, key]
    );

    useEffect(
        () => checkIfKeyContainsValue(),
        [checkIfKeyContainsValue]
    );

    return { setKey: (key) => setKey(dispatchKey(key)) };

};



export default useCurrentItemHeader