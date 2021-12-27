/**
 * @license
 * Copyright Rismun. All Rights Reserved.
 *
 * Use of this source code is governed by a Rismun private license that can be
 * found in the LICENSE file at http://www.rismun.com/licenses/flexaa-license
 */

/**
 * @todo
 * [Properties]
 */
 import React, { useState } from "react";
 // import "./style.css";
 
 interface ICardProps {
     maxLength?: number
     style?: {
         rootStyles?: object,
         labelStyles?: object,
         inputStyles?: object
     }
     className?: string | {
         rootClassName?: string,
         labelClassName?: string,
         inputClassName?: string
     },
     splitter?: string,
     title?: string
 }
 export const Card = ({
     maxLength,
     style: styleProps,
     className,
     splitter,
     title
 }: ICardProps) => {
 
     const [value, setValue] = useState("");
 
 
     const changeFormat = (e: any) => {
 
         const regexp = new RegExp(`[0-9*/]`)
         const chars = e.target.value.split("");
         let value = '';
 
         for (const char of chars) {
             if (regexp.test(char)) {
                 value += char;
 
             }
         }
         console.log(value)
         setValue(value ? (value as any).match(new RegExp('.{1,4}', 'g')).join(splitter || "-") : "")
     }
 
     const rootStyles = styleProps && styleProps.rootStyles ? { ...styleProps.rootStyles } : {};
     const labelStyles = styleProps && styleProps.labelStyles ? { ...styleProps.labelStyles } : {};
     const inputStyles = styleProps && styleProps.inputStyles ? { ...styleProps.inputStyles } : {};
     const rootClassName = typeof className === "string" ? className : className ? className.rootClassName : "";
     const labelClassName = typeof className === "string" ? "" : className ? className.labelClassName : "";
     const inputClassName = typeof className === "string" ? "" : className ? className.inputClassName : "";
 
 
     return (
         <div
             className={"label-className" + " " + rootClassName}
             style={{ width: "200px", ...rootStyles }}
         >
             {title && <label style={{
                 display: "block",
                 margin: "5px",
                 ...labelStyles
             }}
                 className={"label-className" + " " + labelClassName}
 
             >{title}</label>}
             <input
                 className={"input-className" + " " + inputClassName}
                 style={{ width: "100%", padding: "5%", borderRadius: "5px", ...inputStyles }}
                 value={value || ""}
                 onChange={changeFormat}
                 maxLength={maxLength || 19}
 
 
 
             />
         </div >
 
     )
 }
 