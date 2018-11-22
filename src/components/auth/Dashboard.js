import React from 'react';
import { Pie } from '@nivo/pie';

export default function Dashboard() {
  return (
    <Pie
      width={500}
      height={500}
      margin={{
        top: 80,
        right: 120,
        bottom: 80,
        left: 120
      }}
      data={[
        {
          id: 'hack',
          label: 'hack',
          value: 326
        },
        {
          id: 'go',
          label: 'go',
          value: 175
        },
        {
          id: 'lisp',
          label: 'lisp',
          value: 485
        },
        {
          id: 'scala',
          label: 'scala',
          value: 305
        },
        {
          id: 'rust',
          label: 'rust',
          value: 252
        },
        {
          id: 'erlang',
          label: 'erlang',
          value: 483
        },
        {
          id: 'haskell',
          label: 'haskell',
          value: 306
        },
        {
          id: 'c',
          label: 'c',
          value: 42
        },
        {
          id: 'python',
          label: 'python',
          value: 444
        }
      ]}
      animate
      innerRadius={0.5}
    />
  );
}
