'use client';

import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const ICON = require('../assets/web-design.json');

export default function PlayOnce() {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return <Player ref={playerRef} icon={ICON} />;
}
