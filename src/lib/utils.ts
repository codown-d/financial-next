
import React from 'react';
import { Button } from 'antd';
import { flatMap } from 'lodash';

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children = typeof item.children === 'string' && item.children.match(isImg)
    ? React.createElement('img', { src: item.children, alt: 'img' })
    : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children
    });
  }
  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
export function toQuery(obj:any) {
  const params = new URLSearchParams(obj);
  return '?'+params.toString();
}
export const insertAfterOddIndices = (array, elementToInsert) => {
  return flatMap(array, (value, index:number) => {
      return [value, ...(index % 2 === 0 ? [elementToInsert] : [])];
  });
};