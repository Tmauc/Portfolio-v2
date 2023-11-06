import { useEffect, useRef } from 'react'

export function useEventListener(
  type,
  listener,
  element
) {
  const listenerRef = useRef(listener)

  useEffect(() => {
    listenerRef.current = listener
  })

  useEffect(() => {
    const el = element === undefined ? window : element

    const internalListener = (ev) => {
      return listenerRef.current(ev)
    }

    el?.addEventListener(
      type,
      internalListener
    )

    return () => {
      el?.removeEventListener(
        type,
        internalListener
      )
    }
  }, [type, element])
}