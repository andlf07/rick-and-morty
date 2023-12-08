'use client';
import { useDarkTheme } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FavoriteButton } from '..';
import { HeaderButtonsContainer, HeaderContainer, HeaderContent, ToggleTheme } from './styles';

interface Props {}

const Header: React.FC<Props> = () => {
  const { handleDarkTheme } = useDarkTheme();


  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src="/images/logo.webp" alt="Rick and Morty" width={150} height={84} />
        </Link>
        <HeaderButtonsContainer>
          <FavoriteButton />
          <ToggleTheme>
            <input type="checkbox" className="input" onClick={handleDarkTheme} />
            <span className="slider"></span>
          </ToggleTheme>
        </HeaderButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
