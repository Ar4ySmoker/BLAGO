import React from 'react';
import Link from 'next/link';

const menuItems = [
    { id: 1, title: 'Главная', link: '/' },
    { id: 2, title: 'О нас', link: '/dashboard/invoices' },
    { id: 3, title: 'Контакты', link: '/contacts' },
    // Другие элементы меню
];

const Nav = () => {
    return (
        <ul>
            {menuItems.map((item) => (
                <li key={item.id}>
                    <Link href={item.link}>
                        <p>{item.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
