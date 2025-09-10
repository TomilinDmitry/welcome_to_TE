import { useState, useCallback, memo } from "react";

const useHoverActive = (callback) => {
  // хук с основной логикой
  const [isActive, setActive] = useState(false);
  const mouseEnterHandler = useCallback(() => {
    setActive(true);
    callback();
  }, [callback]);
  return { isActive, mouseEnterHandler };
};

const BaseBlock = memo(({ mouseEnterCallbak, children }) => {
  // переиспользуемый блок
  const { isActive, mouseEnterHandler } = useHoverActive(mouseEnterCallbak);
  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
});

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </BaseBlock>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <p>{content}</p>
  </BaseBlock>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BaseBlock>
);
