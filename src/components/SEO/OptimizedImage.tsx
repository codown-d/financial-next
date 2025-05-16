"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // 强制要求alt属性
  lazyLoad?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  alt,
  lazyLoad = true,
  priority = false,
  ...props
}) => {
  // 如果不需要懒加载，则设置priority为true
  const imagePriority = !lazyLoad || priority;

  return (
    <Image
      alt={alt}
      priority={imagePriority}
      loading={lazyLoad && !imagePriority ? 'lazy' : 'eager'}
      {...props}
    />
  );
};

export default OptimizedImage;
