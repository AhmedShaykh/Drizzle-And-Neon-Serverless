"use client";
import React, { TextareaHTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { twMerge } from "tailwind-merge";

export interface TextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> { };

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ name, onBlur, onChange, value, className }, ref
    ) => {
        return (
            <TextareaAutosize
                className={twMerge(
                    "bg-transparent w-full h-24 p-4 text-lg outline-0",
                    className
                )}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                name={name}
                ref={ref}
            />
        );
    }
);

TextArea.displayName = "TextArea";

export default TextArea;