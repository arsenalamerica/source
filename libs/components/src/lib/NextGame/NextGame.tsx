'use client'; // Needed because we are dealing with dates relative to the user. We can move this to the game info section later on to encapsulate the date

import styles from './NextGame.module.scss';

import { Heading } from '@ariakit/react';
import { BranchData } from '@arsenalamerica/data';
import { FixtureEntity } from '@arsenalamerica/sportmonks';
import { dateFromEpoch, timeFromEpoch } from '@arsenalamerica/utils';

import { Card } from '../Card/Card';
import { ClientOnly } from '../ClientOnly/ClientOnly';

export function NextGame({
  fixture,
  branch,
}: {
  fixture: FixtureEntity;
  branch: BranchData;
}) {
  const { starting_at_timestamp } = fixture;

  const fixtureDate = dateFromEpoch(starting_at_timestamp);
  const fixtureTime = timeFromEpoch(starting_at_timestamp);
  const fakeDate = '1/1/2000 ';

  const isReplay = branch?.pub?.replayTime
    ? new Date(fakeDate + branch.pub.replayTime) >
      new Date(fakeDate + fixtureTime)
    : false;

  const adjustedFixtureTime = isReplay
    ? branch.pub?.replayTime + ' (replay)'
    : fixtureTime;

  const fixtureTime24 = new Date(
    starting_at_timestamp * 1000,
  ).toLocaleTimeString(undefined, {
    timeStyle: 'short',
    hour12: false,
  });

  // THIS IS A TEMPORARY HARD-CODED FIX
  const viewingPub = branch?.pubs
    ? fixtureTime24 >= '06:00' // Note to compare times here, we need to use 24-hour format, including the leading zero
      ? branch.pubs[0]
      : branch.pubs[1]
    : branch?.pub;

  return (
    <>
      <Heading>Match Watch Party</Heading>
      <Card render={<div />} className={styles._}>
        <p>
          <ClientOnly>
            {fixtureDate} {adjustedFixtureTime}
          </ClientOnly>
        </p>
        {viewingPub && (
          <address>
            <a href={viewingPub.website}>
              {viewingPub.name}
              <br />
              {viewingPub.address.replace(',', '\n')}
            </a>
          </address>
        )}
      </Card>
    </>
  );
}
