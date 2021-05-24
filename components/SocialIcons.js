import NextLink from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const SocialIcons = () => {
  const styles = {
    icon: 'w-6 h-6 text-gray-700 hover:text-skin-accent',
  };

  return (
    <div className="flex items-center mb-3 space-x-8">
      <NextLink href="mailto:sbarria.dev@gmail.com">
        <a>
          <GrMail className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://github.com/sergiobarria">
        <a>
          <FaGithub className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://www.instagram.com/thecodingscript/">
        <a>
          <FaInstagram className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://twitter.com/sergioBarria01">
        <a>
          <FaTwitter className={`${styles.icon}`} />
        </a>
      </NextLink>
      <NextLink href="https://www.linkedin.com/in/sergio-barria-8771b3213/">
        <a>
          <FaLinkedin className={`${styles.icon}`} />
        </a>
      </NextLink>
    </div>
  );
};

export default SocialIcons;
