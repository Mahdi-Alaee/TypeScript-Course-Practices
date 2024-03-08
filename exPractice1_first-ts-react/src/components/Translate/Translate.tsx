import { TranslateProps } from "./Translate.types";

function Translate({ arg }: TranslateProps) {
  return (
    <div>
      <h2>Translate: {arg}</h2>
    </div>
  );
}

export default Translate;
