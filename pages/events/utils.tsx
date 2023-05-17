import { Progress } from 'antd';
import { format, intervalToDuration, parseISO } from 'date-fns';
import { VideostandEvent } from '../../lib/gqlTypes/graphql.ts';
import s from './styles.module.css';

type IInfoCircleProps = {
  color: string;
  entityMaxValue: number;
  entityValue: number;
  textFooter: string;
  textHeader?: string | null;
};

type IGetEventTimeBeforeStart = (
  nowDate: Date,
  currentEvent?: VideostandEvent | null
) =>
  | (Required<Duration> & {
      extraDays: number | null;
      isMoreThanTwoWeeksToNextEvent: boolean;
    })
  | undefined;

export const InfoCircle = (props: IInfoCircleProps) => {
  const { color, entityMaxValue, entityValue, textFooter, textHeader } = props;
  return (
    <Progress
      className={s.infoCircle}
      type="circle"
      size={160}
      percent={((entityMaxValue - entityValue) / entityMaxValue) * 100}
      strokeLinecap="square"
      strokeColor="#1E3465"
      trailColor={color}
      strokeWidth={9}
      format={() => (
        <div className="text-white">
          <div className="text-2.5">{textHeader || entityValue}</div>
          <div className="text-base/4">{textFooter}</div>
        </div>
      )}
    />
  );
};

export const getFormattedEventDate = (event: VideostandEvent) => {
  const startDate = parseISO(event.dt_start);
  const endDate = parseISO(event.dt_end);

  const isSingleDayEvent = format(startDate, 'yyyy MM dd') === format(endDate, 'yyyy MM dd');
  if (isSingleDayEvent) return format(startDate, 'dd.MM.yyyy');

  const isSpreadInMonthEvent = format(startDate, 'yyyy MM') === format(endDate, 'yyyy MM');
  if (isSpreadInMonthEvent)
    return `${format(startDate, 'dd')}-${format(endDate, 'dd')}.${format(startDate, 'MM.yyyy')}`;

  const isSpreadInMonthsEvent = format(startDate, 'yyyy') === format(endDate, 'yyyy');
  if (isSpreadInMonthsEvent)
    return `${format(startDate, 'dd.MM')}-${format(endDate, 'dd.MM')}.${format(startDate, 'yyyy')}`;

  return `${format(startDate, 'dd.MM.yyyy')}-${format(endDate, 'dd.MM.yyyy')}`;
};

export const getEventTimeBeforeStart: IGetEventTimeBeforeStart = (nowDate, currentEvent): any => {
  if (!currentEvent) return;
  const interval = intervalToDuration({
    start: nowDate,
    end: parseISO(currentEvent.dt_start),
  });
  const days = interval.days!;
  const months = interval.months!;

  let newDays = days;
  let extraDays: number | null = null;
  if (months > 0) {
    newDays = 7;
    extraDays = 7;
  } else if (days > 7) {
    newDays = Math.min(days - 7, 7);
    extraDays = 7;
  }

  return {
    ...interval,
    days: newDays,
    extraDays,
    isMoreThanTwoWeeksToNextEvent: months > 0 || days > 14,
  };
};
