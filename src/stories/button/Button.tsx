import React from "react";
import "./button.css";

interface ButtonProps {
	type: "default" | "danger" | "primary" | "secundary" | "outline";
	size: "xsmall" | "small" | "base";
	label: string;
	onClick?: () => void;
}

enum types {
	default = "bg-gray-600 text-white",
	danger = "bg-red-600 text-white",
	primary = "bg-blue-600 text-white",
	secundary = "bg-green-600 text-white",
	outline = "bg-white border-2 border-solid border-gray-600 text-gray-600",
}

enum sizes {
	xsmall = "xsmall text-xs leading/4 font-normal",
	small = "small text-sm leading/5 font-normal",
	base = "base text-base leading/6 font-normal",
}

export const Button = ({ label = "Button", type = "primary", size = "base", ...props }: ButtonProps) => {
	const defaultStyling = "px-6 py-2.5 rounded-md";
	return (
		<button className={`${defaultStyling} ${types[type]} ${sizes[size]}`} {...props}>
			{label}
		</button>
	);
};
