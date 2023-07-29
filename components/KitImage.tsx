'use client';

import { IKContext, IKImage } from 'imagekitio-react';

interface KitImageProps {
    path: string;
    alt: string;
    width: number;
    height: number;
    transformation?: Array<Record<string, string>>;
    className?: string;
}

// TODO: add support for imagekit.io placeholder blur hash effect
export function KitImage({ path, alt, width, height, transformation, className }: KitImageProps) {
    return (
        <IKContext urlEndpoint="https://ik.imagekit.io/l5swuiqdn">
            <IKImage
                path={path}
                alt={alt}
                width={width}
                height={height}
                transformation={transformation}
                className={className}
                loading="lazy"
            />
        </IKContext>
    );
}
