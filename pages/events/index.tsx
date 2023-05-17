import { Progress } from 'antd';
import cn from 'classnames';
import s from './styles.module.css';

const dayColor = '#0062b2';
const hourColor = '#df301e';
const minuteColor = '#ffae54';
const secondColor = '#3cacd5';

export const Events = () => {
  const isUpcomingEventExists = true;
  const isEventActiveNow = true;

  return isUpcomingEventExists ? (
    <div className={s.root}>
      <div className={s.header}>
        <div>
          <div className="text-5 mb-1">12:15</div>
          <div>17 июля · воскресенье</div>
        </div>
      </div>
      <div className={s.content}>
        <div className="text-sm text-slate-400 mb-3">24.07.2021</div>
        <div className={s.currentEventName}>
          Академия FIG В Ташкенте Академия FIG В ТашкентеАкадемия FIG В ТашкентеАкадемия FIG В
          Ташкенте
        </div>
        {isEventActiveNow ? (
          <div className={s.activeEventTitle}>
            <div className="text-1.5">идет сейчас</div>
            <i className="far fa-clock text-white text-2 ml-5"></i>
          </div>
        ) : (
          <div className="h-40 flex justify-center gap-9">
            <InfoCircle color={dayColor} entityMaxValue={7} entityValue={6} textFooter="дней" />
            <InfoCircle color={hourColor} entityMaxValue={24} entityValue={11} textFooter="часов" />
            <InfoCircle
              color={minuteColor}
              entityMaxValue={60}
              entityValue={45}
              textFooter="минут"
            />
            <InfoCircle
              color={secondColor}
              entityMaxValue={60}
              entityValue={59}
              textFooter="секунд"
            />
          </div>
        )}
      </div>
      <div className={s.footer}>
        <div className="flex flex-col justify-center h-full">
          <div className="text-sm text-slate-400">20.09.2021</div>
          <div className={s.nextEventName}>
            Звёзды современной мировой гимнастики на одном помосте
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={cn('flex items-center justify-center', s.root)}>
      <div className="w-96 rounded-md overflow-hidden">
        <div className="py-6 text-5 bg-secondary">12:15</div>
        <div className="py-6 text-1.75 bg-primary-light">
          <div>17 июля</div>
          <div>воскресенье</div>
        </div>
      </div>
    </div>
  );
};

const InfoCircle = ({ color, entityMaxValue, entityValue, textFooter }) => (
  <Progress
    className={s.infoCircle}
    type="circle"
    size={160}
    percent={((entityMaxValue - entityValue) / entityMaxValue) * 100}
    strokeLinecap="square"
    strokeColor="#1E3465"
    trailColor={color}
    strokeWidth={9}
    format={percent => (
      <div className="text-white">
        <div className="text-2.5">{entityValue}</div>
        <div className="text-base/4">{textFooter}</div>
      </div>
    )}
  />
);
