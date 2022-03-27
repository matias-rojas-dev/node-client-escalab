import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import firebase from 'firebase';
import { Menu, Badge } from "antd";
import {
    AppstoreAddOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import useCurrentItemHeader from '../../hooks/useCurrentItemHeader';



const Header = () => {

    const dispatch = useDispatch(); //hook to access the actions in the store
    const history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { cartReducer, headerReducer, userReducer } = useSelector((state => ({ ...state }))); //hook to access the redux store's state inside the reducers

    return (
        <div>Header</div>
    )
}

export default Header