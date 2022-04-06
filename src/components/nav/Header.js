import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import firebase from 'firebase';
import { Menu, Badge } from "antd";
import {
    AppstoreOutlined,
    SettingOutlined,
    UserOutlined,
    UserAddOutlined,
    LogoutOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,

} from "@ant-design/icons";
import useCurrentItemHeader from '../../hooks/useCurrentItemHeader';
import Search from '../../components/forms/Search'

const { SubMenu, Item } = Menu;


const Header = () => {
    const { setKey } = useCurrentItemHeader();
    const dispatch = useDispatch(); //hook to access the actions in the store
    const history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { cart, header, user } = useSelector((state => ({ ...state }))); //hook to access the redux store's state inside the reducers

    const logout = () => {
        firebase.auth().signOut();
        dispatch({ type: "LOGOUT", payload: null });
        history.push('/login')
    }

    return (
        <Menu
            onClick={({ key }) => setKey(key)}
            selectedKeys={[header]}
            mode="horizontal"
        >
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link to="/">Home</Link>
            </Item>

            <Item key="shop" icon={<ShoppingOutlined />}>
                <Link to="/shop">Shop</Link>
            </Item>

            <Item key="cart" icon={<ShoppingCartOutlined />}>
                <Link to="/cart">
                    <Badge
                        count={cart.length}
                        offset={[9, 0]}
                    >
                        Cart
                    </Badge>
                </Link>
            </Item>

            {!user && (
                <>
                    <Item
                        key="register"
                        icon={<UserAddOutlined />}
                        className="float-right"
                    >
                        <Link to="/register">
                            Register
                        </Link>
                    </Item>

                    <Item
                        key="login"
                        icon={<UserOutlined />}
                        className="float-right"
                    >
                        <Link to="/login">
                            Login
                        </Link>
                    </Item>
                </>
            )}

            {user && (
                <SubMenu
                    key="submenu"
                    icon={<SettingOutlined />}
                    title={user.email && user.email.split("@")[0]}
                    className="float-right"
                >
                    {
                        user && user.role === "subscriber" && (
                            <Item key="user-dash">
                                <Link to="/user/history">Dashboard</Link>
                            </Item>
                        )
                    }

                    {
                        user && user.role === "admin" && (
                            <Item key="user-admin">
                                <Link to="/admin/dashboard">Dashboard</Link>
                            </Item>
                        )
                    }

                    <Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
                        Logout
                    </Item>
                </SubMenu>
            )}

            <span className='float-right p-1'>
                <Search />
            </span>
        </Menu>
    )
}

export default Header