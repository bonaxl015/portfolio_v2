import type { MouseEvent } from 'react';

export function followUnlessSelecting(event: MouseEvent<HTMLAnchorElement>) {
  if (window.getSelection()?.toString()) event.preventDefault();
}
