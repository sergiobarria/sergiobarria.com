import NextLink from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const SocialIcons = ({ width = 8, height = 8 }) => {
  const styles = {
    icon: `w-${width} h-${height} text-gray-700 hover:text-main opacity-70 hover:opacity-100`,
  };

  return (
    <div className="flex items-center mt-10 space-x-8">
      <NextLink href="mailto:sbarria.dev@gmail.com">
        <a target="_blank" rel="noopener noreferrer">
          <GrMail className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://github.com/sergiobarria">
        <a target="_blank" rel="noopener noreferrer">
          <FaGithub className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://www.instagram.com/thecodingscript/">
        <a target="_blank" rel="noopener noreferrer">
          <FaInstagram className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://twitter.com/sergioBarria01">
        <a target="_blank" rel="noopener noreferrer">
          <FaTwitter className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/sergiobarria">
        <a target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`${styles.icon}`} />
        </a>
      </NextLink>
    </div>
  );
};

export default SocialIcons;
