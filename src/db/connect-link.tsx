import Github from '@/components/icons/github';
import GitLab from '@/components/icons/gitlab';
import Gmail from '@/components/icons/social/gmail';
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
  // {
  //   label: 'LinkedIn',
  //   href: appConfig.socials.linkedin,
  //   icon: <Linkedin />,
  // },
  {
    label: 'GitHub',
    href: appConfig.socials.github,
    icon: <Github />,
  },
  {
    label: 'Gitlab',
    href: appConfig.socials.gitlab,
    icon: <GitLab />,
  },
];

export default ConnectLinks;
