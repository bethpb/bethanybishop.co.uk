'use client';

import { useRef, useState, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import Image from 'next/image';
import { cx } from 'class-variance-authority';

import { PROJECTS } from '@/data';
import ArrowIcon from '@/assets/arrow.svg';
import WorkThumbnail from './WorkThumbnail';

import styles from './styles.module.css';
import Button from '../Button';

const VISIBILITY_THRESHOLD = 0.75;

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndexFromScroll = useCallback(() => {
    const scrollElement = scrollRef.current;
    const wrapper = wrapperRef.current;
    if (!scrollElement || !wrapper) return;

    const containerLeft = scrollElement.scrollLeft;
    const items = Array.from(wrapper.children);

    const newIndex = items.findIndex((item) => {
      const rect = item.getBoundingClientRect();
      const itemLeft = rect.left - wrapper.getBoundingClientRect().left;
      const itemCenter = itemLeft + rect.width * VISIBILITY_THRESHOLD;
      return itemCenter > containerLeft;
    });

    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
    }
  }, []);

  const [debouncedUpdateIndex] = useDebounce(updateIndexFromScroll, 150);

  const handleScroll = useCallback(
    (direction: 'prev' | 'next') => {
      const scrollElement = scrollRef.current;
      const wrapper = wrapperRef.current;
      if (!scrollElement || !wrapper) return;

      const newIndex =
        direction === 'next'
          ? Math.min(currentIndex + 1, PROJECTS.length - 1)
          : Math.max(currentIndex - 1, 0);

      const targetItem = wrapper.children[newIndex];
      const targetLeft =
        targetItem.getBoundingClientRect().left -
        wrapper.getBoundingClientRect().left;

      scrollElement.scrollTo({ left: targetLeft, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    },
    [currentIndex],
  );

  return (
    <>
      <div id="work" className="-mt-10 md:-mt-20" />
      <div className={styles.content}>
        <div className="hidden justify-end gap-2 md:flex">
          <Button
            intent="primary"
            className={cx('aspect-square w-16 transition-opacity', {
              'cursor-not-allowed opacity-50': currentIndex === 0,
            })}
            onClick={() => currentIndex > 0 && handleScroll('prev')}
          >
            <Image src={ArrowIcon} alt="" className="w-4 rotate-180" />
          </Button>
          <Button
            intent="primary"
            className={cx('aspect-square w-16 transition-opacity', {
              'cursor-not-allowed opacity-50':
                currentIndex === PROJECTS.length - 1,
            })}
            onClick={() =>
              currentIndex < PROJECTS.length - 1 && handleScroll('next')
            }
          >
            <Image src={ArrowIcon} alt="" className="w-4" />
          </Button>
        </div>
        <div
          className={styles.gallery}
          ref={scrollRef}
          onScroll={debouncedUpdateIndex}
        >
          <div className={styles.wrapper} ref={wrapperRef}>
            {PROJECTS.map((project) => (
              <WorkThumbnail
                key={project.slug}
                className={styles.item}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
