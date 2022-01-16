import NextLink from 'next/link';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialIcons({ wdth = 'w-6', ht = 'h-6' }) {
  const styles = {
    icon: `${wdth} ${ht} text-gray-700 transition duration-300 hover:text-gray-900 dark:hover:text-gray-300 opacity-70 hover:opacity-100`,
  };

  return (
    <div className='flex items-center mt-2 space-x-8'>
      <NextLink href='https://github.com/sergiobarria'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaGithub className={styles.icon} />
        </a>
      </NextLink>
      <NextLink href='https://twitter.com/sergioBarria01'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaTwitter className={styles.icon} />
        </a>
      </NextLink>
      <NextLink href='https://www.linkedin.com/in/sergiobarria'>
        <a target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className={styles.icon} />
        </a>
      </NextLink>
    </div>
  );
}

SocialIcons;
