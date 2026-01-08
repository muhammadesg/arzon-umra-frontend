import React from "react";
import { Button as AntdButton } from "antd";

export interface ButtonProps {
  htmlType?: "button" | "reset" | "submit";
  block?: boolean;
  size?: "large" | "middle" | "small";
  label?: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  title?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}

export const Button = ({
  disabled,
  label,
  className,
  htmlType,
  block,
  size,
  title,
  style,
  icon,
}: ButtonProps) => {
  return (
    <AntdButton
      disabled={disabled}
      className={className}
      htmlType={htmlType}
      block={block}
      size={size}
      title={title}
      style={style}
      icon={icon}
    >
      {label && <span>{label}</span>}
    </AntdButton>
  );
};
