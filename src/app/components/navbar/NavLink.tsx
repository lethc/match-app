// We need to tell nextjs that this is a client navigation
"use client";

import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// import { Container } from './styles';

export default function NavLink ({
    href,
    label,
}: Props) {
    const pathname = usePathname();
    console.log("pathname:", pathname);
    return (
        <NavbarItem
            isActive={pathname === href}
            as = {Link}
            href={href}
        >
            {label}
        </NavbarItem>
    );
}

