'use client';

import { useLayoutEffect } from 'react';
import styles from './GameCard.module.scss';
import { TeamData, Time, VenueData } from '@arsenalamerica/types';
import { shite } from '@arsenalamerica/utils';
import { Textfit } from 'react-textfit';

export interface GameCardProps {
  localTeam: TeamData;
  time: Time;
  venue: VenueData;
  visitorTeam: TeamData;
}

export const GameCard = ({
  localTeam,
  time,
  visitorTeam,
}: GameCardProps): JSX.Element => {
  // Timestamp is unix, so we need to multiply by 1000
  const date = new Date(time.starting_at.timestamp * 1000);

  const gameDate = date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const gameTime = date.toLocaleTimeString(undefined, {
    timeStyle: 'short',
  });

  useLayoutEffect(() => {
    window.dispatchEvent(new CustomEvent('resize'));
  }, []);

  return (
    <div className={styles._}>
      <svg
        className={styles.Logo}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 111"
        role="img"
      >
        <path
          fill="#FFF"
          d="M127.8 58.3c-.2-.4-.6-.8-1.1-.9l-.8-.2-6.2-1.4.3-4.7c.1-.8-.5-1.5-1.3-1.7l-.6-.1-6.1-1.2V28.5c0-.6-.3-1.1-.8-1.4L64.8.2 64 0l-.8.2-46.5 26.9c-.5.3-.8.8-.8 1.4v19.6l-6.1 1.2-.6.1c-.8.2-1.3.9-1.3 1.7l.3 4.7L2 57.2l-.8.2c-.5.1-.9.4-1.1.9-.2.4-.2.9 0 1.4l.3.7 4.4 9.9-2.7 11.6-.2 1c-.1.6 0 1.1.4 1.5.3.3.7.5 1.1.5h.4l1-.2c3.5-.9 7.2-1.6 11-2.4 0 .6.3 1.1.8 1.4l46.5 26.9.8.2.8-.2L111 83.8l.3-.2c.5-.3.8-.8.8-1.4 3.8.7 7.5 1.5 11 2.4l1 .2h.4c.4 0 .8-.2 1.1-.5.4-.4.6-1 .4-1.5l-.2-1-2.8-11.6 4.4-9.9.3-.7c.4-.4.3-.9.1-1.3z"
        />
        <path
          fill="#203A6F"
          d="M123.7 82.4c-4.4-1.1-8.8-2-13.2-2.8v-2.4l6.1-1.9h.2l.2-.1v-.5l1.1-16.9 7.3 1.6-4.7 10.6 3 12.4zM11.4 75.3h-.2l-.2-.1v-.5L9.9 57.8l-7.3 1.6L7.3 70l-3 12.4c4.4-1.1 8.8-2 13.2-2.8v-2.4l-6.1-1.9zm99.1-1.1v2.2l4.3-1.4-4.3-.8zm-93 2.2v-2.2l-4.3.8 4.3 1.4zm98.8-1.9a259 259 0 0 0-104.5 0l-1.7-23a265 265 0 0 1 107.9 0l-1.7 23zm-3.2-18.6c.1-.8-.3-1.3-1-1.5l-3.6-.6c-.7-.1-1.1.2-1.2 1.1l-.2 3.1.3 1.2 3.4 4.6-.2 2.7-2.2-.4.2-2.8-1.8-.3-.2 3.3c0 .8.3 1.3 1 1.4l3.6.6c.7.1 1.1-.2 1.2-1.1l.2-3.3c0-.5-.1-.9-.3-1.2l-3.4-4.6.2-2.5 2.2.4-.2 2.6 1.8.3.2-3zM103.5 67l1.9.3-1.6-6.6h1.2c.4-.1.5-.5.6-1.1l.3-5c0-.9-.3-1.3-1-1.4l-4.8-.7-.7 13.9 1.8.3.6-12.1 2.3.3-.2 4.4-1.8-.3-.1 1.3 1.5 6.7zM95 59.6l2.7.3.1-1.8-2.7-.3.2-4.1 3.2.4.1-1.8-5-.6-.6 13.9 5 .6.1-1.8-3.2-.4.1-4.4zm-5.1 5.7 1.6.2.5-13.9-1.8-.2-.3 7.6.1 1-2.6-8.9-1.6-.1-.4 13.9 1.7.2.2-7.8-.1-1c1 2.9 1.9 5.9 2.7 9zM55.6 50.1l-1.9.1-2.1 14 1.8-.1.3-2.7 2.3-.1.4 2.6h1.8l-2.6-13.8zm-5.6.3-1.7.1-1.7 7.8v.6l-.1-.6-2.1-7.6-1.7.1.4 13.9 1.7-.1-.2-6.9-.1-1.5a178 178 0 0 1 1.7 7l.9-.1 1.4-7.2-.1 1.5.1 6.9 1.7-.1-.2-13.8zM24.3 53l-1.9.3-1.5 14.2 1.8-.3.2-2.7 2.2-.3.5 2.6 1.8-.3L24.3 53zm-6.1 2.9 2-.3-.1-1.8-5.8 1 .1 1.8 2-.4.8 12 1.8-.3-.8-12zm11.1 10.4 3.7-.5c.7-.1 1.1-.6 1-1.4l-.1-3.4-1.8.2.1 2.9-2.3.3-.5-10.3 2.4-.3.1 2.7 1.8-.2-.1-3.3c0-.9-.4-1.2-1.2-1.1l-3.8.5c-.7.1-1.1.6-1 1.4l.6 11.3c0 .9.4 1.3 1.1 1.2zm6.2-2c0 .8.4 1.2 1.1 1.2l3.9-.4c.7-.1 1.1-.5 1-1.4l-.3-11.4c0-.9-.4-1.2-1.1-1.2l-4 .4c-.7.1-1.1.5-1 1.4l.4 11.4zM63 62.7c0 .8.4 1.3 1.1 1.3h3.8c.7 0 1.1-.4 1.1-1.3v-6.2h-3.2v1.8h1.3v3.9h-2.4V51.8h2.4v2.5h1.8v-3c0-.9-.4-1.3-1.1-1.3H64c-.7 0-1.1.4-1.1 1.3l.1 11.4zm7.4.1c0 .8.3 1.3 1.1 1.3l3.9.1c.7 0 1.1-.4 1.1-1.2l.2-11.4c0-.9-.3-1.3-1.1-1.3l-4-.1c-.7 0-1.1.4-1.1 1.3l-.1 11.3zm7.5.3c0 .8.3 1.3 1 1.3l3.9.3c.7.1 1.1-.3 1.1-1.2l.3-11.4c0-.9-.3-1.3-1.1-1.4l-4-.3c-.7 0-1.1.4-1.1 1.2.1 3.9 0 7.7-.1 11.5zm-53.2-.6-1.2-6.1-.5 6.4 1.7-.3zm15 .8L39.4 53l-2.5.2.4 10.3 2.4-.2zm15.9-3.6-1-6.3-.8 6.3h1.8zM72.3 52l-.1 10.4 2.5.1.2-10.4-2.6-.1zm10.1.5-2.5-.2-.2 10.3 2.5.2.2-10.3z"
        />
        <path
          fill="#DA1F26"
          d="M102.3 72.7 110 74v7.9l-46 26.4-45.9-26.5v-7.9l7.7-1.3v4.8L64 99.5l38.3-22.1v-4.7zM64 2.3 18.1 28.8v20.5l7.7-1.2V33.3L64 11.2l38.3 22.1v14.9l7.7 1.2V28.8L64 2.3zm37.5 45.8a263.7 263.7 0 0 0-75 0v-4.4l.6-.4 1.9-1.2c.7-.2 2.3.2 3 0 1.1-.3 2.7-2.1 3.8-2.4h1.1a10 10 0 0 0 2.4-1.1l.4-.3.1-.1c.6-.5 1.6-1.7 2.3-2.1.6-.3 1.6-.5 2.5-.8l1.6-.5.4-.2 1.8-1.4.5-.4 1.1-1 .3-.1.7-.4 1.6-.8.4-.5.9-1 .4-.5.2-.3.9-.9.5-.4c.3-.2.6-.5.8-.5h1l.2-.2.5-.5c.6-.5 1.4-1.2 1.9-1.4H63c.2-.1.5-.3.9-.3l.6.3.1.2.4.5c.1.3 1 .2 1.3.2l.6.3.2.1c.2 0 .5-.4.8-.5h.1c.4-.1 1.1.4 1.4.5l.7.2.7.2 1.1.4.6.6.3.3.2.1 1.7.7.2.1.7.3 1.9.9.7.3h.1l2.2 1.1.7.3 1.4.5c.2 0 .5 0 .8.2l.9.8.4.4.5.5c.2.3.1.4 1.1.8l1.8.9.5.3h.1c.4.2 2.1 1.1 2.7 1.2.7.1 1.9-.2 2.9.6.9.7 1 .8 1.9 1.2l1.7.8 1.2.7.1.1 2.5 1.5v6.5zM85.9 36.2l-.6.6H84s-.9-.2-1.2 0l-.1.6.1.3c.5.3 1.8.4 2.5.4h3.6l1.8 1 1.8 1h-2.9l1.7 1.1h.1c.2.2 1.1.7 1.6.8l.8.1.8-.2 2.9.8 2.9.8v-1.8l-2.4-1-2.4-1.3-1.2-.6-1.2-.6-.5-.2-.5-.2-.9-.2-.9-.2-1.9-.9-1.9-.9-.7.6zm-10.6-6.4 2.4 1.4 1.1.7 1.3.8.7 1.4.2.4c.2.3.4.8.6.9l.9.2H84l.6-.1.3-.2.1-.1.2-.2c0-.3-.7-.6-.7-.6l-.8-.7-1-.9-1-.8c-.7-.4-3.1-1.1-3.1-1.1l-3.3-1.1zm-16.9-3.2.9 1.5.5.8.5.5h.9l1.2-.3 1.8-.5.3-.1-1.5 1-1.4 1.1-.9.9-.4.3-.3.6.3.8.7.7 1.1.5 2 .6 3.4 1-1.5-1.1-1.5-.9 2.1-2.5 2.1-2.5.3.9.3.9h2.4l1.5.6 1.5.6-.4-1.5-.4-1.5-1.3-1-1.5-.9-1.6-.7s-1.2-.7-1.6-.7c-.3 0-.9.4-.9.4s-.7.5-.9.4c-.2 0-.5-.4-.5-.4l-.5-.4-.9-.4-.9-.4h-2.8c-.3.1-1 .8-1 .8l-1.1.9zm-7.1 5.8h1.8l1.1-.2s.9 0 1.1-.2c.3-.3.2-1.5.2-1.5l.2-1.5-.8 1.2-.8 1.2-1.4.6-1.4.4zm-3.2 3.7-2.3 1.7 2-.2h.1c.3 0 1.6-.2 2-.4l.9-.7.1-.1 1-.9 1.4-.3 1.4-.4 1.1-.7 1.1-.9 1.2-1.3.5-.6.5-.8-.2-.9-.2-.4-.9-1.2-.5 1.2-.5 1.2-.4 1.1-.4 1.1-1.5.6-1.5.6-1.4.3-1.4.3-2.1 1.7zm-7.2 2.1.9.5.4.3.4.1c.3-.1.8-.4 1.2-.8.6-.4 1-.9 1-.9l2.1-1.8-2.4.6-2.4.6-.6.7-.6.7zm-6.1 3.3 2.4-.6 2.4-.6H36l-.6.6-.6.6zm-7.4 2.3-.2.1v.9l2.7-.4 1.3.5 6.5-1.4H36l-1.8-.5-1.8-.6h-3.2l-1.8 1.4zM45 44a9 9 0 0 0 2.9-.6c.1-.1 0-.3-.1-.5l-.3-.3-.9-1 .3-.6.3-.6h-5l-3.1 1.1-3.1 1 1.1.3 1.1.2 1.4.1H41l-1.6.9-1.6.9 5.3-.6c-.1-.1.8-.2 1.9-.3zm29.1-2.5-1.3-.6s-1.1-.3-1.3-.6c-.2-.2-.3-1-.3-1l-.3-1-1.9-.5-1.9-.5-3-.8-3-.8-1.4-1.2-1.4-1.2-2.2 2.3-2.2 2.3-2.6.6-2.4.5v1.5l.2.4c.4.4 1.5.5 2.3.5h11.2l1.3.8 1.1.5c.7.1 2.4-.1 3.5-.3l1.2-.2 4.4-.7zm5.6-4.6.3-.1.1-.2v-.7l-.2-.7-.4-1.5-1.6-1.2-1.6-1.2v2.4l-2-.4-2-.4.7 1.3.7 1.3.6.8.7.7.8.1h.8l1.6-.1 1.5-.1zM47.3 85.3c0 .9.8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.7zm5.8 1.7c.9 0 1.7-.8 1.7-1.7 0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7 0 1 .7 1.7 1.7 1.7zm4.2-6.5a6.7 6.7 0 1 1 13.4 0 6.7 6.7 0 0 1-13.4 0zm6.4 2-.3-.1a.8.8 0 0 1-.4-.2l-.2-.1-.2.2-2 2-.3.3.3.2c.8.6 1.7 1 2.7 1.1h.4v-3.4zm3.9 2.1-.3-.3-2-2-.2-.2-.2.1-.4.2-.3.1V86h.4c1-.1 1.9-.5 2.7-1.1l.3-.3zm1.8-3.8h-3.5l-.1.2-.2.4-.1.2.2.2 2.3 2.3.2-.3c.6-.8 1-1.7 1.1-2.7l.1-.3zm-1.7-3.7-2 2-.2.2.1.2.2.4.1.3h3.5v-.4c-.1-1-.5-1.9-1.1-2.7l-.3-.2-.3.2zm-3.5 1.5.3.1.4.2.2.1.2-.2 2-2 .3-.3-.3-.2c-.8-.6-1.7-1-2.7-1.1h-.4v3.4zm-.2 1a1 1 0 0 0 0 2c.5 0 1-.4 1-1-.1-.6-.5-1-1-1zm-3.7-3.1.3.3 2 2 .2.2.2-.1.4-.2.3-.1v-3.5h-.4c-1 .1-1.9.5-2.7 1.1l-.3.3zm-1.8 3.8H62l.1-.3.2-.4.1-.2-.2-.2-2-2-.3-.3-.2.3c-.6.8-1 1.7-1.1 2.7l-.1.4zm.1.9c.1 1 .5 1.9 1.1 2.7l.2.3 2.3-2.3.2-.2-.1-.2-.2-.4-.1-.3h-3.5l.1.4zm5.4-.1c.3 0 .6-.3.6-.6s-.3-.6-.6-.6-.6.3-.6.6c0 .4.2.6.6.6zm3.1-4.6c-.7-.6-1.6-.9-2.5-1v2.8l.5.2 2-2zm-3.7 1.8v-2.8c-.9.1-1.8.5-2.5 1l2 2 .5-.2zm-4.5 1.6h2.8l.2-.5-2-2c-.5.7-.9 1.6-1 2.5zm10.1 0c-.1-.9-.5-1.8-1-2.5l-2 2 .2.5H69zm6.3-.1c.3 0 .5-.2.6-.5l.4.2c.3 0 .5-.2.5-.5l.2-1.4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9l-.2-1.3c0-.3-.2-.5-.5-.5l-.4.2c0-.3-.3-.5-.6-.5s-.6.2-.6.5l-.2-.1c-.3 0-.5.2-.5.5h-6c1.4 1 2.5 2.5 2.9 4.2l2.9.1h.2c.1.2.2.3.4.3l.2-.1c.1.4.3.7.7.7zm-10-8.6h-2.9l-1.6 3c1-.5 2.1-.8 3.2-.8h.1l1.2-2.2zm16 15.8-10.9-3.4c.4-.8.6-1.6.7-2.5h2.2l.1.2.2.3 9.9 3c.1 0 .3.1.4.4v.1h.1c1.3-.2 1.7-.7 1.7-.7l.1-.2c.2-.1.2.6.2.6l-.1.2c-.1.1-1.9 1.9-3.5 2h-.2l-.4.1a1 1 0 0 1-.5-.1zm-7.1-4-1.9-.6c-.1 0-.3 0-.4.2 0 .1 0 .3.2.4l1.9.6c.1 0 .3 0 .3-.2.1-.2 0-.3-.1-.4zm3.7 1.2-1.9-.6c-.1 0-.3 0-.4.2 0 .1 0 .3.2.4l1.9.6c.1 0 .3 0 .4-.2l-.2-.4zm1.6 1.1 1.9.6c.1 0 .3 0 .4-.2 0-.1 0-.3-.2-.4l-1.9-.6c-.1 0-.3 0-.4.2 0 .2 0 .3.2.4zM60 74.6H47c-.2-.4-.4-.7-.6-.7h-.1v4.2h.1s.5-.1.6-.6l6.7.4c.1.3.3.7.8.8l2.4.6a7.5 7.5 0 0 1 3.1-4.7zm-7.4 7.3c0-.9-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7 1 0 1.7-.7 1.7-1.7zM68.4 83l.6-1.8h-2.8l-.2.5.7.7 1.7.6z"
        />
        <path
          fill="#EAB9BC"
          d="m52.8 18.5 5.4 7.2-.5.5-5.1-7.5.2-.2zM40.9 38.2l.9.5.4.3.4.1c.3-.1.8-.4 1.2-.8l1-.9 2.1-1.8-3.9 2.2-2.1.4zm16.6-22.4 2.6 8.4h.8l-3.2-8.5-.2.1zm-18 24.5-3 .3-1.7 1 2.4-.6 2.3-.7zm.2-2.2-12.8 2.1 12.3-1.8c.2 0 .3-.1.5-.3-.1.1 0 .1 0 0zm8.6-17 6.9 6.2.5-.4-7.1-5.9-.3.1zm31.8 15.5v-.7l-.2-.7-.4-1.5-.6 1.3-2.7 1.1-4.1-3.2.7 1.3.7 1.3.6.8.7.7.8.1h.8l3.2-.3.3-.1c.1.2.2 0 .2-.1zm-32.4 6.3-.3-.3-.9-1 .3-.6.3-.6-1.4 1.3 1.2 1.3-5.2.8 1.6-1.6h-4.5l-2.8.3 1.1.3 1.1.2 1.4.1H41l-1.6.9-1.6.9L45 44a9 9 0 0 0 2.9-.6l-.2-.5zm24.4-13.4-2 .4-1.4-1.7-6.3 5.5.3-2.3 3.8-3.7-5.5.6-2.6-1.7 1.4 2.2.5.5h.9l3.1-.8h-.1l.3-.1-1.5 1.1-1.4 1.1-.9.9-.4.3-.3.6.3.8.7.7 1.1.5 5.5 1.7-1.5-1.1-1.6-1 2.1-2.5 2.1-2.5.3.9.3.9h2.4l1.5.6 1.5.6-.4-1.5-.4-1.5v2.2l-1.8-1.7zm-3.7 13.1 5.7-1.1-1.3-.6s-1.1-.3-1.3-.6c-.2-.2-.3-1-.3-1l-.3-1-.9 2.3-4.2 1.6-3.1-3L51 40.5 48.9 39v1.5l.2.4c.4.4 1.5.5 2.3.5h11.2l1.3.8 1.1.5c.6.3 2.3.1 3.4-.1zm25.3-2.1-4.1-2.6-1.9-.3h-3.8l-1.2-.8-.1.6.1.3c.5.3 1.8.4 2.5.4h3.6l1.8 1 1.8 1h-2.8l1.7 1.1h.1c.2.2 1.1.7 1.6.8l.8.1.8-.2-3-1.2 2.1-.2zM44.3 23.4l9.3 5.5.4-.5-9.4-5.2-.3.2zM84 35.5l.6-.1.3-.2.1-.1.2-.2h-3l-.9-2-2.4-1 1.3.8.9 1.8c.2.3.4.8.6.9l.9.2H84zM99 40l2.1.3-2.2-.4.1.1zm-15-7.5.4.4 13.3-1.4-.1-.1L84 32.5zm-11.7-5.6.3.3.2.1 6.9-6.2-.3-.1-7.1 5.9zm2.4 1.2.7.3 8.3-4.9-.3-.2-8.7 4.8zm-4.9-2.4.7.2 4.9-7.2-.3-.2-5.3 7.2zm-29.5 0 12.1 4.7.4-.5-12.2-4.4-.3.2zm26.4-.3.2.1c.2 0 .5-.4.8-.5l2.9-9.2-.2-.1-3.7 9.7zm10.6 3.8.7.3 9.8-3.8-.3-.2-10.2 3.7zM64 12.1 63.6 24l.6.3.1.2-.3-12.4zM26.5 35.6l18-.4 1.6-.5-19.6.9zm3.9-4.1 17.8 1.8.5-.4-18.2-1.5-.1.1zm49.8-.9.7.3 11.2-2.6-.2-.1-11.7 2.4zm-44.4-2.3 14.3 3.3.7-.4-14.7-3.1-.3.2zm14.8 8.3.1-.1 1-.9 1.4-.3 1.4-.4 1.1-.7 1.1-.9 1.7-1.9.5-.8-.2-.9-.2-.4-.7-1.3-1.3 4.7-2.3 1.7h-2.6l-1.9 2-4 1.4 2-.2h.1c.3 0 1.6-.2 2-.4l.8-.6zm50.9-1L87.8 35l.5.3h.1l13.1.3z"
          opacity=".5"
        />
      </svg>

      <div className={styles.Badges}>
        <img src={localTeam.data.logo_path} alt={localTeam.data.name} />
        <img src={visitorTeam.data.logo_path} alt={localTeam.data.name} />
      </div>

      <div className={styles.MainBilling}>
        <Textfit mode="single" max={500}>
          <h2>
            {shite(localTeam.data.name)}
            <span>{localTeam.data.id !== 19 && ' vs'}</span>
          </h2>
        </Textfit>
        <Textfit mode="single" max={500}>
          <h2>
            <span>{visitorTeam.data.id !== 19 && 'vs '}</span>
            {shite(visitorTeam.data.name)}
          </h2>
        </Textfit>
      </div>

      <div className={styles.GameTime}>
        <Textfit mode="single">
          <h2>{gameDate}</h2>
        </Textfit>
        <Textfit mode="single">
          <h2>{gameTime} @ Doyle&apos;s</h2>
        </Textfit>
      </div>

      <svg
        className={styles.Background}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 353.9 512"
        height="100vw"
      >
        <path
          fill="#da1f26"
          d="m338.6 436.3 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 1.5-8.8H0v512h340.3l13.6-79.9-15.3 4.2z"
        />
        <path
          fill="#c4212b"
          d="m118.3 447.7 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2L133.5 16l-15.2 4.2L121.7 0h-4l-4.4 25.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-10.7 63h4.1l11.6-68.5-15.2 4.2zm44.5 26.5 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 8-46.7h-4.1l-8.9 52.2 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-6.2 36.5h4l7.2-42-15.3 4.2zm89.2-20.3 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.2L256.5 0h-4.1L247 31.9l15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-9.6 56.8h4l10.6-62.3-15.2 4.2zM73.7 494.5 89 404.8 73.7 409 89 319.3l-15.3 4.2L89 233.8 73.7 238 89 148.3l-15.3 4.2L89 62.8 73.7 67 85.1 0H81L68.7 72.5 84 68.3 68.7 158l15.3-4.2-15.3 89.7 15.3-4.2L68.7 329l15.3-4.2-15.3 89.7 15.3-4.2L68.7 500l15.3-4.2-2.8 16.2h4.1l3.7-21.7-15.3 4.2zM29.1 468l15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2L36 0h-4l-7.9 46 15.3-4.1-15.3 89.6 15.3-4.1L24.1 217l15.3-4.2-15.3 89.7 15.3-4.1L24.1 388l15.3-4.1-15.3 89.6 15.3-4.2-7.3 42.7h4.1l8.2-48.2-15.3 4.2zm278.7 44 4-23.6-15.2 4.1 15.2-89.6-15.2 4.1 15.2-89.6-15.2 4.1 15.2-89.6-15.2 4.2 15.2-89.7-15.2 4.2 15.2-89.7-15.2 4.1 11-65h-4l-12 70.6 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-15.2 89.7 15.2-4.2-3.1 18.1h4.1zm-97.2 0h11.5l.6-3.3-12.1 3.3zm-3 0 15.1-88.8-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2 15.3-89.7-15.3 4.2L221.9 0h-18.6l-.9 5.4 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-15.3 89.7 15.3-4.2-14.2 83.3h4.1z"
        />
      </svg>
    </div>
  );
};