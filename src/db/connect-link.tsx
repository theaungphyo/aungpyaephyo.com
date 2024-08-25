import Github from '@/components/icons/github';
import GitLab from '@/components/icons/gitlab';
import Facebook from '@/components/icons/social/facebook';
import Gmail from '@/components/icons/social/gmail';
import Instagram from '@/components/icons/social/instagram';
import X from '@/components/icons/social/x';
import { appConfig } from '../../app.config';

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: 'Partnerships',
    href: `mailto:${appConfig.mail}`,
    icon: <Gmail className='size-5' />,
  },
  {
    label: 'Twitter',
    href: appConfig.socials.twitter,
    icon: <X className='fill-black dark:fill-white' />,
  },
  {
    label: 'GitHub',
    href: appConfig.socials.github,
    icon: <Github />,
  },
  {
    label: appConfig.socials.gitlab,
    href: 'https://gitlab.com/aungpyaephyo1412',
    icon: <GitLab />,
  },
  {
    label: 'Instagram',
    href: appConfig.socials.instagram,
    icon: <Instagram className='size-5' />,
  },
  {
    label: 'Facebook',
    href: appConfig.socials.fb,
    icon: <Facebook />,
  },
];

export default ConnectLinks;
