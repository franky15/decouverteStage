import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Conclusion from './Conclusion';
import Layout from './Layout';
import Acceuil from './Acceuil';
import Error from './Error';

const Router = () => {
    return (
        <Routes>

            <Route element={<Layout/>} >
             

                <Route  index element={<Acceuil/>} />
                <Route  path="portfolio" element={<Portfolio/>} />
                <Route  path="conclusion" element={<Conclusion/>} />
                <Route  path="acceuil" element={<Acceuil/>} />
                <Route  path="*" element={<Error/>} />

                
            </Route>

        </Routes>
    );
};

export default Router;