'use client'

import { WorkoutsContext } from '@/context/WorkoutsContext';
import React, { useContext } from 'react'

const MyPlan = () => {
    const { myPlan = [], setPlan =[] } = useContext(WorkoutsContext) || {};
  return (
    <section>

    </section>
  )
}

export default MyPlan