'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FooterContainer } from './styles';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <FooterContainer>
      <Link href="/">
        <Image src="/images/logo.webp" alt="Rick and Morty" width={150} height={84} />
      </Link>
      <p>Rick and Morty project para prueba de desarrollo</p>
    </FooterContainer>
  );
};

export default Footer;
