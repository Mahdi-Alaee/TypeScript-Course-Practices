import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Theme: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        Hello TS💋
      </h2>
    </div>
  );
};

export default Theme;
