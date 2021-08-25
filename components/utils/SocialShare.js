import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const SocialShare = ({ url }) => {
  const size = 30;

  return (
    <div className="flex items-center justify-end my-4 space-x-2">
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={size} />
      </WhatsappShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={size} />
      </LinkedinShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={size} />
      </RedditShareButton>
    </div>
  );
};

export default SocialShare;
