import React, { useContext } from "react";
import { ErrorContext } from "../../stores/error-context";
import * as Styled from "./styled-components";

const Popup = () => {
  const [hasError] = useContext(ErrorContext);

  return (
    <Styled.Popup hasError={hasError}>
      <Styled.PopupText>
        {hasError && "Uh oh!"}
        {!hasError && "Copied 🤙"}
        {hasError === null && null}
      </Styled.PopupText>
    </Styled.Popup>
  );
}

export default Popup;