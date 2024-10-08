import React from 'react';
import { Outlet } from 'react-router-dom';
import {PublicMenu} from '../components/PublicMenu';

export const PublicLayout = () => {
    return (
        <div>
            <PublicMenu />
            <div>
                <Outlet /> {/* Aquí se renderizan las páginas públicas */}
            </div>
        </div>
    );
};

