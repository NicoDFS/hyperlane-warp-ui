import Image from 'next/image';
import Link from 'next/link';

import { links } from '../../consts/links';
import Github from '../../images/logos/github.svg';
import Logo from '../../images/logos/logo.svg';
import Twitter from '../../images/logos/twitter.svg';

export function Footer() {
  return (
    <footer className="py-4 opacity-80">
      <div className="flex flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="flex items-center pt-2">
          <div className="flex">
            <Image src={Logo} width={45} height={45} alt="" />
          </div>
          <div className="hidden sm:flex flex-col ml-3">
            <p className="text-sm font-light leading-5">
              <span className="text-base font-medium">KalyBridge</span> is powered
              <br />
              by Hyperlane Warp Routes.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <FooterLink href={links.home} text="About" />
            <FooterLink href={links.explorer} text="Explorer" />
            <FooterLink href={links.docs} text="Docs" />
          </div>
          <div className="flex flex-col ml-16">
            <FooterIconLink href={links.twitter} imgSrc={Twitter} text="Twitter" />
            <FooterIconLink href={links.github} imgSrc={Github} text="Github" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  const aClasses =
    'mt-1.5 text-sm hover:underline underline-offset-4 hover:opacity-70 transition-all';

  if (href[0] === '/') {
    return (
      <Link href={href} className={aClasses}>
        {text}
      </Link>
    );
  } else {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={aClasses}>
        {text}
      </a>
    );
  }
}

function FooterIconLink({ href, imgSrc, text }: { href: string; imgSrc: any; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1.5 flex items-center hover:underline underline-offset-4 hover:opacity-70 transition-all"
    >
      <Image src={imgSrc} width={18} height={18} alt="" />
      <span className="ml-2.5 text-sm">{text}</span>
    </a>
  );
}
