import React from "react";

export const Home = React.lazy(/* webpackChunkName: "main" */ /* webpackPrefetch: true */() => import('@/pages/home'));
export const Favourites = React.lazy(/* webpackChunkName: "favourites" */ /* webpackPrefetch: true */() => import('@/pages/favourites'));
export const WatchLater = React.lazy(/* webpackChunkName: "watchLater" */ /* webpackPrefetch: true */() => import('@/pages/watchLater'));

export const routes = [{
    path: '/',
    element: <Home/>,
}, {
    path: '/favourites',
    element: <Favourites/>,
}, {
    path: '/watchLater',
    element: <WatchLater/>,
}];