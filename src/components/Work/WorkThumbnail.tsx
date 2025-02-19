'use client';

import { PROJECTS } from '@/data';
import { cx } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Button from '../Button';
import CircleArrowIcon from '@/assets/circle-arrow.svg';
import { imageVariants } from '@/variants';

type Props = (typeof PROJECTS)[number] &
  React.AllHTMLAttributes<HTMLDivElement>;

const MotionLink = motion.create(Link);
const MotionImage = motion.create(Image);

export default function WorkThumbnail({ className, thumbnail, slug }: Props) {
  return (
    <MotionLink
      className={cx('relative block h-[450px] w-full md:h-[750px]', className)}
      href={`/work/${slug}`}
      whileHover="hover"
    >
      <MotionImage
        src={thumbnail.image.src}
        alt={thumbnail.image.alt}
        className="absolute inset-0 h-full w-full transform-gpu object-cover object-top"
        placeholder="blur"
        variants={imageVariants}
      />
      <div className="absolute inset-0 bg-black opacity-35" />
      <div className="absolute bottom-8 left-8 text-white md:bottom-20 md:left-20">
        <p className="leading-normal md:text-2xl md:leading-relaxed">
          {thumbnail.subtitle}
        </p>
        <h3 className="text-heading-alt mb-6 text-2xl md:mb-10 md:text-5xl">
          {thumbnail.title}
        </h3>
        <Button intent="primary" className="gap-2 py-2">
          <Image
            src={CircleArrowIcon}
            alt=""
            className="w-4 -rotate-90 md:w-7"
          />
          {thumbnail.label}
        </Button>
      </div>
    </MotionLink>
  );
}
