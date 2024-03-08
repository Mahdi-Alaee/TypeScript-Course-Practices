interface IconPropsSvg {
    children: React.ReactNode;
    svg: boolean;
    png?: never;
  }

interface IconPropsPng {
    children: React.ReactNode;
    svg?: never;
    png: boolean;
  }

export type IconProps = IconPropsPng | IconPropsSvg;