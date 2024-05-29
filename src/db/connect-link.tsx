import Github from '@/components/icons/github';
import GitLab from '@/components/icons/gitlab';
import Facebook from '@/components/icons/social/facebook';
import Gmail from '@/components/icons/social/gmail';
import Instagram from '@/components/icons/social/instagram';
import Skype from '@/components/icons/social/skype';
import WhatsApp from '@/components/icons/social/whatapp';
import X from '@/components/icons/social/x';

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: 'Partnerships',
    href: 'mailto:aungpyaephyo1412@gmail.com',
    icon: <Gmail className='size-5' />,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/typle_x',
    icon: <X className='fill-black dark:fill-white' />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aungpyaephyo1412',
    icon: <Github />,
  },
  {
    label: 'Gitlab',
    href: 'https://gitlab.com/aungpyaephyo1412',
    icon: <GitLab />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aungpyaephyo1412/',
    icon: <Instagram className='size-5' />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/aungpyaephyo1412/',
    icon: <Facebook />,
  },
  {
    label: 'Skype',
    href: 'https://join.skype.com/invite/xbP2qjZVjZij',
    icon: <Skype />,
  },
  {
    label: 'WhatsApp',
    href: 'https://call.whatsapp.com/voice/bEq8hy0ahzTmUGcx4LhQMc',
    icon: <WhatsApp />,
  },
];

export default ConnectLinks;
