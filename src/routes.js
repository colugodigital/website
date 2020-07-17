import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/index'));









const routes = [
    //routes without Layout















    //Root
    { path: '/', component: Root, isWithoutLayout : true }

];

export default routes;
