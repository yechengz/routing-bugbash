/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "./index.css";
import {
  TemplateModule,
} from "@yext/pages";
import { Color, PageLayout } from "./PageLayout";

export const templateForColor = (color: Color): TemplateModule<any, any> => {
    const colorStr = color.toString();
  return {
    getPath: () => colorStr,
    default: (props) => {
      return <PageLayout color={color} {...props}/>;
    },
    getHeadConfig: () => ({
      title: colorStr + " Page",
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: `This is a ${colorStr} page`,
          },
        },
      ],
    }),
  };
};