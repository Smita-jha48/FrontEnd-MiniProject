import React, { useState } from 'react'

import Topbar from '../../components/TopBar/topbar'
import Title from '../../components/Title/title'
import StoryInput from '../../components/StoryInput/storyInput';

export default function Home() {
    return (
      <>
        <Topbar />
        <Title />
        <StoryInput />
      </>
    );
  }