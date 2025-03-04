import React from 'react';
import Project from '@/components/pages/Project';
import { H2, HL } from '@/components/text/Text';
import Paragraph from '@/components/text/Paragraph';
import Video from '@/components/partials/Video';
import Button from '@/components/buttons/Button';
import Image from '@/components/partials/Image';
import Space from '@/components/layout/Space';
import Head from '@/components/partials/Head';

interface Props { }

const content = {
  intro: {
    title: <>Dein Erklärfilm, auf <br /> dich zugeschnitten<HL color="blue">.</HL></>,
    text: <>Für die Trinkwasserinitiative vom Juni 2021 durften wir für den Schweizer Bauernverband zwei animierte Erklärfilme zu den Auswirkungen der Trinkwasserinitiative realisieren, welche überwiegend auf ihrer Webseite sowie Youtube eingesetzt werden. Damit sich diese Videos von den bisherigen Erklärfilmen abheben, haben wir hierfür einen neuen Stil kreiert. </>,
  },
  projectOverview: {
    imageLink: '/logos/projects/schweizer-bauernverband.svg',
    imageAlt: 'Schweizer Bauernverband',
    title: 'Trinkwasserinitiative.',
    text: 'Storyboard, Design, Illustration & Animation',
  },
  outro: {
    title: <>Ebenfalls an einem massgeschneidertem Erklärfilm <HL color="blue">interessiert</HL>?</>,
  },
  switcher: {
    nextProject: '/projekte/erklaerfilme-sbv',
    previousProject: '/projekte/adventsaktion',
  },
};

const TrinkwasserInitiative: React.FunctionComponent<Props> = () => (
  <Project content={content}>
    <Head title="Motion Design Erklärfilme für den Sbv | reiheacht" description="Motion Design Erklärfilm zur Trinkwasserinitiative für den Schweizer Bauernverband, illustriert und animiert von der reiheacht" />
    <Video link="https://player.vimeo.com/video/519844178" />
    <Space height="30px" />
    <Video link="https://player.vimeo.com/video/519845369" />
  </Project>
);

export default TrinkwasserInitiative;
