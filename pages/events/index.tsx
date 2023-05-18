import cn from 'classnames';
import { isWithinInterval, parseISO } from 'date-fns';
import { orderBy } from 'lodash-es';
import React from 'react';
import { QueryVideostandEventsArgs } from '../../lib/gqlTypes/graphql.ts';
import { videostandEvents } from '../../lib/graphql.ts';
import { IGqlResponse } from '../../lib/types.ts';
import { fmt, fmtDuration as rawFmtDuration, useGql } from '../../lib/utils.tsx';
import s from './styles.module.css';
import { InfoCircle, getEventTimeBeforeStart, getFormattedEventDate } from './utils.tsx';

export const Events = () => {
  const [nowDate, setNowDate] = React.useState(new Date());

  const { data, mutate } = useGql<IGqlResponse<'videostandEvents'>, QueryVideostandEventsArgs>(
    videostandEvents,
    {
      videostand_id: '6',
    }
  );

  const events = orderBy(data?.videostandEvents?.current_and_upcoming, 'dt_start') || [];
  const currentEvent = events.at(0);
  const nextEvent = events.at(1);

  const isUpcomingEventExists = currentEvent;
  const isEventActiveNow =
    currentEvent &&
    isWithinInterval(nowDate, {
      start: parseISO(currentEvent.dt_start),
      end: parseISO(currentEvent.dt_end),
    });

  const eventTimeBeforeStart = getEventTimeBeforeStart(nowDate, currentEvent);

  const fmtDuration = format => rawFmtDuration(eventTimeBeforeStart, format).replace(/\d+\s+/, '');

  React.useEffect(() => {
    const tickId = setInterval(() => setNowDate(new Date()), 1_000);

    const serverUpdateId = setInterval(mutate, 60_000);

    return () => {
      clearInterval(tickId);
      clearInterval(serverUpdateId);
    };
  }, []);

  return isUpcomingEventExists ? (
    <div className={s.root}>
      <div className={s.header}>
        <div>
          <div className="text-5 mb-1">{fmt(nowDate, 'HH:mm')}</div>
          <div>
            {fmt(nowDate, 'dd MMM')} · {fmt(nowDate, 'EEEE')}
          </div>
        </div>
      </div>

      <div className={s.content}>
        <div className="text-sm text-slate-400 mb-3">{getFormattedEventDate(currentEvent)}</div>
        <div className={s.currentEventName}>{currentEvent.title}</div>

        {isEventActiveNow && (
          <div className={s.activeEventTitle}>
            <div className="text-1.5">идет сейчас</div>
            <i className="far fa-clock text-white text-2 ml-5"></i>
          </div>
        )}

        {!isEventActiveNow && eventTimeBeforeStart && (
          <div className="h-40 flex justify-center gap-9">
            {eventTimeBeforeStart.extraDays && (
              <InfoCircle
                color={dayColor}
                entityMaxValue={7}
                entityValue={eventTimeBeforeStart.extraDays}
                textHeader={
                  eventTimeBeforeStart.isMoreThanTwoWeeksToNextEvent
                    ? `${eventTimeBeforeStart.extraDays}+`
                    : null
                }
                textFooter={fmtDuration(['days'])}
              />
            )}
            <InfoCircle
              color={dayColor}
              entityMaxValue={7}
              entityValue={eventTimeBeforeStart.days}
              textFooter={fmtDuration(['days'])}
            />
            <InfoCircle
              color={hourColor}
              entityMaxValue={24}
              entityValue={eventTimeBeforeStart.hours}
              textFooter={fmtDuration(['hours'])}
            />
            <InfoCircle
              color={minuteColor}
              entityMaxValue={60}
              entityValue={eventTimeBeforeStart.minutes}
              textFooter={fmtDuration(['minutes'])}
            />
            <InfoCircle
              color={secondColor}
              entityMaxValue={60}
              entityValue={eventTimeBeforeStart.seconds}
              textFooter={fmtDuration(['seconds'])}
            />
          </div>
        )}
      </div>

      <div className={s.footer}>
        {nextEvent && (
          <div className="flex flex-col justify-center h-full">
            <div className="text-sm text-slate-400">{getFormattedEventDate(nextEvent)}</div>
            <div className={s.nextEventName}>{nextEvent.title}</div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className={cn('flex items-center justify-center', s.root)}>
      <div className="w-96 rounded-md overflow-hidden">
        <div className="py-6 text-5 bg-secondary">{fmt(nowDate, 'HH:mm')}</div>
        <div className="py-6 text-1.75 bg-primary-light">
          <div>{fmt(nowDate, 'dd MMM')}</div>
          <div>{fmt(nowDate, 'EEEE')}</div>
        </div>
      </div>
    </div>
  );
};

const dayColor = '#0062b2';
const hourColor = '#df301e';
const minuteColor = '#ffae54';
const secondColor = '#3cacd5';
