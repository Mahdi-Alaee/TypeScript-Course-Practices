type Horizontal = "left" | "right" | "center";
type Vertical = "top" | "bottom" | 'center';

type Positions =  Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center'

interface IconPropsSvg {
  children: React.ReactNode;
  svg: boolean;
  png?: never;
  position: Positions;
}

interface IconPropsPng {
  children: React.ReactNode;
  svg?: never;
  png: boolean;
  position: Positions;
}

export type IconProps = IconPropsPng | IconPropsSvg;
