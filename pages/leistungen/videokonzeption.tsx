import React from 'react';
import Service from '@/components/pages/Service';
import {
  HL, P, H1, H2, H25, H3,
} from '@/components/text/Text';
import Image from '@/components/partials/Image';
import Head from '@/components/partials/Head';
import HorizontalLine from '@/components/shapes/HorizontalLine';
import Space from '@/components/layout/Space';
import Quote from '@/components/text/Quote';
import Link from '@/components/buttons/Link';
import NextLink from 'next/link';

interface Props { }

const Videokonzeption: React.FunctionComponent<Props> = () => (
  <Service>
    <Head title="Idee & Videokonzeption | reiheacht" description="Ein gutes Konzept bildet das Fundament um deine Idee mit Motion Design oder Video zum Leben zu erwecken" />
    <H1>Videokonzeption<HL color="blue">.</HL></H1>
    <HorizontalLine />
    <Space height="50px" />
    <Image src="/images/services/videokonzeption.png" alt="Videokonzeption" />
    <Quote content="Nur wer sein Ziel kennt, findet den Weg." />
    <Space height="20px" />
    <H25 color="white" fullWidth>Auf die Idee folgt die Planung</H25>
    <Space height="20px" />
    <P fullWidth>Wir machen Pläne in vielen Phasen und Bereichen unseres Lebens. Budget und Zeit teilen wir ein, damit wir unseren Zielen näherkommen. Das gleiche Prinzip gilt auch für die Planung und Konzeption einer Videoproduktion, damit wir die gewünschte Wirkung erzielen.</P>
    <Space height="20px" />
    <P fullWidth>Alles beginnt mit einer Idee oder einer Inspiration. In den meisten Fällen ist diese noch nicht greifbar. Sie ist lediglich ein Gedanke, welche es nun gilt,  richtig zu kanalisieren, damit man zu seinem gewünschten Produkt kommt.</P>
    <Space height="20px" />
    <H25 fullWidth>Wir legen das Fundament</H25>
    <Space height="20px" />
    <P fullWidth>Eine gute Planung und Konzeption bilden die Basis für ein erfolgreiches Projekt. Je besser geplant wird, desto besser werden Zeit und Budget eingehalten. Was zunächst wie ein vermeidbarer Aufwand wirkt, spart in Wirklichkeit am Ende Verzögerungen, Fragen, Unklarheiten und Zusatzkosten ein.</P>
    <Space height="20px" />
    <P fullWidth>Darum gilt es, bereits in der Konzeptionsphase Ziele, Termine, Meilensteine und Zielgruppen und die richtige Videoart zu definieren, sprich <NextLink href="/leistungen/motion-design"><a className="service-link">Motion Design</a></NextLink>, <NextLink href="/leistungen/erklaervideo"><a className="service-link">Erklärvideo</a></NextLink>, <NextLink href="/leistungen/werbe-und-imagefilm"><a className="service-link"> Werbe- oder Imagefilm</a></NextLink>.</P>
    <Space height="20px" />
    <P fullWidth>Dazu kommen noch viele weitere Punkte, nur um einige zu nennen, wie Bildformate, Sprachen, Design, <NextLink href="/leistungen/sound-design"><a className="service-link">Sound Design</a></NextLink>, Bewilligungen, Rechte, den passenden Voice Over Artist und Schauspieler Casting.</P>
    <Space height="20px" />
    <H25 fullWidth>Ziel: Zielgruppe wirksam treffen</H25>
    <Space height="20px" />
    <P fullWidth>Mit der richtigen Vorbereitung und Planung sind wir für alle Probleme gewappnet und haben stets Lösungen bereit, welche es erst möglich machen, bei deinem Zielpublikum die grösstmögliche Wirkung zu erzielen.</P>
    <Space height="60px" />
    <P fullWidth>Profitiere von unserer langjährigen Erfahrung bei der Konzeption und Planung. Denn unser Ziel ist dein Ziel: Deine Idee wirksam zum Leben zu erwecken, damit du dich gemütlich mit einer Tüte Popcorn zurücklehnen und geniessen kannst.</P>
    <Space height="60px" />
    <P fullWidth superbold>Wir freuen uns auf die Zusammenarbeit!</P>
    <P fullWidth superbold>Kontaktiere uns per E-Mail auf <a href="mailto:hallo@reiheacht.ch" className="service-email-link">hallo@reiheacht.ch</a></P>
    <Space height="60px" />
  </Service>
);

export default Videokonzeption;
