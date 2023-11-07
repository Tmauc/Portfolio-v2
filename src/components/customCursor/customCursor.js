import { useState, useEffect, useCallback, useRef } from 'react';

import { useEventListener } from 'hooks/useEventListener';

import { CursorInner, CursorOuter } from './customCursor.style';

const TRAILING_SPEED = 8;
const INNER_SIZE = 4;
const INNER_SCALE = 1;
const OUTER_SIZE = 50;
const OUTER_SCALE = 0.5;

const CLICKABLES = [
  'a',
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  'label[for]',
  'select',
  'textarea',
  'button',
  '.link',
];

function CustomCursor() {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  // Outer Cursor Animation Delay
  const animateOuterCursor = useCallback(
    (time) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / TRAILING_SPEED;
        coords.y += (endY.current - coords.y) / TRAILING_SPEED;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef] // eslint-disable-line
  );

  // Outer cursor RAF setup / cleanup
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  const getScaleAmount = (orignalSize, scaleAmount) => {
    return `${parseInt(String(orignalSize * scaleAmount))}px`;
  };

  // Scales cursor by HxW
  const scaleBySize = useCallback((cursorRef, orignalSize, scaleAmount) => {
    if (cursorRef) {
      cursorRef.style.height = getScaleAmount(orignalSize, scaleAmount);
      cursorRef.style.width = getScaleAmount(orignalSize, scaleAmount);
    }
  }, []);

  // Mouse Events State updates
  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseover', onMouseEnterViewport);
  useEventListener('mouseout', onMouseLeaveViewport);

  // Cursors Hover/Active State
  useEffect(() => {
    if (isActive) {
      scaleBySize(cursorInnerRef.current, INNER_SIZE, INNER_SCALE);
      scaleBySize(cursorOuterRef.current, OUTER_SIZE, OUTER_SCALE);
    } else {
      scaleBySize(cursorInnerRef.current, INNER_SIZE, 1);
      scaleBySize(cursorOuterRef.current, OUTER_SIZE, 1);
    }
  }, [scaleBySize, isActive]);

  // Cursors Click States
  useEffect(() => {
    if (isActiveClickable) {
      scaleBySize(cursorInnerRef.current, INNER_SIZE, INNER_SCALE * 4);
      scaleBySize(cursorOuterRef.current, OUTER_SIZE, OUTER_SCALE * 0);
    } else {
      scaleBySize(cursorInnerRef.current, INNER_SIZE, 1);
      scaleBySize(cursorOuterRef.current, OUTER_SIZE, 1);
    }
  }, [scaleBySize, isActiveClickable]);

  // Cursor Visibility Statea
  useEffect(() => {
    if (cursorInnerRef.current == null || cursorOuterRef.current == null)
      return;

    if (isVisible) {
      cursorInnerRef.current.style.opacity = '1';
      cursorOuterRef.current.style.opacity = '1';
    } else {
      cursorInnerRef.current.style.opacity = '0';
      cursorOuterRef.current.style.opacity = '0';
    }
  }, [isVisible]);

  // Click event state updates
  useEffect(() => {
    const clickableEls = document.querySelectorAll(
      CLICKABLES.map((clickable) =>
        typeof clickable === 'object' && clickable?.target
          ? clickable.target
          : clickable ?? ''
      ).join(',')
    );

    clickableEls.forEach((el) => {
      el.style.cursor = 'none';

      el.addEventListener('mouseover', () => {
        setIsActive(true);
      });
      el.addEventListener('click', () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true);
      });
      el.addEventListener('mouseup', () => {
        setIsActive(true);
      });
      el.addEventListener('mouseout', () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true);
        });
        el.removeEventListener('click', () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener('mouseup', () => {
          setIsActive(true);
        });
        el.removeEventListener('mouseout', () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  useEffect(() => {
    if (typeof window === 'object') {
      document.body.style.cursor = 'none';
    }
  }, []);

  return (
    <>
      <CursorOuter ref={cursorOuterRef} />
      <CursorInner ref={cursorInnerRef} />
    </>
  );
}

export default CustomCursor;
