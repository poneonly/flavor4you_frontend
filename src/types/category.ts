export type SubCategory = {
  label: string;
  href: string;
};

export type CategoryItemProps = {
  title: string;
  href?: string;
  items?: SubCategory[];
  isScrolled?: boolean;
};

export type RawCategory = {
  id: string;   // main category
  name: string; // sub category
};

export type Category = {
  title: string;
  items?: SubCategory[];
};

export type CategoryBarProps = {
  isScrolled?: boolean;
};


