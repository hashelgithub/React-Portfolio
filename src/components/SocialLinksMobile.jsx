// SocialLinksMobile.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinksMobile = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com',
      style: 'rounded-tl-md rounded-bl-md',
    },
    {
      id: 2,
      child: (
        <>
            <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/hashelgithub',
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:shenukahashelfdo@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-tr-md rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 md:hidden">
      <div className="flex space-x-2">
        {links.map(({ id, child, href, style, download }) => (
          <a
            key={id}
            href={href}
            className={`text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-600 duration-300 ${style}`}
            download={download}
            target="_blank"
            rel="noopener noreferrer"
          >
            {child}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksMobile;
