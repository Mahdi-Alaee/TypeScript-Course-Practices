import { IconProps } from "./Icon.types";



function Icon({ children, svg, png }: IconProps) {
  return (
    <div>
      {svg && <h2>Icon svg</h2>}
      {png && <h2>Icon png</h2>}
      {children}
    </div>
  );
}

export default Icon;
