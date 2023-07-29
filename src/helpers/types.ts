export type NavbarLinkType = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export type NewsType = {
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt?: Date;
  content?: string;
};
