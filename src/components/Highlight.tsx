import { PROJECTS } from '@/data';

import Card from './Card';
import ButtonLink from './ButtonLink';
import PlayIcon from '@/assets/play.svg';

import Image from 'next/image';
import Link from 'next/link';

export interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  highlight: (typeof PROJECTS)[number]['highlights'][number];
}

export default function Highlight({ highlight }: Props) {
  if ('button' in highlight) {
    return (
      <Card key={highlight.title}>
        <h3 className="text-heading-alt text-2xl md:text-3xl">
          {highlight.title}
        </h3>
        <p className="my-6 text-xl leading-relaxed">{highlight.description}</p>
        <ButtonLink
          className="w-full md:w-auto"
          intent="primary"
          href={highlight.button.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {highlight.button.icon}
          {highlight.button.label}
        </ButtonLink>
      </Card>
    );
  }

  if ('thumbnail' in highlight) {
    return (
      <Link
        className="relative block"
        href={highlight.thumbnail.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={highlight.thumbnail.image.src}
          alt={highlight.thumbnail.image.alt}
          placeholder="blur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-35" />
        <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6 text-white md:gap-6 md:p-12">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-black/40">
            <Image src={PlayIcon} alt="" className="h-4 w-4" />
          </div>
          <h3 className="text-heading-alt text-xs leading-relaxed md:text-base">
            {highlight.title}
          </h3>
        </div>
      </Link>
    );
  }

  return null;
}