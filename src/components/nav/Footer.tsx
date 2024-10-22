import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { links } from '../../consts/links';
import Logo from '../../images/logos/app-logo.png';
import { Discord } from '../icons/Discord';
import { Github } from '../icons/Github';
import { Twitter } from '../icons/Twitter';

type FooterLink = {
  title: string;
  url: string;
  external: boolean;
  icon?: ReactNode;
};

const footerLinks: FooterLink[] = [
  { title: 'Twitter', url: links.twitter, external: true, icon: <Twitter fill="#fff" /> },
  { title: 'Discord', url: links.discord, external: true, icon: <Discord fill="#fff" /> },
  { title: 'Github', url: links.github, external: true, icon: <Github fill="#fff" /> },
];

export function Footer() {
  return (
    <footer className="relative text-white">
      <div className="relative z-10 bg-gradient-to-b from-transparent to-black/40 px-8 pb-5 pt-2 sm:pt-0">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-10">
          <FooterLogo />
          <FooterNav />
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="flex items-center justify-center">
       <Link href="/" className="py-2 flex items-center">
        <Image src={Logo} width={63} alt="" />
      </Link>
      <div className="ml-6 space-y-1 text-lg font-medium sm:text-xl">
        <div>Bridge your tokens</div>
        <div>with KalyBridge</div>
      </div>
    </div>
  );
}

function FooterNav() {
  return (
    <nav className="flex text-md font-medium">
      <ul className={`${styles.linkGrid}`}>
        {footerLinks.map((item) => (
          <li key={item.title}>
            <Link
              className={styles.linkItem}
              target={item.external ? '_blank' : '_self'}
              href={item.url}
            >
              {item?.icon && <div className="mr-4 w-5">{item?.icon}</div>}
              <div className="">{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  linkGrid: 'grid grid-cols-3 gap-x-6 gap-y-1.5',
  linkItem: 'flex items-center capitalize text-decoration-none hover:underline underline-offset-2',
};
