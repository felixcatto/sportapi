/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `date-time` scalar type. */
  DateTimeType: any;
  /** The `date` scalar type. */
  DateType: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The `month` scalar type: integer from 0 to 11. */
  MonthType: any;
  /** The `time` scalar type. */
  TimeType: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** The `year` scalar type: integer from 0 to 10000. */
  YearType: any;
};

/** авторизованный пользователь */
export type AUser = {
  __typename?: 'AUser';
  auserId?: Maybe<Scalars['String']>;
  auser_id?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Roles>;
};

/** Даты размещения в отелях */
export type AccomodationDatesScheme = {
  __typename?: 'AccomodationDatesScheme';
  dt_begin?: Maybe<Scalars['DateType']>;
  dt_end?: Maybe<Scalars['DateType']>;
  /** запрещать изменять даты размещения в заявках */
  is_forbidden_edit?: Maybe<Scalars['Boolean']>;
};

/** AccomodationDeletingProhibits type definition */
export type AccomodationDeletingProhibits = {
  __typename?: 'AccomodationDeletingProhibits';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** Описание отеля для размещения */
export type AccomodationHotelScheme = NodeInterface & {
  __typename?: 'AccomodationHotelScheme';
  dates?: Maybe<AccomodationDatesScheme>;
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  description?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  /** Сколько номеров в целом по отелю можно зарезервировать */
  hotel_limit?: Maybe<Scalars['Int']>;
  /** Количество зарезервированных в отеле номеров */
  hotel_reserved?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  rooms?: Maybe<Array<Maybe<AccomodationRoomScheme>>>;
  rooms_with_types?: Maybe<Array<Maybe<AccomodationRoomWithTypeScheme>>>;
  table: Scalars['String'];
  title_with_dates: Scalars['String'];
};

/** Тип AccomodationInfo определяет данные по размещению в отеле в заявке на размещение */
export type AccomodationInfo = NodeInterface & {
  __typename?: 'AccomodationInfo';
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  hotel?: Maybe<AccomodationHotelScheme>;
  hotel_id?: Maybe<Scalars['Int']>;
  hotel_title?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  persons_count?: Maybe<Scalars['Int']>;
  residents?: Maybe<Array<Maybe<AccomodationResident>>>;
  room_accomodation_id?: Maybe<Scalars['String']>;
  room_id?: Maybe<Scalars['String']>;
  room_type?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** Фильтр для списка заявок на проживание */
export type AccomodationListFilter = {
  app_status?: InputMaybe<ApplicationStatusEnum>;
  payment_status?: InputMaybe<PaymentStatusEnum>;
};

/** Описывает проживающего */
export type AccomodationResident = NodeInterface & {
  __typename?: 'AccomodationResident';
  board_name?: Maybe<Scalars['String']>;
  board_type?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  dt_birthday?: Maybe<Scalars['DateType']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  passport_info?: Maybe<Scalars['String']>;
  passport_number?: Maybe<Scalars['String']>;
  passport_series?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** Данные для сохранения проживающего в заявке на проживание */
export type AccomodationResidentInput = {
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
};

/** Описание комнаты для размещения */
export type AccomodationRoomScheme = NodeInterface & {
  __typename?: 'AccomodationRoomScheme';
  accomodation_types?: Maybe<Array<Maybe<AccomodationTypeScheme>>>;
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  display_name: Scalars['String'];
  id: Scalars['ID'];
  /** Количество комнат, доступных для резервирования */
  room_limit?: Maybe<Scalars['Int']>;
  room_name: Scalars['String'];
  /** Количество зарезервированных комнат */
  room_reserved?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
};

/** Описание комнаты с типом размещения */
export type AccomodationRoomWithTypeScheme = NodeInterface & {
  __typename?: 'AccomodationRoomWithTypeScheme';
  display_name: Scalars['String'];
  /** ИД комнаты <room_id:room_accomodation_id> */
  id: Scalars['ID'];
  number_persons?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  room_accomodation_id?: Maybe<Scalars['String']>;
  room_id: Scalars['Int'];
  room_limit?: Maybe<Scalars['Int']>;
  room_name: Scalars['String'];
  /** Количество зарезервированных комнат */
  room_reserved?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
};

/** Описание типа размещения */
export type AccomodationTypeScheme = NodeInterface & {
  __typename?: 'AccomodationTypeScheme';
  deleting_prohibits?: Maybe<Array<Maybe<AccomodationDeletingProhibits>>>;
  id: Scalars['ID'];
  number_persons?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  table: Scalars['String'];
};

export enum ActionDeletion {
  Delete = 'delete',
  Restore = 'restore'
}

/** ActionDescription type definition */
export type ActionDescription = {
  __typename?: 'ActionDescription';
  allowed?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

/** Информация о фактическом платеже по заявке */
export type ActualPayment = {
  __typename?: 'ActualPayment';
  /** полная сумма (с комиссией) */
  amount?: Maybe<Scalars['Float']>;
  /** сумма комиссии */
  commission?: Maybe<Scalars['Float']>;
  /** идентификатор записи о платеже */
  id?: Maybe<Scalars['String']>;
  /** идентификатор платежа, зависит от типа платежа */
  payment_id?: Maybe<Scalars['Int']>;
  /** тип платежа (напрямую, через платежную систему, ...) */
  payment_type?: Maybe<ActualPaymentTypeEnum>;
  /** исходная сумма (без комиссии) */
  price?: Maybe<Scalars['Float']>;
};

/** Определяет возможные типы оплаты */
export enum ActualPaymentTypeEnum {
  /** Тип оплаты - напрямую */
  Custom = 'custom',
  /** Тип оплаты - через плаежную систему */
  Payment = 'payment'
}

/** Информация по рекламному блоку */
export type Adv = NodeInterface & {
  __typename?: 'Adv';
  adv_block?: Maybe<AdvBlockEnum>;
  count_click?: Maybe<Scalars['Int']>;
  count_view?: Maybe<Scalars['Int']>;
  dt_end?: Maybe<Scalars['DateTimeType']>;
  dt_start?: Maybe<Scalars['DateTimeType']>;
  /** Показывать только в этих соревнованиях */
  events?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id: Scalars['ID'];
  img?: Maybe<FileType>;
  img_src?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_ended?: Maybe<Scalars['Boolean']>;
  is_started?: Maybe<Scalars['Boolean']>;
  /** Показывать только в этих видах спорта */
  sports?: Maybe<Array<Maybe<SportType>>>;
  table: Scalars['String'];
  target_href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum AdvBlockEnum {
  CompetitionsList = 'competitions_list',
  Left = 'left',
  Right = 'right',
  UnderMenu = 'under_menu'
}

/** AdvConnection type definition */
export type AdvConnection = {
  __typename?: 'AdvConnection';
  edges?: Maybe<Array<Maybe<Adv>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type AdvInput = {
  adv_block: AdvBlockEnum;
  dt_end?: InputMaybe<Scalars['DateTimeType']>;
  dt_start: Scalars['DateTimeType'];
  events?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  img?: InputMaybe<IdInput>;
  img_src?: InputMaybe<Scalars['String']>;
  sports?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  target_href: Scalars['String'];
  title: Scalars['String'];
};

export type AdvListFilter = {
  active?: InputMaybe<Scalars['Boolean']>;
  event_id?: InputMaybe<Scalars['Int']>;
  inactive?: InputMaybe<Scalars['Boolean']>;
  search_string?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};

/** Определяет, кто подает заявки в категорию */
export enum ApplicantTypeEnum {
  /** Взрослые любители */
  Amateurs = 'amateurs',
  /** Кто угодно */
  Anyone = 'anyone',
  /** Тренеры */
  Coaches = 'coaches',
  /** Судьи */
  Judges = 'judges',
  /** Спортсмены */
  Sportsmen = 'sportsmen'
}

/** Описание заявки */
export type Application = NodeInterface & {
  __typename?: 'Application';
  /** ИД заявителя */
  applicant_id?: Maybe<Scalars['Int']>;
  /** Тип заявки - индивидуальная, групповая, ... */
  application_type?: Maybe<ApplicationTypeEnum>;
  /** участники (участник) в заявке */
  athletes?: Maybe<Array<Maybe<ApplicationAthlete>>>;
  /** информация о трансляции */
  broadcast_info?: Maybe<ApplicationBroadcastInfo>;
  /** ИД категории, в которй подана заявка на участие */
  category_id?: Maybe<Scalars['Int']>;
  /** название города из справочника */
  city_from_list?: Maybe<Scalars['String']>;
  /** название города, если город не выбран из справочника */
  city_name?: Maybe<Scalars['String']>;
  /** дата подачи заявки */
  dt_create?: Maybe<Scalars['DateTimeType']>;
  /** название группы */
  group_name?: Maybe<Scalars['String']>;
  /** ИД заявки на участие */
  id: Scalars['ID'];
  /** Признак групповой заявки */
  is_team?: Maybe<Scalars['Boolean']>;
  /** информация об оплате заявки */
  payment_info?: Maybe<ApplicationPaymentInfo>;
  /** сумма стартового взноса */
  price?: Maybe<Scalars['Float']>;
  /** Статус заявки на участие */
  status?: Maybe<ApplicationStatusEnum>;
  table: Scalars['String'];
};

/** ApplicationAthlete описывает участника в заявке на мероприятие */
export type ApplicationAthlete = NodeInterface & {
  __typename?: 'ApplicationAthlete';
  /** Судейская категория */
  category?: Maybe<Scalars['String']>;
  city_from_list?: Maybe<Scalars['String']>;
  city_name?: Maybe<Scalars['String']>;
  coach?: Maybe<Coach>;
  /** Тренер участника */
  coach_name?: Maybe<Scalars['String']>;
  coaches?: Maybe<Array<Maybe<SportsmanOrganizationCoach>>>;
  comment_field?: Maybe<Scalars['String']>;
  /** Страна участника */
  country?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<Maybe<FileStorage>>>;
  /** Дата рождения участника */
  dt_birthday?: Maybe<Scalars['DateType']>;
  /** Email участника */
  email?: Maybe<Scalars['String']>;
  fast_view?: Maybe<Scalars['String']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Пол участника */
  gender?: Maybe<Scalars['Int']>;
  /** ИД участника */
  id: Scalars['ID'];
  inspection_dates?: Maybe<AthleteInspectionDates>;
  inspection_ranks?: Maybe<Array<Maybe<AthleteRankTest>>>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<OrganizationForLists>;
  /** Отчество участника */
  patronymic?: Maybe<Scalars['String']>;
  /** Телефон участника */
  phone?: Maybe<Scalars['String']>;
  rank?: Maybe<Rank>;
  rank_name?: Maybe<Scalars['String']>;
  rank_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  sportrank?: Maybe<Rank>;
  /** Спорт школа участника */
  sports_school?: Maybe<Scalars['String']>;
  /** спортсмен из чистого списка в заявке */
  sportsman?: Maybe<Sportsman>;
  table: Scalars['String'];
  /** Название команды / группы */
  team?: Maybe<Scalars['String']>;
};

/** Структура участника для сохранения заявки на участие */
export type ApplicationAthleteInput = {
  category?: InputMaybe<JudgeCategoryEnum>;
  city_from_list?: InputMaybe<Scalars['String']>;
  city_name?: InputMaybe<Scalars['String']>;
  /** ссылка на сущность тренера спортсмена */
  coach_id?: InputMaybe<Scalars['ID']>;
  coach_name?: InputMaybe<Scalars['String']>;
  coaches?: InputMaybe<Scalars['String']>;
  comment_field?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** ссылка на сущность-организацию спортсмена */
  organization_id?: InputMaybe<Scalars['ID']>;
  patronymic?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  rank_id?: InputMaybe<Scalars['Int']>;
  rank_name?: InputMaybe<Scalars['String']>;
  sports_school?: InputMaybe<Scalars['String']>;
  /** ссылка на атлета из чистого списка (athlete_id) */
  sportsman_id?: InputMaybe<Scalars['ID']>;
};

/** Информация о приобретенной трансляции */
export type ApplicationBroadcastInfo = {
  __typename?: 'ApplicationBroadcastInfo';
  /** ключ трансляции */
  key?: Maybe<Scalars['String']>;
  /** ссылка на трансляцию */
  link?: Maybe<Scalars['String']>;
  /** сообщение */
  message?: Maybe<Scalars['String']>;
};

/** Определяет контексты заявок на мероприятие */
export enum ApplicationContextEnum {
  /** контекст заявок на учестие в меропрятии */
  Athletes = 'athletes',
  /** контекст заявок на проживание */
  Booking = 'booking',
  /** контекст заявок на предоставление услуг или продажу товаров */
  Sales = 'sales',
  /** контекст заявок на трансляции */
  Translations = 'translations'
}

/** Фильтр для списка заявок */
export type ApplicationListFilter = {
  app_status?: InputMaybe<ApplicationStatusEnum>;
  athlete_status?: InputMaybe<AthleteStatusEnum>;
  context?: InputMaybe<ApplicationContextEnum>;
  dt_birthday?: InputMaybe<Scalars['String']>;
  include_paid?: InputMaybe<Scalars['Boolean']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  payment_status?: InputMaybe<PaymentStatusEnum>;
  search_string?: InputMaybe<Scalars['String']>;
  sportrank_id?: InputMaybe<Scalars['ID']>;
};

/** Подробная информация об оплате заявки */
export type ApplicationPaymentInfo = {
  __typename?: 'ApplicationPaymentInfo';
  /** Фактически выполненные оплаты */
  actual_payments?: Maybe<Array<Maybe<ActualPayment>>>;
  /** полная стоимость заявки (с комиссией) */
  amount?: Maybe<Scalars['Float']>;
  /** сумма комиссии за заявку */
  commission?: Maybe<Scalars['Float']>;
  /** оплаченная комиссия */
  paid_commission?: Maybe<Scalars['Float']>;
  /** оплаченная сумма */
  paid_sum?: Maybe<Scalars['Float']>;
  /** Флаг, показывающий что доступна частичная оплата заявки */
  pay_part_available?: Maybe<Scalars['Boolean']>;
  /** Варианты долей оплаты заявок в соревновании */
  pay_parts?: Maybe<Array<Maybe<PaymentPart>>>;
  /** Статус оплаты - полная, частичная, ... */
  payment_status?: Maybe<PaymentStatusEnum>;
  /** исходная стоимость заявки (без комиссии) */
  price?: Maybe<Scalars['Float']>;
};

/** ApplicationPaymentInfoByPaymentId type definition */
export type ApplicationPaymentInfoByPaymentId = {
  __typename?: 'ApplicationPaymentInfoByPaymentId';
  amount?: Maybe<Scalars['Int']>;
  app_id?: Maybe<Scalars['Int']>;
  athlete_display_name?: Maybe<Scalars['JSON']>;
  competition_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

/** Данные для оплаты заявки */
export type ApplicationPaymentInput = {
  app_id: Scalars['ID'];
  pay_part: PaymentPartInput;
};

/** Определяет персону, включенную в заявку на участие. Это может быть спортсмен, тренер ... Дополнительно возвращается информация включена ли персона в проживание. */
export type ApplicationPerson = NodeInterface & {
  __typename?: 'ApplicationPerson';
  /** ИД заявки на участие, в которой подан данный человек */
  app_id?: Maybe<Scalars['Int']>;
  /** статус заявки на участие, в которой подан человек */
  application_status?: Maybe<ApplicationStatusEnum>;
  /** ИД заявки на проживание, в которой подан данный человек */
  booking_app_id?: Maybe<Scalars['Int']>;
  display_name?: Maybe<Scalars['String']>;
  dt_birthday?: Maybe<Scalars['DateType']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  person_type?: Maybe<ApplicationPersonTypeEnum>;
  rank?: Maybe<Rank>;
  rank_name?: Maybe<Scalars['String']>;
  /** ИД резидента в БД, т.е. записи с информацие о проживающем. Если NULL - значит человек не резервировал проживание. */
  resident_id?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
};

/** Определяет типы персон в заявке на участие */
export enum ApplicationPersonTypeEnum {
  /** спортсмен */
  Athlete = 'athlete',
  /** тренер */
  Coach = 'coach',
  /** другое */
  Other = 'other'
}

/** ApplicationPersonsConnection type definition */
export type ApplicationPersonsConnection = {
  __typename?: 'ApplicationPersonsConnection';
  edges?: Maybe<Array<Maybe<ApplicationPerson>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Фильтр для списка заявок */
export type ApplicationPersonsFilter = {
  birth_year?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  rank_id?: InputMaybe<Scalars['Int']>;
  search_string?: InputMaybe<Scalars['String']>;
};

/** Определяет возможные статусы заявок */
export enum ApplicationStatusEnum {
  /** Подтверждена – организатор подтвердил заявку */
  Allow = 'allow',
  /** Отменена – заявитель отменил заявку */
  Canceled = 'canceled',
  /** Отклонена – организатор отклонил заявку */
  Deny = 'deny',
  /** Ожидает подтверждения – заявка подана, но еще не обработана организатором */
  Unknown = 'unknown',
  /** В листе ожидания – организатор переместил заявку в лист ожидания */
  Wait = 'wait'
}

/** Определяет типы заявок на участие в мероприятии */
export enum ApplicationTypeEnum {
  /** тип заявки - групповая */
  Group = 'group',
  /** тип заявки - индивидуальная */
  Personal = 'personal'
}

/** Структура данных для различных дат, которые проверяются комиссией по допуску */
export type AthleteInspectionDate = {
  __typename?: 'AthleteInspectionDate';
  athlete_id: Scalars['ID'];
  confirmation_date?: Maybe<Scalars['DateType']>;
  confirmed_by_user?: Maybe<AUser>;
  field_name: Scalars['String'];
  field_value: Scalars['DateType'];
  status?: Maybe<AthleteStatusEnum>;
};

/** Определяет различные даты, которые проверяются комиссией по допуску спортсменов. */
export enum AthleteInspectionDateEnum {
  /** Agreement date. */
  Agreement = 'agreement',
  /** Insurance expiration date. */
  Insurance = 'insurance',
  /** Medcert expiration date. */
  Medcert = 'medcert',
  /** Rank assignment date. */
  Rank = 'rank'
}

/** AthleteInspectionDates описывает даты, которые проверяются комиссией по допуску */
export type AthleteInspectionDates = {
  __typename?: 'AthleteInspectionDates';
  agreement?: Maybe<AthleteInspectionDate>;
  insurance?: Maybe<AthleteInspectionDate>;
  medcert?: Maybe<AthleteInspectionDate>;
  rank?: Maybe<AthleteInspectionDate>;
};

/** Тесты по разрядам, которые проверяются комиссией по допуску */
export type AthleteRankTest = {
  __typename?: 'AthleteRankTest';
  athlete_id: Scalars['ID'];
  commission_id?: Maybe<Scalars['ID']>;
  confirmation_date?: Maybe<Scalars['DateType']>;
  confirmed_by_user?: Maybe<AUser>;
  passed?: Maybe<Scalars['Boolean']>;
  test_key: Scalars['String'];
};

/** Определяет тесты для подтверждения спортивных разрядов. */
export enum AthleteRankTestEnum {
  /** I */
  I = 'i',
  /** II */
  Ii = 'ii',
  /** III */
  Iii = 'iii',
  /** 1 */
  One = 'one',
  /** 3 */
  Three = 'three',
  /** 2 */
  Two = 'two'
}

/** Определяет статусы спортсмена, связанные с присвоением разряда и документами (согласие, мед. справка, страховка). */
export enum AthleteStatusEnum {
  /** документ просрочен */
  Expired = 'expired',
  /** требуется проверка */
  Inspect = 'inspect',
  /** нет данных */
  Nodata = 'nodata',
  /** все ок */
  Ok = 'ok'
}

/** Auser type definition */
export type Auser = NodeInterface & {
  __typename?: 'Auser';
  actual_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fi_actual_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** AuserConnection type definition */
export type AuserConnection = {
  __typename?: 'AuserConnection';
  edges?: Maybe<Array<Maybe<Auser>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** AuserIDInput type definition */
export type AuserIdInput = {
  auser_id: Scalars['Int'];
};

/** Avatar type definition */
export type Avatar = NodeInterface & {
  __typename?: 'Avatar';
  entity: Scalars['String'];
  entity_id: Scalars['Int'];
  id: Scalars['ID'];
  table: Scalars['String'];
  uri?: Maybe<Scalars['String']>;
};

/** Calendar type definition */
export type Calendar = NodeInterface & {
  __typename?: 'Calendar';
  avatar?: Maybe<Avatar>;
  child_org_apps_dt_end?: Maybe<Scalars['DateType']>;
  child_org_apps_dt_start?: Maybe<Scalars['DateType']>;
  count_competitions: Scalars['Int'];
  deleted?: Maybe<Scalars['Boolean']>;
  display_name?: Maybe<Scalars['String']>;
  hide_in_organization?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  is_main?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationName>;
  organization_avatar?: Maybe<Avatar>;
  owner_display_name?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  to_delete?: Maybe<ActionDescription>;
};

/** CalendarConnection type definition */
export type CalendarConnection = {
  __typename?: 'CalendarConnection';
  edges?: Maybe<Array<Maybe<Calendar>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** CalendarInput type definition */
export type CalendarInput = {
  child_org_apps_dt_end?: InputMaybe<Scalars['DateType']>;
  child_org_apps_dt_start?: InputMaybe<Scalars['DateType']>;
  hide_in_organization: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  is_main: Scalars['Boolean'];
  organization: IdInput;
  title?: InputMaybe<Scalars['String']>;
};

/** CalendarOwner type definition */
export type CalendarOwner = {
  __typename?: 'CalendarOwner';
  auser_id: Scalars['ID'];
  display_name?: Maybe<Scalars['String']>;
  org_id?: Maybe<Scalars['ID']>;
};

export type ChiefPerson = {
  __typename?: 'ChiefPerson';
  dirty_name?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastname?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
};

/** Person input with choice: person id or person dirty name */
export type ChiefPersonInput = {
  auser_id?: InputMaybe<Scalars['Int']>;
  dirty_name?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
};

/** City type definition */
export type City = NodeInterface & {
  __typename?: 'City';
  displayName?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  fullDisplayName?: Maybe<Scalars['String']>;
  full_display_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['ID']>;
  region_name?: Maybe<Scalars['String']>;
  shortname?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

export type CityInput = {
  displayName?: InputMaybe<Scalars['String']>;
  fullDisplayName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type ClientAppLogInput = {
  log?: InputMaybe<Array<InputMaybe<ClientAppLogRecordInput>>>;
};

/** Определяет уровни логгирования клиентских приложений. */
export enum ClientAppLogLevelEnum {
  /** Тревога. Требуется немедленное действие. */
  Alert = 'alert',
  /** Критическая ошибка. */
  Critical = 'critical',
  /** Отладочное сообщение. */
  Debug = 'debug',
  /** Аварийная ситуация. Система непригодна для использования. */
  Emergency = 'emergency',
  /** Некритическая ошибка. */
  Error = 'error',
  /** Информационное сообщение. */
  Info = 'info',
  /** Уведомление. Нормальная, но при этом значимая ситуация. */
  Notice = 'notice',
  /** Предупреждение о нежелательной ситуации. Например, использование deprecated. */
  Warning = 'warning'
}

export type ClientAppLogRecordInput = {
  dt_create: Scalars['DateTimeType'];
  level: ClientAppLogLevelEnum;
  message: Scalars['String'];
  module: Scalars['String'];
  user_agent: Scalars['String'];
};

/** Coach type definition */
export type Coach = NodeInterface & {
  __typename?: 'Coach';
  coach_category?: Maybe<Scalars['String']>;
  coach_status?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  deleting_prohibits?: Maybe<Array<Maybe<CoachDeletingProhibits>>>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_honored?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['String']>;
  organizations?: Maybe<Array<Maybe<CoachOrganizationItem>>>;
  over_time_editing: Scalars['Boolean'];
  /** Персона тренера */
  person?: Maybe<Person>;
  person_id?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};


/** Coach type definition */
export type CoachOrganizationsArgs = {
  current?: InputMaybe<Scalars['Boolean']>;
};

/** CoachByOrganization type definition */
export type CoachByOrganization = NodeInterface & {
  __typename?: 'CoachByOrganization';
  coach_category?: Maybe<Scalars['String']>;
  coach_status?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  displayName?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateType']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  is_honored?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['String']>;
  not_in_school?: Maybe<Scalars['Boolean']>;
  person?: Maybe<Person>;
  person_id?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  to?: Maybe<Scalars['DateType']>;
};

/** CoachByOrganizationConnection type definition */
export type CoachByOrganizationConnection = {
  __typename?: 'CoachByOrganizationConnection';
  edges?: Maybe<Array<Maybe<CoachByOrganization>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** CoachConnection type definition */
export type CoachConnection = {
  __typename?: 'CoachConnection';
  edges?: Maybe<Array<Maybe<Coach>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** CoachDeletingProhibits type definition */
export type CoachDeletingProhibits = {
  __typename?: 'CoachDeletingProhibits';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type CoachListFilter = {
  categorie?: InputMaybe<Scalars['String']>;
  coach_category?: InputMaybe<Scalars['String']>;
  dt_birthday?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  parent_organization1_id?: InputMaybe<Scalars['Int']>;
  region_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ContingentSportsmanStatusTypeEnum>;
};

/** CoachOrganizationItem type definition */
export type CoachOrganizationItem = {
  __typename?: 'CoachOrganizationItem';
  active: Scalars['Boolean'];
  deleting_prohibits?: Maybe<Array<Maybe<CoachDeletingProhibits>>>;
  from_month?: Maybe<Scalars['MonthType']>;
  from_year?: Maybe<Scalars['YearType']>;
  is_main: Scalars['Boolean'];
  non_active: Scalars['Boolean'];
  organization: Organization;
  over_time_editing: Scalars['Boolean'];
  to_month?: Maybe<Scalars['MonthType']>;
  to_year?: Maybe<Scalars['YearType']>;
};

export enum ContingentSportsmanStatusTypeEnum {
  Denied = 'denied',
  Revoked = 'revoked',
  Verification = 'verification',
  Verified = 'verified'
}

export type Country = NodeInterface & {
  __typename?: 'Country';
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  name_en?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** Данные карты плательщика */
export type CreditCardDataInput = {
  cc_cvc: Scalars['String'];
  cc_exp_month: Scalars['String'];
  cc_exp_year: Scalars['String'];
  cc_pan: Scalars['String'];
};

/** Discipline type definition */
export type Discipline = NodeInterface & {
  __typename?: 'Discipline';
  id: Scalars['ID'];
  max_number_participants?: Maybe<Scalars['Int']>;
  min_number_participants?: Maybe<Scalars['Int']>;
  min_required_number_participants?: Maybe<Scalars['Int']>;
  short_title?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['Int']>;
  string_key?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type_number_participants?: Maybe<Scalars['String']>;
};

/** DisciplineConnection type definition */
export type DisciplineConnection = {
  __typename?: 'DisciplineConnection';
  edges?: Maybe<Array<Maybe<Discipline>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Направления в которых выступает спорстмен/ тренирует тренер. */
export enum DisciplineTitleEnum {
  /** BMX-фристайл */
  BmxFreestyle = 'bmx_freestyle',
  /** BMX-гонка */
  BmxRace = 'bmx_race'
}

/** Реквизиты для документов Олимпико (договор, заявка, акт) */
export type DocumentOlympico = NodeInterface & {
  __typename?: 'DocumentOlympico';
  /** наименование организации */
  company_name?: Maybe<Scalars['String']>;
  /** электропочта */
  emails?: Maybe<Scalars['String']>;
  /** ИД записи */
  event_id: Scalars['ID'];
  /** тип мероприятия */
  event_type: Scalars['String'];
  /** имя представителя */
  first_name?: Maybe<Scalars['String']>;
  /** ИД записи */
  id: Scalars['ID'];
  /** реквизиты опубликованы */
  is_published?: Maybe<Scalars['Boolean']>;
  /** фаимлия представителя */
  last_name?: Maybe<Scalars['String']>;
  /** форма собственности */
  ownership_type?: Maybe<Scalars['String']>;
  /** отчество представителя */
  patronymic?: Maybe<Scalars['String']>;
  /** должность представителя */
  post?: Maybe<Scalars['String']>;
  /** реквизиты для документов */
  requisites?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** Error type definition */
export type Error = {
  __typename?: 'Error';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Event type definition */
export type Event = NodeInterface & {
  __typename?: 'Event';
  address?: Maybe<Scalars['String']>;
  app_info?: Maybe<EventApplicationInfo>;
  /** Выводит аватар мероприятия, если его нет - аватар календаря, если его нет - организации */
  avatar?: Maybe<Avatar>;
  background?: Maybe<Avatar>;
  calendar_id?: Maybe<Scalars['Int']>;
  calendar_owner?: Maybe<CalendarOwner>;
  canceled?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Maybe<EventCategory>>>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']>;
  city_name?: Maybe<Scalars['String']>;
  count_applications?: Maybe<Scalars['Int']>;
  count_applications_to_apply?: Maybe<Scalars['Int']>;
  count_competitors?: Maybe<Scalars['Int']>;
  count_my_applications?: Maybe<Scalars['Int']>;
  count_photo?: Maybe<Scalars['Int']>;
  count_results?: Maybe<Scalars['Int']>;
  count_sportsmen?: Maybe<Scalars['Int']>;
  country_id?: Maybe<Scalars['Int']>;
  country_name?: Maybe<Scalars['String']>;
  /** Статус/шаг создания соревнования */
  creation_state?: Maybe<EventCreationStatesEnum>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_place?: Maybe<Scalars['String']>;
  disciplines?: Maybe<Array<Maybe<EventDiscipline>>>;
  dt_closing_photo_seilings?: Maybe<Scalars['DateType']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  dt_end?: Maybe<Scalars['DateType']>;
  dt_start?: Maybe<Scalars['DateType']>;
  email?: Maybe<Scalars['String']>;
  event_type?: Maybe<Scalars['String']>;
  has_results?: Maybe<Scalars['Boolean']>;
  /** Есть видео выступлений (Boolean) */
  has_video?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  judges?: Maybe<Array<Maybe<ChiefPerson>>>;
  limit_athletes?: Maybe<Scalars['Int']>;
  limit_athletes_type?: Maybe<EventCategoryLimitAthletesTypeEnum>;
  main_judge?: Maybe<ChiefPerson>;
  main_secretary?: Maybe<ChiefPerson>;
  map_info?: Maybe<EventMapInfo>;
  name: Scalars['String'];
  /** Флаг "организатору разрешено управлять трансляцией" */
  org_can_manage_translation?: Maybe<Scalars['Boolean']>;
  organization_organizers?: Maybe<Array<Maybe<EventOrganizationOrganizer>>>;
  /** Выводит аватар мероприятия, если его нет - аватар календаря, если его нет - организации */
  parent_avatar?: Maybe<Avatar>;
  parent_calendar_requests?: Maybe<Array<Maybe<EventToParentCalendarRequest>>>;
  phone?: Maybe<Scalars['String']>;
  postwall_write_rights?: Maybe<Scalars['String']>;
  preliminary?: Maybe<Scalars['Boolean']>;
  /** Квалификационное мероприятие (Boolean) */
  qualifying?: Maybe<Scalars['Boolean']>;
  /** Код для судейской системы */
  refereeing_system_code?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
  region_id?: Maybe<Scalars['Int']>;
  region_name?: Maybe<Scalars['String']>;
  resources?: Maybe<Array<Maybe<FileType>>>;
  responsible?: Maybe<EventResponsibleUserList>;
  results_published?: Maybe<Scalars['Boolean']>;
  revise_message?: Maybe<Scalars['String']>;
  /** Расписание соревнования по дням */
  schedule?: Maybe<Array<Maybe<EventSchedule>>>;
  shared_link?: Maybe<Scalars['Boolean']>;
  short_title?: Maybe<Scalars['String']>;
  show_ath_list?: Maybe<Scalars['String']>;
  show_insurance_selling_button?: Maybe<Scalars['Boolean']>;
  show_results?: Maybe<EventShowResultsEnum>;
  sport_id?: Maybe<Scalars['Int']>;
  sport_type?: Maybe<SportType>;
  status?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  /** Настроенные в соревновании трансляции фейскаст */
  translations?: Maybe<Array<Maybe<EventTranslationItem>>>;
  use_any_user_payment?: Maybe<Scalars['Boolean']>;
  /** DEPRECATED use Event.app_info.use_application instead */
  use_categories?: Maybe<Scalars['Boolean']>;
  user_is_organizer?: Maybe<Scalars['Boolean']>;
  /** Заголовок кнопки оплаты */
  user_payment_button_title: Scalars['String'];
  /** @deprecated Поле перенесено в "app_info" */
  white_list?: Maybe<Scalars['Boolean']>;
  who_are_competing?: Maybe<EventWhoAreCompeting>;
};

/** Описывает заявку на проживание */
export type EventAccomodation = NodeInterface & {
  __typename?: 'EventAccomodation';
  accomodations?: Maybe<Array<Maybe<AccomodationInfo>>>;
  applicant_id?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** информация об оплате заявки */
  payment_info?: Maybe<ApplicationPaymentInfo>;
  payment_status?: Maybe<PaymentStatusEnum>;
  phone?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<ApplicationStatusEnum>;
  table: Scalars['String'];
};

export type EventAccomodationDatesInput = {
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
};

export type EventAccomodationHotelInput = {
  description?: InputMaybe<Scalars['String']>;
  display_name: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  rooms?: InputMaybe<Array<InputMaybe<EventAccomodationRoomInput>>>;
};

export type EventAccomodationInput = {
  dates?: InputMaybe<EventAccomodationDatesInput>;
  hotels?: InputMaybe<Array<InputMaybe<EventAccomodationHotelInput>>>;
  id: Scalars['Int'];
  is_forbidden_edit?: InputMaybe<Scalars['Boolean']>;
  use_booking: Scalars['Boolean'];
};

export type EventAccomodationRoomInput = {
  accommodation_types?: InputMaybe<Array<InputMaybe<EventAccomodationTypeInput>>>;
  amount: Scalars['Int'];
  display_name: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
};

/** Схема описания параметров размещения в мероприятии */
export type EventAccomodationScheme = {
  __typename?: 'EventAccomodationScheme';
  dates?: Maybe<Array<Maybe<AccomodationDatesScheme>>>;
  event_id: Scalars['ID'];
  hotels?: Maybe<Array<Maybe<AccomodationHotelScheme>>>;
};

export type EventAccomodationTypeInput = {
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  number_persons: Scalars['Int'];
  price: Scalars['Float'];
};

/** EventAccomodationsConnection type definition */
export type EventAccomodationsConnection = {
  __typename?: 'EventAccomodationsConnection';
  edges?: Maybe<Array<Maybe<EventAccomodation>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** EventAdvertising type definition */
export type EventAdvertising = NodeInterface & {
  __typename?: 'EventAdvertising';
  count_view?: Maybe<Scalars['Int']>;
  dt_end?: Maybe<Scalars['DateTimeType']>;
  dt_start?: Maybe<Scalars['DateTimeType']>;
  id: Scalars['ID'];
  image_name?: Maybe<Scalars['String']>;
  image_src?: Maybe<Scalars['String']>;
  reclame_block?: Maybe<Scalars['String']>;
  redirect_href?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  target_href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum EventAdvertisingPlaceEnum {
  Event = 'event',
  List = 'list'
}

/** Описание заявки на участие в мероприятии */
export type EventApplication = {
  __typename?: 'EventApplication';
  applications?: Maybe<Array<Maybe<Application>>>;
  category: EventCategory;
};

/** EventApplicationByCategory описывает заявки на мероприятие по категориям */
export type EventApplicationByCategory = {
  __typename?: 'EventApplicationByCategory';
  applications?: Maybe<Array<Maybe<Application>>>;
  category: EventCategory;
};

/** EventApplicationByCategoryConnection type definition */
export type EventApplicationByCategoryConnection = {
  __typename?: 'EventApplicationByCategoryConnection';
  edges?: Maybe<Array<Maybe<EventApplicationByCategory>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Информация, относящаяся к заявкам определенного контекста (на участие, на проживание и т.д.) */
export type EventApplicationContextInfo = {
  __typename?: 'EventApplicationContextInfo';
  commissions?: Maybe<PaymentCommissionSettings>;
  context: ApplicationContextEnum;
  default_commissions?: Maybe<PaymentCommissionSettings>;
  /** Дата закрытия приема оплаты */
  dt_payment_end?: Maybe<Scalars['DateTimeType']>;
  /** Дата открытия приема оплаты */
  dt_payment_start?: Maybe<Scalars['DateTimeType']>;
  /** Дата закрытия подачи заявок на мероприятие */
  dt_registration_end?: Maybe<Scalars['DateTimeType']>;
  /** Дата открытия подачи заявок на мероприятие */
  dt_registration_start?: Maybe<Scalars['DateTimeType']>;
  /** Ид мероприятия */
  id: Scalars['Int'];
  /** Флаг, показывающий что оплата возможна только после утверждения заявки */
  is_accept_before_payment?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что оплата заявки принимаются автоматически */
  is_auto_accept_apps?: Maybe<Scalars['Boolean']>;
  is_partner_commissions_same?: Maybe<Scalars['Boolean']>;
  legalentity?: Maybe<Legalentity>;
  legalentity_id?: Maybe<Scalars['Int']>;
  partner_commissions?: Maybe<PaymentCommissionSettings>;
  /** Флаг, показывающий что прием оплат закрыт */
  payment_closed?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что подача заявок закрыта */
  registration_closed?: Maybe<Scalars['Boolean']>;
};

export type EventApplicationContextSettings = {
  commissions?: InputMaybe<PaymentCommissionSettingsInput>;
  dt_payment_end: Scalars['DateType'];
  dt_payment_start: Scalars['DateType'];
  dt_registration_end: Scalars['DateTimeType'];
  dt_registration_start: Scalars['DateTimeType'];
  is_accept_before_payment: Scalars['Boolean'];
  is_auto_accept_apps?: InputMaybe<Scalars['Boolean']>;
  is_partner_commissions_same?: InputMaybe<Scalars['Boolean']>;
  legalentity_id?: InputMaybe<Scalars['Int']>;
  partner_commissions?: InputMaybe<PaymentCommissionSettingsInput>;
};

/** Информация, относящаяся к заявкам на мероприятие */
export type EventApplicationInfo = {
  __typename?: 'EventApplicationInfo';
  /** Заявки могут подаваться только ответственными школ */
  app_from_schools?: Maybe<Scalars['Boolean']>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  athletes_add_app_button_available?: Maybe<Scalars['Boolean']>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  booking_add_app_button_available?: Maybe<Scalars['Boolean']>;
  /** Показывать страницу подачи заявок на проживание */
  booking_page_available?: Maybe<Scalars['Boolean']>;
  /** Плейсхолдер поля комментарий в заявке */
  comment_field_placeholder?: Maybe<Scalars['String']>;
  /** Комиссия для участника в процентах */
  commission?: Maybe<Scalars['Float']>;
  /** комиссия для участника в рублях */
  commission_fix?: Maybe<Scalars['Float']>;
  /** Настройки заявок на участие, проживание, трансляцию - в зависимости от контекста */
  context_settings?: Maybe<EventApplicationContextInfo>;
  /** флаг - скрывать стоимость заявок */
  hide_app_price?: Maybe<Scalars['Boolean']>;
  /** id соревнования */
  id: Scalars['Int'];
  /** Флаг, показывающий принимает ли сайт стартовые взносы */
  is_paid?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что доступна частичная оплата заявки */
  pay_part_available?: Maybe<Scalars['Boolean']>;
  pay_part_percentage?: Maybe<Scalars['Float']>;
  /**
   * Варианты долей оплаты заявок в соревновании
   * @deprecated используйте свойство pay_part_percentage
   */
  pay_parts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Показывать кнопку оплаты */
  payment_button_available?: Maybe<Scalars['Boolean']>;
  /** Окончание оплат (самая поздняя дата из всех настроек окончаний оплат разных типов заявок или дата начала соревнования, если иное не настроено) */
  payment_button_dt_end?: Maybe<Scalars['DateTimeType']>;
  /** Начало оплат (самая ранняя дата из всех настроек начал оплат разных типов заявок) */
  payment_button_dt_start?: Maybe<Scalars['DateTimeType']>;
  /** Заголовок кнопки оплаты */
  payment_button_title: Scalars['String'];
  /** Показывать страницу оплаты заявок */
  payment_page_available?: Maybe<Scalars['Boolean']>;
  /** Показывать кнопку купить трансляци */
  reg_button_available?: Maybe<Scalars['Boolean']>;
  /** Окончание подачи заявок (самая поздняя дата из всех настроек окончаний подачи разных типов заявок или дата начала соревнования, если иное не настроено) */
  reg_button_dt_end?: Maybe<Scalars['DateTimeType']>;
  /** Начало подачи заявок (самая ранняя дата из всех настроек начал подачи разных типов заявок) */
  reg_button_dt_start?: Maybe<Scalars['DateTimeType']>;
  /** Заголовок кнопки подачи заявки */
  reg_button_title?: Maybe<Scalars['String']>;
  /** Тип кнопки подачи заявки */
  reg_button_type?: Maybe<EventRegButtonTypeEnum>;
  /** Ссылка на внешний сайт при подаче заявки через внешний сайт */
  reg_link?: Maybe<Scalars['String']>;
  /** Показывать страницу подачи заявок на участие */
  reg_page_available?: Maybe<Scalars['Boolean']>;
  /** Способ подачи заявки на мероприятие */
  reg_type?: Maybe<EventRegTypeEnum>;
  /** Показывать кнопку добавления заявки внутри страницы заявок */
  translations_add_app_button_available?: Maybe<Scalars['Boolean']>;
  /** Показывать кнопку купить трансляцию */
  translations_button_available?: Maybe<Scalars['Boolean']>;
  /** Показывать страницу подачи заявок на трансляцию */
  translations_page_available?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что сайт принимает заявки на участие */
  use_application?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что сайт принимает заявки на проживание */
  use_booking?: Maybe<Scalars['Boolean']>;
  /** Использовать поле комментарий в заявке */
  use_comment_field?: Maybe<Scalars['Boolean']>;
  /** Использовать поле документы в заявке */
  use_documents_field?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что оплата возможна только после утверждения заявки */
  use_pay_after_approval?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что сайт принимает заявки на продажу доп услуг */
  use_sales?: Maybe<Scalars['Boolean']>;
  /** Флаг, показывающий что сайт использует заявки на фейскаст трансляциии */
  use_translations?: Maybe<Scalars['Boolean']>;
  /** DEPRECATED use reg_button_available and payment_button_available instead */
  user_can_apply?: Maybe<Scalars['Boolean']>;
  /** Заявки могут подаваться только из белого списка */
  white_list?: Maybe<Scalars['Boolean']>;
};


/** Информация, относящаяся к заявкам на мероприятие */
export type EventApplicationInfoContext_SettingsArgs = {
  context: ApplicationContextEnum;
};

export type EventApplicationInput = {
  application_status?: InputMaybe<ApplicationStatusEnum>;
  application_type: ApplicationTypeEnum;
  athletes?: InputMaybe<Array<InputMaybe<ApplicationAthleteInput>>>;
  group_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type EventApplicationSettingsInput = {
  athletes?: InputMaybe<EventApplicationContextSettings>;
  booking?: InputMaybe<EventApplicationContextSettings>;
  commission_participant?: InputMaybe<Scalars['Float']>;
  commission_participant_fix?: InputMaybe<Scalars['Float']>;
  id: Scalars['Int'];
  is_paid?: InputMaybe<Scalars['Boolean']>;
  pay_part_available?: InputMaybe<Scalars['Boolean']>;
  pay_part_percentage?: InputMaybe<Scalars['Float']>;
  reg_button_title?: InputMaybe<Scalars['String']>;
  reg_email_link?: InputMaybe<Scalars['String']>;
  reg_outer_link?: InputMaybe<Scalars['String']>;
  reg_type: EventRegTypeEnum;
  translations?: InputMaybe<EventApplicationContextSettings>;
  user_payment_button_title?: InputMaybe<EventPaymentButtonTitleEnum>;
};

/** EventApplicationsConnection type definition */
export type EventApplicationsConnection = {
  __typename?: 'EventApplicationsConnection';
  edges?: Maybe<Array<Maybe<EventApplication>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EventCategoriesInput = {
  categories?: InputMaybe<Array<InputMaybe<EventCategoryItemInput>>>;
  comment_field_placeholder?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  limit_athletes?: InputMaybe<Scalars['Int']>;
  limit_athletes_type: EventCategoryLimitAthletesTypeEnum;
  use_categories: Scalars['Boolean'];
  use_comment_field: Scalars['Boolean'];
  use_documents_field: Scalars['Boolean'];
};

/** EventCategory type definition */
export type EventCategory = NodeInterface & {
  __typename?: 'EventCategory';
  applicant_type?: Maybe<ApplicantTypeEnum>;
  birthday_max?: Maybe<Scalars['DateType']>;
  birthday_min?: Maybe<Scalars['DateType']>;
  collective_category?: Maybe<FsCollectiveCategoryEnum>;
  count_applications?: Maybe<Scalars['Int']>;
  count_applications_fully_paid?: Maybe<Scalars['Int']>;
  count_applications_partially_paid?: Maybe<Scalars['Int']>;
  count_athletes?: Maybe<Scalars['Int']>;
  deleting_prohibits?: Maybe<Array<Maybe<EventCategoryDeletingProhibits>>>;
  discipline_char_id?: Maybe<Scalars['String']>;
  discipline_id?: Maybe<Scalars['Int']>;
  entrance_cost?: Maybe<Scalars['Float']>;
  event_id?: Maybe<Scalars['Int']>;
  facecast_id?: Maybe<Scalars['Int']>;
  gender?: Maybe<EventCompetitorAthleteGenderEnum>;
  has_video?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  limit_applications?: Maybe<Scalars['Int']>;
  max_number_participants?: Maybe<Scalars['Int']>;
  min_number_participants?: Maybe<Scalars['Int']>;
  min_required_number_participants?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  rank_id?: Maybe<Scalars['Int']>;
  score_names?: Maybe<Array<Maybe<ScoreName>>>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  translation_date?: Maybe<Scalars['DateType']>;
  type_number_participants?: Maybe<EventCategoryTypeNumberParticipantsEnum>;
  use_team_name?: Maybe<Scalars['Boolean']>;
};

/** EventCategoryDeletingProhibits type definition */
export type EventCategoryDeletingProhibits = {
  __typename?: 'EventCategoryDeletingProhibits';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type EventCategoryInput = {
  birthday_max?: InputMaybe<Scalars['DateType']>;
  birthday_min?: InputMaybe<Scalars['DateType']>;
  discipline_id?: InputMaybe<Scalars['Int']>;
  entrance_cost?: InputMaybe<Scalars['Float']>;
  event_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  limit_applications?: InputMaybe<Scalars['Int']>;
  max_number_participants?: InputMaybe<Scalars['Int']>;
  min_number_participants?: InputMaybe<Scalars['Int']>;
  min_required_number_participants?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<IdInput>;
  score_names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_order?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type_number_participants?: InputMaybe<EventCategoryTypeNumberParticipantsEnum>;
};

export type EventCategoryItemInput = {
  applicant_type?: InputMaybe<ApplicantTypeEnum>;
  collective_category?: InputMaybe<FsCollectiveCategoryEnum>;
  discipline?: InputMaybe<IdInput>;
  entrance_cost?: InputMaybe<Scalars['Float']>;
  gender?: InputMaybe<EventCompetitorAthleteGenderEnum>;
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  limit_applications?: InputMaybe<Scalars['Int']>;
  max_number_participants?: InputMaybe<Scalars['Int']>;
  min_number_participants?: InputMaybe<Scalars['Int']>;
  min_required_number_participants?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<IdInput>;
  score_names?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
  type_number_participants?: InputMaybe<EventCategoryTypeNumberParticipantsEnum>;
  years_range?: InputMaybe<EventCategoryItemYearsRangeInput>;
};

export type EventCategoryItemYearsRangeInput = {
  end?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

/** Определяет тип лимита заявок в категориях соревнования */
export enum EventCategoryLimitAthletesTypeEnum {
  /** по количеству заявок */
  Application = 'application',
  /** по количеству оплат */
  Payment = 'payment'
}

/** EventCategoryResults type definition */
export type EventCategoryResults = {
  __typename?: 'EventCategoryResults';
  category_title?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  limit_applications?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<SportsmanApplicationResults>>>;
  short_title?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['String']>;
};

export enum EventCategoryTypeNumberParticipantsEnum {
  Single = 'single',
  Team = 'team'
}

/** EventCompetitor type definition */
export type EventCompetitor = NodeInterface & {
  __typename?: 'EventCompetitor';
  app_id?: Maybe<Scalars['Int']>;
  athletes?: Maybe<Array<Maybe<EventCompetitorAthlete>>>;
  category_id?: Maybe<Scalars['Int']>;
  competition_id?: Maybe<Scalars['Int']>;
  competitor_id: Scalars['String'];
  competitor_name?: Maybe<Scalars['String']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  final_total?: Maybe<Scalars['Float']>;
  /** результат первого места в категории если он есть */
  first_rank_final_total?: Maybe<Scalars['Float']>;
  group_name?: Maybe<Scalars['String']>;
  has_video?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  is_reserve?: Maybe<Scalars['Boolean']>;
  is_vk?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterface>>>;
  table: Scalars['String'];
  team_name?: Maybe<Scalars['String']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  type_score_null?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

/** EventCompetitor2 - описание участника соревнования */
export type EventCompetitor2 = {
  __typename?: 'EventCompetitor2';
  app_id?: Maybe<Scalars['Int']>;
  category_id: Scalars['ID'];
  competition_id: Scalars['ID'];
  competitor_id: Scalars['String'];
  competitor_name?: Maybe<Scalars['String']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  group_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_reserve?: Maybe<Scalars['Boolean']>;
  is_vk?: Maybe<Scalars['Boolean']>;
  table: Scalars['String'];
  team_name?: Maybe<Scalars['String']>;
};

/** EventCompetitorAthlete type definition */
export type EventCompetitorAthlete = {
  __typename?: 'EventCompetitorAthlete';
  athlete_id?: Maybe<Scalars['Int']>;
  coach_id?: Maybe<Scalars['Int']>;
  coach_person_id?: Maybe<Scalars['Int']>;
  coaches?: Maybe<Scalars['String']>;
  dt_birthday?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<EventCompetitorAthleteGenderEnum>;
  id: Scalars['Int'];
  last_name?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  person_id?: Maybe<Scalars['Int']>;
  rank?: Maybe<Rank>;
  school_id?: Maybe<Scalars['Int']>;
  show_as?: Maybe<Scalars['String']>;
  sports_school?: Maybe<Scalars['String']>;
  start_number?: Maybe<Scalars['String']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorAthleteConteinerInterfaceInputCy = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export type EventCompetitorAthleteConteinerInterfaceInputFs = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export type EventCompetitorAthleteConteinerInterfaceInputRg = {
  competitor_athlete: EventCompetitorAthleteInterfaceInput;
};

export enum EventCompetitorAthleteGenderEnum {
  Female = 'female',
  Male = 'male',
  Unknown = 'unknown'
}

export type EventCompetitorAthleteInput = {
  athlete_id?: InputMaybe<Scalars['Int']>;
  competitor_id: Scalars['String'];
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<EventCompetitorAthleteGenderEnum>;
  last_name?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
  person_id?: InputMaybe<Scalars['Int']>;
  rank_id?: InputMaybe<Scalars['Int']>;
};

export type EventCompetitorAthleteInterface = {
  __typename?: 'EventCompetitorAthleteInterface';
  dirty_name?: Maybe<Scalars['String']>;
  final_total?: Maybe<Scalars['Float']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  show_as?: Maybe<Scalars['String']>;
  sportsman?: Maybe<Sportsman>;
  start_number?: Maybe<Scalars['String']>;
  type_score?: Maybe<Scalars['String']>;
};

export type EventCompetitorAthleteInterfaceInput = {
  dirty_name?: InputMaybe<Scalars['String']>;
  final_total?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  show_as?: InputMaybe<Scalars['String']>;
  sportsman?: InputMaybe<IdInput>;
  start_number?: InputMaybe<Scalars['String']>;
  type_score?: InputMaybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorDeleteInputCy = {
  category_id?: InputMaybe<Scalars['ID']>;
  competition_id?: InputMaybe<Scalars['ID']>;
  competitor_id?: InputMaybe<Scalars['ID']>;
};

export type EventCompetitorDeleteInputFs = {
  category_id?: InputMaybe<Scalars['ID']>;
  competition_id?: InputMaybe<Scalars['ID']>;
  competitor_id?: InputMaybe<Scalars['ID']>;
};

export type EventCompetitorDeleteInputRg = {
  category_id?: InputMaybe<Scalars['ID']>;
  competition_id?: InputMaybe<Scalars['ID']>;
  competitor_id?: InputMaybe<Scalars['ID']>;
};

/** EventCompetitorGroupPhoto type definition */
export type EventCompetitorGroupPhoto = {
  __typename?: 'EventCompetitorGroupPhoto';
  apparatus?: Maybe<Scalars['String']>;
  apparatus_title?: Maybe<Scalars['String']>;
  category_title?: Maybe<Scalars['String']>;
  competitor_name?: Maybe<Scalars['String']>;
  competitor_number_id?: Maybe<Scalars['Int']>;
  day_action?: Maybe<Scalars['DateType']>;
  group_hash?: Maybe<Scalars['String']>;
  photo_count?: Maybe<Scalars['Int']>;
};

/** EventCompetitorGroupPhotoConnection type definition */
export type EventCompetitorGroupPhotoConnection = {
  __typename?: 'EventCompetitorGroupPhotoConnection';
  edges?: Maybe<Array<Maybe<EventCompetitorNameGroupPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EventCompetitorInput = {
  app_id?: InputMaybe<Scalars['Int']>;
  athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteInput>>>;
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  competitor_name: Scalars['String'];
  competitor_type: EventCompetitorTypeEnum;
  hide_video?: InputMaybe<Scalars['Boolean']>;
  is_reserve: Scalars['Boolean'];
  is_vk: Scalars['Boolean'];
  team_name?: InputMaybe<Scalars['String']>;
};

/** EventCompetitorNameGroupPhoto type definition */
export type EventCompetitorNameGroupPhoto = {
  __typename?: 'EventCompetitorNameGroupPhoto';
  competitor_name?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<EventCompetitorGroupPhoto>>>;
  photo_count?: Maybe<Scalars['Int']>;
};

/** EventCompetitorPhoto type definition */
export type EventCompetitorPhoto = NodeInterface & {
  __typename?: 'EventCompetitorPhoto';
  apparatus?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  competition_id?: Maybe<Scalars['Int']>;
  competitor_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  photographer_id?: Maybe<Scalars['Int']>;
  photographer_name?: Maybe<Scalars['String']>;
  preview2_link?: Maybe<Scalars['String']>;
  preview_link?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  small_link?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  time_shoot?: Maybe<Scalars['DateTimeType']>;
  width?: Maybe<Scalars['Int']>;
};

/** EventCompetitorPhotoConnection type definition */
export type EventCompetitorPhotoConnection = {
  __typename?: 'EventCompetitorPhotoConnection';
  edges?: Maybe<Array<Maybe<EventCompetitorPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EventCompetitorPhotoFilter = {
  competitor_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  search_string?: InputMaybe<Scalars['String']>;
};

export type EventCompetitorPhotoInput = {
  apparatus?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
  competition_id?: InputMaybe<Scalars['Int']>;
  competitor_id?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  link: Scalars['String'];
  photographer_id: Scalars['Int'];
  preview2_link: Scalars['String'];
  preview_link: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  small_link: Scalars['String'];
  time_shoot: Scalars['DateTimeType'];
  width?: InputMaybe<Scalars['Int']>;
};

export type EventCompetitorPhotoOrderInput = {
  after_redirect: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** EventCompetitorPhotoPaymentURL type definition */
export type EventCompetitorPhotoPaymentUrl = {
  __typename?: 'EventCompetitorPhotoPaymentURL';
  amount?: Maybe<Scalars['Float']>;
  amount_with_commission?: Maybe<Scalars['Float']>;
  commission?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_url?: Maybe<Scalars['String']>;
};

/** EventCompetitorQueueStatus type definition */
export type EventCompetitorQueueStatus = NodeInterface & {
  __typename?: 'EventCompetitorQueueStatus';
  dt_create?: Maybe<Scalars['DateTimeType']>;
  dt_update?: Maybe<Scalars['DateTimeType']>;
  errors?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mutation: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

export type EventCompetitorScoreApparatusConteinerInterfaceInputRg = {
  category_char_id: Scalars['String'];
  char_id: Scalars['String'];
  turn_num: Scalars['Int'];
};

export type EventCompetitorScoreApparatusInterfaceRg = {
  __typename?: 'EventCompetitorScoreApparatusInterfaceRG';
  char_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  turn_num?: Maybe<Scalars['Int']>;
};

/** EventCompetitorScoreCY type definition */
export type EventCompetitorScoreCy = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreCY';
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on?: Maybe<Scalars['DateTimeType']>;
  dt_out?: Maybe<Scalars['DateTimeType']>;
  final_total?: Maybe<Scalars['Float']>;
  is_announced?: Maybe<Scalars['Boolean']>;
  is_dnf?: Maybe<Scalars['Boolean']>;
  is_dns?: Maybe<Scalars['Boolean']>;
  is_dsq?: Maybe<Scalars['Boolean']>;
  is_signed?: Maybe<Scalars['Boolean']>;
  program: Scalars['String'];
  rank?: Maybe<Scalars['Int']>;
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']>;
  video_chunk_start?: Maybe<Scalars['Int']>;
  video_path?: Maybe<Scalars['String']>;
};

/** EventCompetitorScoreCardRG type definition */
export type EventCompetitorScoreCardRg = {
  __typename?: 'EventCompetitorScoreCardRG';
  category_title?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']>;
  competition_name: Scalars['String'];
  competition_title?: Maybe<Scalars['String']>;
  competitor_name?: Maybe<Scalars['String']>;
  competitor_type?: Maybe<EventCompetitorTypeEnum>;
  description_place?: Maybe<Scalars['String']>;
  dt_end?: Maybe<Scalars['DateType']>;
  dt_start?: Maybe<Scalars['DateType']>;
  group_name?: Maybe<Scalars['String']>;
  scores?: Maybe<EventCompetitorScoreRg>;
};

export type EventCompetitorScoreDatesInput = {
  apparatus: Scalars['String'];
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']>;
};

/** EventCompetitorScoreFS type definition */
export type EventCompetitorScoreFs = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreFS';
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on_ice?: Maybe<Scalars['DateTimeType']>;
  dt_out_ice?: Maybe<Scalars['DateTimeType']>;
  final_total?: Maybe<Scalars['Float']>;
  is_announced?: Maybe<Scalars['Boolean']>;
  is_dnf?: Maybe<Scalars['Boolean']>;
  is_dns?: Maybe<Scalars['Boolean']>;
  is_dsq?: Maybe<Scalars['Boolean']>;
  is_signed?: Maybe<Scalars['Boolean']>;
  program: Scalars['String'];
  rank?: Maybe<Scalars['Int']>;
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']>;
  video_chunk_start?: Maybe<Scalars['Int']>;
  video_path?: Maybe<Scalars['String']>;
};

export type EventCompetitorScoreInput = {
  apparatus: Scalars['String'];
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']>;
  final_d?: InputMaybe<Scalars['Float']>;
  final_d1d2?: InputMaybe<Scalars['Float']>;
  final_d2?: InputMaybe<Scalars['Float']>;
  final_d3d4?: InputMaybe<Scalars['Float']>;
  final_d4?: InputMaybe<Scalars['Float']>;
  final_d1234?: InputMaybe<Scalars['Float']>;
  final_ded?: InputMaybe<Scalars['Float']>;
  final_e?: InputMaybe<Scalars['Float']>;
  final_e1e2?: InputMaybe<Scalars['Float']>;
  final_e3?: InputMaybe<Scalars['Float']>;
  final_e4?: InputMaybe<Scalars['Float']>;
  final_e5?: InputMaybe<Scalars['Float']>;
  final_e6?: InputMaybe<Scalars['Float']>;
  final_e3456?: InputMaybe<Scalars['Float']>;
  final_e123456?: InputMaybe<Scalars['Float']>;
  final_l1?: InputMaybe<Scalars['Float']>;
  final_l2?: InputMaybe<Scalars['Float']>;
  final_o?: InputMaybe<Scalars['Float']>;
  final_t?: InputMaybe<Scalars['Float']>;
  final_total?: InputMaybe<Scalars['Float']>;
  final_total_announced?: InputMaybe<Scalars['Float']>;
  is_announced?: InputMaybe<Scalars['Boolean']>;
  is_dnf?: InputMaybe<Scalars['Boolean']>;
  is_dns?: InputMaybe<Scalars['Boolean']>;
  is_dsq?: InputMaybe<Scalars['Boolean']>;
  is_signed?: InputMaybe<Scalars['Boolean']>;
  rank?: InputMaybe<Scalars['Int']>;
  rank_announced?: InputMaybe<Scalars['Int']>;
  scores?: InputMaybe<Scalars['JSON']>;
};

export type EventCompetitorScoreInputV2 = {
  apparatus: Scalars['String'];
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']>;
  final_a?: InputMaybe<Scalars['Float']>;
  final_a1?: InputMaybe<Scalars['Float']>;
  final_a2?: InputMaybe<Scalars['Float']>;
  final_a3?: InputMaybe<Scalars['Float']>;
  final_a4?: InputMaybe<Scalars['Float']>;
  final_a1234?: InputMaybe<Scalars['Float']>;
  final_d?: InputMaybe<Scalars['Float']>;
  final_d1d2?: InputMaybe<Scalars['Float']>;
  final_d2?: InputMaybe<Scalars['Float']>;
  final_d3d4?: InputMaybe<Scalars['Float']>;
  final_d4?: InputMaybe<Scalars['Float']>;
  final_d1234?: InputMaybe<Scalars['Float']>;
  final_ded?: InputMaybe<Scalars['Float']>;
  final_e?: InputMaybe<Scalars['Float']>;
  final_e1?: InputMaybe<Scalars['Float']>;
  final_e2?: InputMaybe<Scalars['Float']>;
  final_e3?: InputMaybe<Scalars['Float']>;
  final_e4?: InputMaybe<Scalars['Float']>;
  final_e1234?: InputMaybe<Scalars['Float']>;
  final_l1?: InputMaybe<Scalars['Float']>;
  final_l2?: InputMaybe<Scalars['Float']>;
  final_o?: InputMaybe<Scalars['Float']>;
  final_t?: InputMaybe<Scalars['Float']>;
  final_total?: InputMaybe<Scalars['Float']>;
  final_total_announced?: InputMaybe<Scalars['Float']>;
  is_announced?: InputMaybe<Scalars['Boolean']>;
  is_dnf?: InputMaybe<Scalars['Boolean']>;
  is_dns?: InputMaybe<Scalars['Boolean']>;
  is_dsq?: InputMaybe<Scalars['Boolean']>;
  is_signed?: InputMaybe<Scalars['Boolean']>;
  rank?: InputMaybe<Scalars['Int']>;
  rank_announced?: InputMaybe<Scalars['Int']>;
  scores?: InputMaybe<Scalars['JSON']>;
};

/** EventCompetitorScoreInterface interface definition */
export type EventCompetitorScoreInterface = {
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  final_total?: Maybe<Scalars['Float']>;
  is_announced?: Maybe<Scalars['Boolean']>;
  is_dnf?: Maybe<Scalars['Boolean']>;
  is_dns?: Maybe<Scalars['Boolean']>;
  is_dsq?: Maybe<Scalars['Boolean']>;
  is_signed?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Int']>;
  video_chunk_end?: Maybe<Scalars['Int']>;
  video_chunk_start?: Maybe<Scalars['Int']>;
  video_path?: Maybe<Scalars['String']>;
};

export type EventCompetitorScoreInterfaceCy = {
  __typename?: 'EventCompetitorScoreInterfaceCY';
  date?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
  program?: Maybe<EventCompetitorScoreProgramInterfaceCy>;
  rank?: Maybe<Scalars['Int']>;
  time_end?: Maybe<Scalars['TimeType']>;
  time_start?: Maybe<Scalars['TimeType']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export type EventCompetitorScoreInterfaceFs = {
  __typename?: 'EventCompetitorScoreInterfaceFS';
  date?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
  program?: Maybe<EventCompetitorScoreProgramInterfaceFs>;
  rank?: Maybe<Scalars['Int']>;
  time_end?: Maybe<Scalars['TimeType']>;
  time_start?: Maybe<Scalars['TimeType']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export type EventCompetitorScoreInterfaceInputCy = {
  date?: InputMaybe<Scalars['DateType']>;
  final_total?: InputMaybe<Scalars['Float']>;
  program: EventCompetitorScoreProgramConteinerInterfaceInputCy;
  rank?: InputMaybe<Scalars['Int']>;
  time_end?: InputMaybe<Scalars['TimeType']>;
  time_start?: InputMaybe<Scalars['TimeType']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfaceInputFs = {
  date?: InputMaybe<Scalars['DateType']>;
  final_total?: InputMaybe<Scalars['Float']>;
  program: EventCompetitorScoreProgramConteinerInterfaceInputFs;
  rank?: InputMaybe<Scalars['Int']>;
  time_end?: InputMaybe<Scalars['TimeType']>;
  time_start?: InputMaybe<Scalars['TimeType']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfaceInputRg = {
  apparatus: EventCompetitorScoreApparatusConteinerInterfaceInputRg;
  date?: InputMaybe<Scalars['DateType']>;
  final_total?: InputMaybe<Scalars['Float']>;
  rank?: InputMaybe<Scalars['Int']>;
  time_end?: InputMaybe<Scalars['TimeType']>;
  time_start?: InputMaybe<Scalars['TimeType']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoreInterfacePersonInput = {
  person: IdInput;
};

export type EventCompetitorScoreInterfaceRg = {
  __typename?: 'EventCompetitorScoreInterfaceRG';
  apparatus?: Maybe<EventCompetitorScoreApparatusInterfaceRg>;
  date?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  time_end?: Maybe<Scalars['TimeType']>;
  time_start?: Maybe<Scalars['TimeType']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
  video?: Maybe<EventCompetitorScoreVideo>;
};

export enum EventCompetitorScoreInterfaceTypeScoreEnum {
  Dnf = 'DNF',
  Dns = 'DNS',
  Dsq = 'DSQ',
  F = 'F'
}

export type EventCompetitorScoreProgramConteinerInterfaceInputCy = {
  category_char_id: Scalars['String'];
  char_id: Scalars['String'];
};

export type EventCompetitorScoreProgramConteinerInterfaceInputFs = {
  category_char_id: Scalars['String'];
  char_id: Scalars['String'];
};

export type EventCompetitorScoreProgramInterfaceCy = {
  __typename?: 'EventCompetitorScoreProgramInterfaceCY';
  char_id?: Maybe<Scalars['String']>;
  short_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EventCompetitorScoreProgramInterfaceFs = {
  __typename?: 'EventCompetitorScoreProgramInterfaceFS';
  char_id?: Maybe<Scalars['String']>;
  short_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** EventCompetitorScoreRG type definition */
export type EventCompetitorScoreRg = EventCompetitorScoreInterface & {
  __typename?: 'EventCompetitorScoreRG';
  apparatus: Scalars['String'];
  category_id: Scalars['Int'];
  competition_id: Scalars['Int'];
  competitor_id: Scalars['String'];
  dt_on_carpet?: Maybe<Scalars['DateTimeType']>;
  dt_out_carpet?: Maybe<Scalars['DateTimeType']>;
  final_a?: Maybe<Scalars['Float']>;
  final_a1?: Maybe<Scalars['Float']>;
  final_a2?: Maybe<Scalars['Float']>;
  final_a3?: Maybe<Scalars['Float']>;
  final_a4?: Maybe<Scalars['Float']>;
  final_a1234?: Maybe<Scalars['Float']>;
  final_d?: Maybe<Scalars['Float']>;
  final_d1d2?: Maybe<Scalars['Float']>;
  final_d2?: Maybe<Scalars['Float']>;
  final_d3d4?: Maybe<Scalars['Float']>;
  final_d4?: Maybe<Scalars['Float']>;
  final_d1234?: Maybe<Scalars['Float']>;
  final_ded?: Maybe<Scalars['Float']>;
  final_e?: Maybe<Scalars['Float']>;
  final_e1?: Maybe<Scalars['Float']>;
  final_e1e2?: Maybe<Scalars['Float']>;
  final_e2?: Maybe<Scalars['Float']>;
  final_e3?: Maybe<Scalars['Float']>;
  final_e4?: Maybe<Scalars['Float']>;
  final_e5?: Maybe<Scalars['Float']>;
  final_e6?: Maybe<Scalars['Float']>;
  final_e1234?: Maybe<Scalars['Float']>;
  final_e3456?: Maybe<Scalars['Float']>;
  final_e123456?: Maybe<Scalars['Float']>;
  final_l1?: Maybe<Scalars['Float']>;
  final_l2?: Maybe<Scalars['Float']>;
  final_o?: Maybe<Scalars['Float']>;
  final_t?: Maybe<Scalars['Float']>;
  final_total?: Maybe<Scalars['Float']>;
  is_announced?: Maybe<Scalars['Boolean']>;
  is_dnf?: Maybe<Scalars['Boolean']>;
  is_dns?: Maybe<Scalars['Boolean']>;
  is_dsq?: Maybe<Scalars['Boolean']>;
  is_signed?: Maybe<Scalars['Boolean']>;
  rank?: Maybe<Scalars['Int']>;
  turn_num: Scalars['Int'];
  video?: Maybe<EventCompetitorScoreVideo>;
  video_chunk_end?: Maybe<Scalars['Int']>;
  video_chunk_start?: Maybe<Scalars['Int']>;
  video_path?: Maybe<Scalars['String']>;
};

/** EventCompetitorScoreVideo type definition */
export type EventCompetitorScoreVideo = {
  __typename?: 'EventCompetitorScoreVideo';
  dt_on_carpet: Scalars['DateTimeType'];
  dt_out_carpet: Scalars['DateTimeType'];
  duration_on_carpet?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  link: Scalars['String'];
  time_start: Scalars['DateTimeType'];
  video_score_time_start?: Maybe<Scalars['Int']>;
};

export type EventCompetitorScoreVideoInput = {
  duration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  time_start?: InputMaybe<Scalars['DateTimeType']>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceCy = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceCY';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceFs = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceFS';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresCompetitorAthleteConteinerInterfaceRg = {
  __typename?: 'EventCompetitorScoresCompetitorAthleteConteinerInterfaceRG';
  competitor_athlete?: Maybe<EventCompetitorAthleteInterface>;
};

export type EventCompetitorScoresEventIdInterfaceCy = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceCY';
  id?: Maybe<Scalars['Int']>;
};

export type EventCompetitorScoresEventIdInterfaceFs = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceFS';
  id?: Maybe<Scalars['Int']>;
};

export type EventCompetitorScoresEventIdInterfaceRg = {
  __typename?: 'EventCompetitorScoresEventIdInterfaceRG';
  id?: Maybe<Scalars['Int']>;
};

export type EventCompetitorScoresInterfaceCy = {
  __typename?: 'EventCompetitorScoresInterfaceCY';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceCy>>>;
  competitor_id?: Maybe<Scalars['String']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceCy>;
  final_total?: Maybe<Scalars['Float']>;
  group_name?: Maybe<Scalars['String']>;
  hide_video?: Maybe<Scalars['Boolean']>;
  is_vk?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceCy>>>;
  team_name?: Maybe<Scalars['String']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceFs = {
  __typename?: 'EventCompetitorScoresInterfaceFS';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceFs>>>;
  competitor_id?: Maybe<Scalars['String']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceFs>;
  final_total?: Maybe<Scalars['Float']>;
  group_name?: Maybe<Scalars['String']>;
  hide_video?: Maybe<Scalars['Boolean']>;
  is_vk?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceFs>>>;
  team_name?: Maybe<Scalars['String']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceInputCy = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputCy>>>;
  competitor_id?: InputMaybe<Scalars['String']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']>;
  group_name?: InputMaybe<Scalars['String']>;
  hide_video: Scalars['Boolean'];
  is_vk: Scalars['Boolean'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputCy>>>;
  team_name?: InputMaybe<Scalars['String']>;
  type_score?: InputMaybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export type EventCompetitorScoresInterfaceInputFs = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputFs>>>;
  competitor_id?: InputMaybe<Scalars['String']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']>;
  group_name?: InputMaybe<Scalars['String']>;
  hide_video: Scalars['Boolean'];
  is_vk: Scalars['Boolean'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputFs>>>;
  team_name?: InputMaybe<Scalars['String']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoresInterfaceInputRg = {
  category: IdInput;
  coach?: InputMaybe<EventCompetitorScoreInterfacePersonInput>;
  competitor_athletes?: InputMaybe<Array<InputMaybe<EventCompetitorAthleteConteinerInterfaceInputRg>>>;
  competitor_id?: InputMaybe<Scalars['String']>;
  event: IdInput;
  final_total?: InputMaybe<Scalars['Float']>;
  group_name?: InputMaybe<Scalars['String']>;
  hide_video: Scalars['Boolean'];
  is_vk: Scalars['Boolean'];
  organization?: InputMaybe<IdInput>;
  rank?: InputMaybe<Scalars['Int']>;
  scores?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInterfaceInputRg>>>;
  team_name?: InputMaybe<Scalars['String']>;
  type_score: EventCompetitorScoreInterfaceTypeScoreEnum;
};

export type EventCompetitorScoresInterfaceRg = {
  __typename?: 'EventCompetitorScoresInterfaceRG';
  category?: Maybe<EventCategory>;
  coach?: Maybe<Coach>;
  competitor_athletes?: Maybe<Array<Maybe<EventCompetitorScoresCompetitorAthleteConteinerInterfaceRg>>>;
  competitor_id?: Maybe<Scalars['String']>;
  event?: Maybe<EventCompetitorScoresEventIdInterfaceRg>;
  final_total?: Maybe<Scalars['Float']>;
  group_name?: Maybe<Scalars['String']>;
  hide_video?: Maybe<Scalars['Boolean']>;
  is_vk?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<OrganizationForLists>;
  rank?: Maybe<Scalars['Int']>;
  scores?: Maybe<Array<Maybe<EventCompetitorScoreInterfaceRg>>>;
  team_name?: Maybe<Scalars['String']>;
  type_score?: Maybe<EventCompetitorScoreInterfaceTypeScoreEnum>;
};

export enum EventCompetitorTypeEnum {
  Group = 'group',
  Personal = 'personal',
  Single = 'single',
  Team = 'team'
}

export type EventConfidentialityInput = {
  app_from_schools: Scalars['Boolean'];
  id: Scalars['Int'];
  postwall_write_rights: EventPostwallWriteRightsEnum;
  shared_link: Scalars['Boolean'];
  show_ath_list: EventShowAthListEnum;
  use_any_user_payment: Scalars['Boolean'];
};

/** EventConnection type definition */
export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<Maybe<Event>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Статусы/шаги создания соревнования */
export enum EventCreationStatesEnum {
  /** Имя последнего пройденного шага в создании соревнования */
  AcceptApplications = 'accept_applications',
  /** Имя последнего пройденного шага в создании соревнования */
  Booking = 'booking',
  /** Имя последнего пройденного шага в создании соревнования */
  Categories = 'categories',
  /** Имя последнего пройденного шага в создании соревнования */
  Confidentiallity = 'confidentiallity',
  /** Имя последнего пройденного шага в создании соревнования */
  Done = 'done',
  /** Имя последнего пройденного шага в создании соревнования */
  Info = 'info',
  /** Имя последнего пройденного шага в создании соревнования */
  New = 'new',
  /** Имя последнего пройденного шага в создании соревнования */
  Organizer = 'organizer',
  /** Имя последнего пройденного шага в создании соревнования */
  Translations = 'translations'
}

/** EventDiscipline type definition */
export type EventDiscipline = {
  __typename?: 'EventDiscipline';
  applicant_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ranks?: Maybe<Array<Maybe<Rank>>>;
  short_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type EventInput = {
  calendar_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  description_place?: InputMaybe<Scalars['String']>;
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  event_type: EventTypeEnum;
  id?: InputMaybe<Scalars['Int']>;
  parent_calendar_id?: InputMaybe<Scalars['Int']>;
  place: EventPlaceMapData;
  preliminary: Scalars['Boolean'];
  short_title?: InputMaybe<Scalars['String']>;
  sport_id: Scalars['Int'];
  title: Scalars['String'];
  who_are_competing?: InputMaybe<EventInputWhoAreCompeting>;
};

export type EventInputWhoAreCompeting = {
  scope1?: InputMaybe<EventWhoAreCompetingEnumType>;
  scope2?: InputMaybe<EventWhoAreCompetingEnumType>;
};

/** EventMapInfo type definition */
export type EventMapInfo = {
  __typename?: 'EventMapInfo';
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['Float']>;
  latitude_map?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  longitude_map?: Maybe<Scalars['Float']>;
  map_type?: Maybe<Scalars['Int']>;
  show_map?: Maybe<Scalars['Boolean']>;
  zoom?: Maybe<Scalars['Int']>;
};

/** EventOrganizationOrganizer type definition */
export type EventOrganizationOrganizer = NodeInterface & {
  __typename?: 'EventOrganizationOrganizer';
  calendar_id?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type EventOrganizerContactPersonInput = {
  contact_person: AuserIdInput;
  email: Scalars['String'];
  is_published: Scalars['Boolean'];
  notify_of_new_apps: Scalars['Boolean'];
  notify_of_questions: Scalars['Boolean'];
  phone?: InputMaybe<Scalars['String']>;
};

export type EventOrganizerInput = {
  contact_persons?: InputMaybe<Array<InputMaybe<EventOrganizerContactPersonInput>>>;
  id: Scalars['Int'];
  judges?: InputMaybe<Array<InputMaybe<ChiefPersonInput>>>;
  main_judge?: InputMaybe<ChiefPersonInput>;
  main_secretary?: InputMaybe<ChiefPersonInput>;
  organization_organizers?: InputMaybe<Array<InputMaybe<EventOrganizerOrganizationInput>>>;
};

export type EventOrganizerOrganizationInput = {
  id?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Заголовок кнопки оплаты */
export enum EventPaymentButtonTitleEnum {
  /** Заявка подается на другом сайте */
  Donate = 'donate',
  /** Заявка подается через сайт Спорт вокруг. */
  Pay = 'pay'
}

export type EventPersonEventsFilter = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dt_end?: InputMaybe<Scalars['DateType']>;
  dt_start?: InputMaybe<Scalars['DateType']>;
  name?: InputMaybe<Scalars['String']>;
  rank_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  region_id?: InputMaybe<Scalars['Int']>;
};

/** EventPersonResultsByCategory type definition */
export type EventPersonResultsByCategory = {
  __typename?: 'EventPersonResultsByCategory';
  category: EventCategory;
  competitor: EventCompetitor;
};

/** EventPersonResultsByCategoryConnection type definition */
export type EventPersonResultsByCategoryConnection = {
  __typename?: 'EventPersonResultsByCategoryConnection';
  athlete_id?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<Maybe<EventPersonResultsByCategory>>>;
  person_id?: Maybe<Scalars['Int']>;
};

export type EventPlaceMapData = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  latitude_map?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  longitude_map?: InputMaybe<Scalars['Float']>;
  map_type?: InputMaybe<Scalars['Int']>;
  region?: InputMaybe<Scalars['String']>;
  show_map?: InputMaybe<Scalars['Boolean']>;
  zoom?: InputMaybe<Scalars['Int']>;
};

export enum EventPostwallWriteRightsEnum {
  Anyone = 'anyone',
  Disabled = 'disabled',
  OnlySchoolResponsible = 'only_school_responsible'
}

/** Типы кнопки подачи заявки */
export enum EventRegButtonTypeEnum {
  /** Подача заявки */
  Application = 'application',
  /** Покупка билета */
  Ticket = 'ticket'
}

/** Варианты подачи заявки на мероприятие */
export enum EventRegTypeEnum {
  /** Заявка подается по электронной почте */
  Email = 'email',
  /** Заявка подается через сайт Спорт вокруг. */
  Inner = 'inner',
  /** Заявка не принимаются */
  None = 'none',
  /** Заявка подается на другом сайте */
  Outer = 'outer'
}

/** EventResponsibleUser type definition */
export type EventResponsibleUser = NodeInterface & {
  __typename?: 'EventResponsibleUser';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_owner?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notify_of_new_apps?: Maybe<Scalars['Boolean']>;
  notify_of_questions?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** EventResponsibleUserList type definition */
export type EventResponsibleUserList = {
  __typename?: 'EventResponsibleUserList';
  is_responsible?: Maybe<Scalars['Boolean']>;
  list?: Maybe<Array<Maybe<EventResponsibleUser>>>;
  organizer?: Maybe<Scalars['Boolean']>;
};

/** EventResultApparatusRG type definition */
export type EventResultApparatusRg = {
  __typename?: 'EventResultApparatusRG';
  apparatus?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** EventResultApparatusScoresDataRG type definition */
export type EventResultApparatusScoresDataRg = {
  __typename?: 'EventResultApparatusScoresDataRG';
  competition_title?: Maybe<Scalars['String']>;
  dt_on_carpet?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
};

/** EventResultApparatusScoresRG type definition */
export type EventResultApparatusScoresRg = {
  __typename?: 'EventResultApparatusScoresRG';
  apparatus?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<EventResultApparatusScoresDataRg>>>;
};

/** EventResultByCategory type definition */
export type EventResultByCategory = {
  __typename?: 'EventResultByCategory';
  applications?: Maybe<Array<Maybe<EventCompetitor>>>;
  category: EventCategory;
};

/** EventResultByCategoryConnection type definition */
export type EventResultByCategoryConnection = {
  __typename?: 'EventResultByCategoryConnection';
  edges?: Maybe<Array<Maybe<EventResultByCategory>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** EventResultProgramFS type definition */
export type EventResultProgramFs = {
  __typename?: 'EventResultProgramFS';
  color?: Maybe<Scalars['String']>;
  program?: Maybe<Scalars['String']>;
  short_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** EventResultProgramScoresDataFS type definition */
export type EventResultProgramScoresDataFs = {
  __typename?: 'EventResultProgramScoresDataFS';
  competition_title?: Maybe<Scalars['String']>;
  dt_on_ice?: Maybe<Scalars['DateType']>;
  final_total?: Maybe<Scalars['Float']>;
};

/** EventResultProgramScoresFS type definition */
export type EventResultProgramScoresFs = {
  __typename?: 'EventResultProgramScoresFS';
  data?: Maybe<Array<Maybe<EventResultProgramScoresDataFs>>>;
  program?: Maybe<Scalars['String']>;
};

/** Редакция правил по художественной гимнастике */
export enum EventRgJudgingRulesEditionEnum {
  /** правила 2017-2020 */
  Rules_2017_2020 = 'rules_2017_2020',
  /** правила 2022-2024 */
  Rules_2022_2024 = 'rules_2022_2024'
}

/** EventSchedule type definition */
export type EventSchedule = NodeInterface & {
  __typename?: 'EventSchedule';
  dt_end?: Maybe<Scalars['DateTimeType']>;
  dt_start?: Maybe<Scalars['DateTimeType']>;
  id: Scalars['ID'];
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type EventScheduleInputType = {
  id: Scalars['ID'];
  schedule?: InputMaybe<Array<InputMaybe<EventScheduleItemInputType>>>;
};

export type EventScheduleItemInputType = {
  dt_end: Scalars['DateTimeType'];
  dt_start: Scalars['DateTimeType'];
  id?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export enum EventShowAthListEnum {
  HideAll = 'hide_all',
  JustCount = 'just_count',
  ShowAll = 'show_all'
}

export enum EventShowResultsEnum {
  DontShow = 'dont_show',
  FromProtocol = 'from_protocol',
  FromTablo = 'from_tablo'
}

export enum EventStatusEnum {
  Canceled = 'canceled',
  Deleted = 'deleted',
  New = 'new',
  Notpublished = 'notpublished',
  Published = 'published',
  Publishing = 'publishing'
}

/** EventToParentCalendarRequest type definition */
export type EventToParentCalendarRequest = {
  __typename?: 'EventToParentCalendarRequest';
  calendar_id?: Maybe<Scalars['ID']>;
  competition_id?: Maybe<Scalars['ID']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  dt_modify?: Maybe<Scalars['DateTimeType']>;
  parent_calendar_id?: Maybe<Scalars['ID']>;
  parent_calendar_legalentity?: Maybe<Legalentity>;
  parent_calendar_title?: Maybe<Scalars['String']>;
  parent_organization_title?: Maybe<Scalars['String']>;
  reject_reason?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type EventToParentCalendarRequestsFilter = {
  active?: InputMaybe<Scalars['Boolean']>;
  calendar_id?: InputMaybe<Scalars['ID']>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dt_end?: InputMaybe<Scalars['DateType']>;
  dt_start?: InputMaybe<Scalars['DateType']>;
  name?: InputMaybe<Scalars['String']>;
  request_status?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** EventTranslationDeletingProhibits type definition */
export type EventTranslationDeletingProhibits = {
  __typename?: 'EventTranslationDeletingProhibits';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** EventTranslationItem type definition */
export type EventTranslationItem = {
  __typename?: 'EventTranslationItem';
  deleting_prohibits?: Maybe<Array<Maybe<EventTranslationDeletingProhibits>>>;
  event_id?: Maybe<Scalars['String']>;
  facecast_id?: Maybe<Scalars['String']>;
  facecast_url?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  translation_date?: Maybe<Scalars['DateType']>;
};

export type EventTranslationItemInput = {
  facecast_id?: InputMaybe<Scalars['String']>;
  facecast_url?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  index_key?: InputMaybe<Scalars['Int']>;
  price: Scalars['Float'];
  translation_date: Scalars['DateType'];
};

export type EventTranslationsInput = {
  id: Scalars['Int'];
  org_can_manage_translation?: InputMaybe<Scalars['Boolean']>;
  translations?: InputMaybe<Array<InputMaybe<EventTranslationItemInput>>>;
  use_translations: Scalars['Boolean'];
};

export enum EventTypeEnum {
  Competition = 'competition',
  Mc = 'mc',
  Meet = 'meet',
  Other = 'other',
  Seminar = 'seminar',
  Testing = 'testing'
}

/** EventVideo type definition */
export type EventVideo = {
  __typename?: 'EventVideo';
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  link: Scalars['String'];
  preview_link: Scalars['String'];
  time_start: Scalars['DateTimeType'];
};

/** EventVideoGroup type definition */
export type EventVideoGroup = {
  __typename?: 'EventVideoGroup';
  event_city?: Maybe<Scalars['String']>;
  event_dt_begin?: Maybe<Scalars['DateType']>;
  event_dt_end?: Maybe<Scalars['DateType']>;
  event_id?: Maybe<Scalars['String']>;
  event_title?: Maybe<Scalars['String']>;
  video_count?: Maybe<Scalars['Int']>;
  videos?: Maybe<Array<Maybe<SportsmanEventVideo>>>;
};

/** EventVideoGroupsConnection type definition */
export type EventVideoGroupsConnection = {
  __typename?: 'EventVideoGroupsConnection';
  edges?: Maybe<Array<Maybe<EventVideoGroup>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** EventWhoAreCompeting type definition */
export type EventWhoAreCompeting = {
  __typename?: 'EventWhoAreCompeting';
  scope1?: Maybe<Scalars['String']>;
  scope2?: Maybe<Scalars['String']>;
};

export enum EventWhoAreCompetingEnumType {
  City = 'city',
  Country = 'country',
  District = 'district',
  Nothing = 'nothing',
  Region = 'region',
  School = 'school',
  Society = 'society'
}

export type EventsListFilter = {
  auser_id?: InputMaybe<Scalars['ID']>;
  calendar_id?: InputMaybe<Scalars['ID']>;
  city_id?: InputMaybe<Scalars['ID']>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  discipline_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  dt_end?: InputMaybe<Scalars['DateType']>;
  dt_start?: InputMaybe<Scalars['DateType']>;
  event_applicant_type?: InputMaybe<ApplicantTypeEnum>;
  event_type?: InputMaybe<EventTypeEnum>;
  name?: InputMaybe<Scalars['String']>;
  org_id?: InputMaybe<Scalars['ID']>;
  qualifying?: InputMaybe<Scalars['Boolean']>;
  rank_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  region_id?: InputMaybe<Scalars['ID']>;
  sport_id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<EventStatusEnum>;
  white_list?: InputMaybe<Scalars['Boolean']>;
};

/** FederationTeamSquad type definition */
export type FederationTeamSquad = {
  __typename?: 'FederationTeamSquad';
  id: Scalars['ID'];
  members?: Maybe<Array<Maybe<FederationTeamSquadMember>>>;
  organization_id: Scalars['ID'];
  squad_title: Scalars['String'];
  team_title: Scalars['String'];
  year_active_from: Scalars['Int'];
};

/** FederationTeamSquadInput type definition */
export type FederationTeamSquadInput = {
  id?: InputMaybe<Scalars['ID']>;
  organization_id: Scalars['ID'];
  squad_title: Scalars['String'];
  team_title: Scalars['String'];
  year_active_from: Scalars['Int'];
};

/** FederationTeamSquadMember type definition */
export type FederationTeamSquadMember = {
  __typename?: 'FederationTeamSquadMember';
  athlete?: Maybe<Sportsman>;
  disciplines?: Maybe<Array<Maybe<Discipline>>>;
  id: Scalars['ID'];
  rank?: Maybe<Rank>;
  status?: Maybe<Scalars['String']>;
  year_active_from: Scalars['Int'];
  year_active_to?: Maybe<Scalars['Int']>;
};

/** FederationTeamSquadMemberInput type definition */
export type FederationTeamSquadMemberInput = {
  athlete_id: Scalars['ID'];
  disciplines?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  team_squad_id: Scalars['ID'];
  year_active_from: Scalars['Int'];
  year_active_to?: InputMaybe<Scalars['Int']>;
};

/** FederationTeamSquads type definition */
export type FederationTeamSquads = {
  __typename?: 'FederationTeamSquads';
  member_filtered_total: Scalars['Int'];
  member_total: Scalars['Int'];
  squads?: Maybe<Array<Maybe<FederationTeamSquad>>>;
};

export type FileInfoInput = {
  document: Scalars['String'];
  entity: Scalars['String'];
  entity_id?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  uri?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  document?: InputMaybe<Scalars['String']>;
  entity?: InputMaybe<Scalars['String']>;
  entity_id?: InputMaybe<Scalars['ID']>;
  file: Scalars['Upload'];
  id?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

export type FileNonNullInput = {
  document: Scalars['String'];
  entity: Scalars['String'];
  entity_id?: InputMaybe<Scalars['ID']>;
  extra?: InputMaybe<Scalars['JSON']>;
  file: Scalars['Upload'];
  id?: InputMaybe<Scalars['Int']>;
  uri?: InputMaybe<Scalars['String']>;
};

/** FileStorage type definition */
export type FileStorage = {
  __typename?: 'FileStorage';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** FileType type definition */
export type FileType = {
  __typename?: 'FileType';
  count_pages?: Maybe<Scalars['Int']>;
  document: Scalars['String'];
  entity: Scalars['String'];
  entity_id: Scalars['Int'];
  entity_uuid?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  fname: Scalars['String'];
  id: Scalars['Int'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  position: Scalars['Int'];
  preview_uri?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export enum FormSchemeEnum {
  Athlete = 'athlete',
  Coach = 'coach',
  EventAcceptApplications = 'event_accept_applications',
  EventAccommodation = 'event_accommodation',
  EventConfidentiality = 'event_confidentiality',
  EventInfo = 'event_info',
  EventNew = 'event_new',
  EventOrganizer = 'event_organizer',
  EventTranslation = 'event_translation',
  Federation = 'federation',
  Organization = 'organization',
  OrganizationReportDocuments = 'organization_report_documents',
  Person = 'person'
}

/** FormSchemeField type definition */
export type FormSchemeField = {
  __typename?: 'FormSchemeField';
  add_button?: Maybe<FormSchemeaddButton>;
  disabled: Scalars['Boolean'];
  form: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notice?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<FormSchemeOption>>>;
  over_time_disabled: Scalars['Boolean'];
  params?: Maybe<Scalars['JSON']>;
  required: Scalars['Boolean'];
  scheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  show_to_admin: Scalars['Boolean'];
  show_to_moderator: Scalars['Boolean'];
  show_to_responsible: Scalars['Boolean'];
  tabs?: Maybe<Array<Maybe<FormSchemeTab>>>;
  type: Scalars['String'];
};

/** FormSchemeOption type definition */
export type FormSchemeOption = {
  __typename?: 'FormSchemeOption';
  id?: Maybe<Scalars['ID']>;
  show_to_admin: Scalars['Boolean'];
  show_to_moderator: Scalars['Boolean'];
  show_to_responsible: Scalars['Boolean'];
  title: Scalars['String'];
  value: Scalars['String'];
};

/** FormSchemeTab type definition */
export type FormSchemeTab = {
  __typename?: 'FormSchemeTab';
  key?: Maybe<Scalars['String']>;
  scheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  title?: Maybe<Scalars['String']>;
};

/** FormSchemeaddButton type definition */
export type FormSchemeaddButton = {
  __typename?: 'FormSchemeaddButton';
  title?: Maybe<Scalars['String']>;
};

/** Определяет типы категорий для танцевальных коллективов в фигурном катании */
export enum FsCollectiveCategoryEnum {
  /** Взрослые (Adult) */
  Adult = 'adult',
  /** Юниоры (Junior) */
  Junior = 'junior',
  /** Смешанная 15- (MIX 15-) */
  Mix_15Minus = 'mix_15_minus',
  /** Смешанная 15+ (MIX 15+) */
  Mix_15Plus = 'mix_15_plus',
  /** Начинающие (Novice) */
  Novice = 'novice',
  /** Дети младшая группа (Pre-Novice A) */
  PreNoviceA = 'pre_novice_a',
  /** Дети старшая группа (Pre-Novice B) */
  PreNoviceB = 'pre_novice_b',
  /** Старшие (Senior) */
  Senior = 'senior'
}

/** Варианты прав доступа к функциям комиссии. */
export enum FsCommissionAccessLevelEnum {
  /** Права доступа отсутствуют. */
  None = 'none',
  /** Права на просмотр. */
  Read = 'read',
  /** Права на просмотр и изменение. */
  Write = 'write'
}

/** Варианты контекста, в котором работает комиссия. */
export enum FsCommissionContextEnum {
  /** Комиссия в мероприятии. */
  Event = 'event',
  /** Комиссия в организации. */
  Org = 'org'
}

/** FsInspectionCommissionMember type definition */
export type FsInspectionCommissionMember = {
  __typename?: 'FsInspectionCommissionMember';
  email?: Maybe<Scalars['String']>;
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  table: Scalars['String'];
};

/** FsInspectionCommissionSeason type definition */
export type FsInspectionCommissionSeason = {
  __typename?: 'FsInspectionCommissionSeason';
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  id: Scalars['ID'];
  members?: Maybe<Array<Maybe<FsInspectionCommissionMember>>>;
  table: Scalars['String'];
};

/** FsInspectionCommissionSeasonInput type definition */
export type FsInspectionCommissionSeasonInput = {
  id?: InputMaybe<Scalars['ID']>;
  members?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  year_begin: Scalars['Int'];
  year_end: Scalars['Int'];
};

/** Geocoder type definition */
export type Geocoder = {
  __typename?: 'Geocoder';
  data?: Maybe<Scalars['JSON']>;
  from_cache?: Maybe<Scalars['Boolean']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type IdInput = {
  id: Scalars['ID'];
};

export enum IsuCalcTitlesEnum {
  DisplayName = 'display_name',
  ProtocolName = 'protocol_name',
  ShortTitle = 'short_title',
  Title = 'title'
}

/** Judge type definition */
export type Judge = NodeInterface & {
  __typename?: 'Judge';
  categoryjudge?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['String']>;
  is_verified?: Maybe<Scalars['String']>;
  isno_patent_file?: Maybe<Scalars['String']>;
  patent_file?: Maybe<Scalars['String']>;
  person_id?: Maybe<Scalars['Int']>;
  sport?: Maybe<Scalars['String']>;
  sporttype_id?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** Определяет, кто подает заявки в категорию */
export enum JudgeCategoryEnum {
  /** первая категория */
  Judge_1 = 'judge_1',
  /** вторая категория */
  Judge_2 = 'judge_2',
  /** третья категория */
  Judge_3 = 'judge_3',
  /** высшая категория */
  JudgeHigh = 'judge_high',
  /** международная категория */
  JudgeInt = 'judge_int',
  /** без категории */
  JudgeNocat = 'judge_nocat'
}

/** Describe the RG competitor exercise data for web-judge module */
export type JudgingSystemExerciseRg = {
  __typename?: 'JudgingSystemExerciseRG';
  apparatus?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['ID']>;
  competitor_group_name?: Maybe<Scalars['String']>;
  competitor_id?: Maybe<Scalars['ID']>;
  competitor_name?: Maybe<Scalars['String']>;
  competitor_team_name?: Maybe<Scalars['String']>;
  event_id: Scalars['ID'];
  /** Now "on carpet" exercise data */
  exercise_oncarpet?: Maybe<JudgingSystemExerciseRgBase>;
  exercise_status: RgExerciseStatusEnum;
  /** Whether score accepted by judgin system or not */
  is_accepted?: Maybe<Scalars['Boolean']>;
  /** Judge team number */
  judge_team?: Maybe<Scalars['Int']>;
  /** Exercise score. Can be calculated if exists judge type */
  score?: Maybe<Scalars['Float']>;
};

/** Describe the base structure of RG competitor exercise for judging system. */
export type JudgingSystemExerciseRgBase = {
  __typename?: 'JudgingSystemExerciseRGBase';
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_group_name?: Maybe<Scalars['String']>;
  competitor_id: Scalars['ID'];
  competitor_name?: Maybe<Scalars['String']>;
  competitor_team_name?: Maybe<Scalars['String']>;
  event_id: Scalars['ID'];
  /** Exercise judge team number */
  judge_team: Scalars['Int'];
};

/** Состояние выступления из судейской системы (ХГ) */
export type JudgingSystemExerciseStatusRgInput = {
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_id: Scalars['String'];
  event_id: Scalars['ID'];
  exercise_status: RgExerciseStatusInputEnum;
  judge_team: Scalars['Int'];
  status_values: Scalars['JSONObject'];
};

/** Полная информация по выступлению в веб-судействе */
export type JudgingSystemScoreRg = {
  __typename?: 'JudgingSystemScoreRG';
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_group_name?: Maybe<Scalars['String']>;
  competitor_id: Scalars['ID'];
  competitor_name?: Maybe<Scalars['String']>;
  competitor_team_name?: Maybe<Scalars['String']>;
  dt_on_carpet?: Maybe<Scalars['DateTimeType']>;
  dt_out_carpet?: Maybe<Scalars['DateTimeType']>;
  event_id: Scalars['ID'];
  is_dnf?: Maybe<Scalars['Boolean']>;
  is_dns?: Maybe<Scalars['Boolean']>;
  is_dsq?: Maybe<Scalars['Boolean']>;
  is_signed?: Maybe<Scalars['Boolean']>;
  judge_a1?: Maybe<Scalars['Float']>;
  judge_a2?: Maybe<Scalars['Float']>;
  judge_a3?: Maybe<Scalars['Float']>;
  judge_a4?: Maybe<Scalars['Float']>;
  judge_d1?: Maybe<Scalars['Float']>;
  judge_d2?: Maybe<Scalars['Float']>;
  judge_d3?: Maybe<Scalars['Float']>;
  judge_d4?: Maybe<Scalars['Float']>;
  judge_e1?: Maybe<Scalars['Float']>;
  judge_e2?: Maybe<Scalars['Float']>;
  judge_e3?: Maybe<Scalars['Float']>;
  judge_e4?: Maybe<Scalars['Float']>;
  judge_e5?: Maybe<Scalars['Float']>;
  judge_e6?: Maybe<Scalars['Float']>;
  judge_l1?: Maybe<Scalars['Float']>;
  judge_l2?: Maybe<Scalars['Float']>;
  judge_t?: Maybe<Scalars['Float']>;
  judge_team?: Maybe<Scalars['Int']>;
  sj_da?: Maybe<Scalars['Float']>;
  sj_db?: Maybe<Scalars['Float']>;
  sj_ea?: Maybe<Scalars['Float']>;
  sj_et?: Maybe<Scalars['Float']>;
  turn_num?: Maybe<Scalars['Int']>;
};

/** Оценки за выступление из судейской системы (ХГ) */
export type JudgingSystemScoreRgInput = {
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_group_name?: InputMaybe<Scalars['String']>;
  competitor_id: Scalars['ID'];
  competitor_name?: InputMaybe<Scalars['String']>;
  competitor_team_name?: InputMaybe<Scalars['String']>;
  dt_on_carpet?: InputMaybe<Scalars['DateTimeType']>;
  dt_out_carpet?: InputMaybe<Scalars['DateTimeType']>;
  event_id: Scalars['ID'];
  is_dnf?: InputMaybe<Scalars['Boolean']>;
  is_dns?: InputMaybe<Scalars['Boolean']>;
  is_dsq?: InputMaybe<Scalars['Boolean']>;
  is_signed?: InputMaybe<Scalars['Boolean']>;
  judge_a1?: InputMaybe<Scalars['Float']>;
  judge_a2?: InputMaybe<Scalars['Float']>;
  judge_a3?: InputMaybe<Scalars['Float']>;
  judge_a4?: InputMaybe<Scalars['Float']>;
  judge_d1?: InputMaybe<Scalars['Float']>;
  judge_d2?: InputMaybe<Scalars['Float']>;
  judge_d3?: InputMaybe<Scalars['Float']>;
  judge_d4?: InputMaybe<Scalars['Float']>;
  judge_e1?: InputMaybe<Scalars['Float']>;
  judge_e2?: InputMaybe<Scalars['Float']>;
  judge_e3?: InputMaybe<Scalars['Float']>;
  judge_e4?: InputMaybe<Scalars['Float']>;
  judge_e5?: InputMaybe<Scalars['Float']>;
  judge_e6?: InputMaybe<Scalars['Float']>;
  judge_l1?: InputMaybe<Scalars['Float']>;
  judge_l2?: InputMaybe<Scalars['Float']>;
  judge_t?: InputMaybe<Scalars['Float']>;
  judge_team: Scalars['Int'];
  sj_da?: InputMaybe<Scalars['Float']>;
  sj_db?: InputMaybe<Scalars['Float']>;
  sj_ea?: InputMaybe<Scalars['Float']>;
  sj_et?: InputMaybe<Scalars['Float']>;
  turn_num?: InputMaybe<Scalars['Int']>;
};

/** Определяет, кто подает заявки в категорию */
export enum LangEnum {
  /** английский */
  En = 'en',
  /** итальянский */
  It = 'it',
  /** русский */
  Ru = 'ru'
}

/** Legalentity type definition */
export type Legalentity = NodeInterface & {
  __typename?: 'Legalentity';
  calendar_id: Scalars['Int'];
  chief_name: Scalars['String'];
  chief_position: Scalars['String'];
  dt_create: Scalars['DateType'];
  id: Scalars['ID'];
  inn: Scalars['String'];
  is_accept_offer: Scalars['Int'];
  is_actual: Scalars['Int'];
  is_same_legal_post_address: Scalars['Int'];
  kpp: Scalars['String'];
  legal_address: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  post_address: Scalars['String'];
  principal: Scalars['String'];
  short_name: Scalars['String'];
  table: Scalars['String'];
  withdrawal_message: Scalars['String'];
};

/** LegalentityConnection type definition */
export type LegalentityConnection = {
  __typename?: 'LegalentityConnection';
  edges?: Maybe<Array<Maybe<Legalentity>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Информация по очереди писем для пользователей */
export type MailingQueue = NodeInterface & {
  __typename?: 'MailingQueue';
  actual_name?: Maybe<Scalars['String']>;
  count_tries?: Maybe<Scalars['Int']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  dt_sending?: Maybe<Scalars['DateTimeType']>;
  email?: Maybe<Scalars['String']>;
  fi_actual_name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  generator_id?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  sent?: Maybe<Scalars['Boolean']>;
  subject?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** MailingQueueConnection type definition */
export type MailingQueueConnection = {
  __typename?: 'MailingQueueConnection';
  edges?: Maybe<Array<Maybe<MailingQueue>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type MailingQueueListFilter = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['DateType']>>>;
  generator_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  search_string?: InputMaybe<Scalars['String']>;
};

/** Media type definition */
export type Media = {
  __typename?: 'Media';
  albums?: Maybe<Array<Maybe<MediaAlbums>>>;
  events?: Maybe<Array<Maybe<MediaEvent>>>;
  posts?: Maybe<Array<Maybe<MediaPost>>>;
};

/** MediaAction type definition */
export type MediaAction = {
  __typename?: 'MediaAction';
  action_type?: Maybe<Scalars['String']>;
  author_id?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_entity_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export enum MediaActionTypeEnum {
  Comment = 'COMMENT',
  Like = 'LIKE',
  Photo = 'PHOTO',
  Tag = 'TAG',
  Video = 'VIDEO'
}

/** MediaAlbums type definition */
export type MediaAlbums = {
  __typename?: 'MediaAlbums';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  owner_type?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<MediaAction>>>;
  tags?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<MediaAction>>>;
};

/** MediaEvent type definition */
export type MediaEvent = {
  __typename?: 'MediaEvent';
  author_id?: Maybe<Scalars['Int']>;
  comment?: Maybe<Array<Maybe<MediaAction>>>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Array<Maybe<MediaAction>>>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  owner_type?: Maybe<Scalars['String']>;
};

export enum MediaOwnerTypeEnum {
  Employee = 'EMPLOYEE',
  Organization = 'ORGANIZATION',
  Other = 'OTHER',
  Person = 'PERSON'
}

/** MediaPost type definition */
export type MediaPost = {
  __typename?: 'MediaPost';
  author?: Maybe<Person>;
  author_id?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Maybe<MediaAction>>>;
  content?: Maybe<Scalars['String']>;
  dt_create?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Array<Maybe<MediaAction>>>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['Int']>;
  owner_type?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<MediaAction>>>;
  uri?: Maybe<Array<Maybe<MediaUri>>>;
};

/** MediaUri type definition */
export type MediaUri = {
  __typename?: 'MediaUri';
  type?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** MobileAppSubscription type definition */
export type MobileAppSubscription = {
  __typename?: 'MobileAppSubscription';
  filters?: Maybe<Array<Maybe<NewsFeedFilter>>>;
  status: MobileAppSubscriptionStatus;
};

/** MobileAppSubscriptionStatus type definition */
export type MobileAppSubscriptionStatus = {
  __typename?: 'MobileAppSubscriptionStatus';
  dt_expire?: Maybe<Scalars['DateTimeType']>;
  expired?: Maybe<Scalars['Boolean']>;
  sid: Scalars['String'];
};

/** Mutation interface */
export type Mutation = {
  __typename?: 'Mutation';
  addVideoDataToExercises?: Maybe<Scalars['Boolean']>;
  adjustEventCompetitiorPhotoDates?: Maybe<Scalars['Boolean']>;
  advItemClick?: Maybe<Scalars['Boolean']>;
  advItemView?: Maybe<Scalars['Boolean']>;
  applicationDocuments: Scalars['String'];
  autoUnitePersonDoubles: Scalars['Boolean'];
  buildAthleteRating?: Maybe<Scalars['Boolean']>;
  buildVideoIndex?: Maybe<Scalars['String']>;
  cancelEvent?: Maybe<Scalars['Boolean']>;
  cancelEventToParentCalendarRequest?: Maybe<Scalars['Boolean']>;
  cancelRevising?: Maybe<Scalars['Boolean']>;
  cleanCompetitorPhotoArchives?: Maybe<Scalars['String']>;
  confirmAthleteInspectionDate?: Maybe<AthleteInspectionDate>;
  confirmAthleteRankTests?: Maybe<Array<Maybe<AthleteRankTest>>>;
  createEventCompetitorPhotoPayment?: Maybe<EventCompetitorPhotoPaymentUrl>;
  createEventToParentCalendarRequest?: Maybe<Scalars['Boolean']>;
  createRegistrationFee?: Maybe<SportSeason>;
  createRegistrationFeePayment?: Maybe<RegistrationFeePaymentUrl>;
  createSeason?: Maybe<SportSeason>;
  createSeasonWithRegistrationFee?: Maybe<SportSeason>;
  deleteCalendar?: Maybe<Calendar>;
  deleteCalendarMedia?: Maybe<Calendar>;
  deleteEvent?: Maybe<Event>;
  deleteEventApplication?: Maybe<Scalars['Boolean']>;
  deleteEventCompetitorScoresFromInterfaceCY?: Maybe<Scalars['Boolean']>;
  deleteEventCompetitorScoresFromInterfaceFS?: Maybe<Scalars['Boolean']>;
  deleteEventCompetitorScoresFromInterfaceRG?: Maybe<Scalars['Boolean']>;
  deleteEventMedia?: Maybe<Event>;
  deleteFederationTeamSquad?: Maybe<Scalars['Boolean']>;
  deleteFederationTeamSquadMember?: Maybe<Scalars['Boolean']>;
  deleteFile?: Maybe<FileType>;
  deleteOrganization?: Maybe<Organization>;
  deleteOrganizationMedia?: Maybe<Organization>;
  deleteOrganizationReportMedia?: Maybe<OrganizationReportMedia>;
  deletePersonAvatar?: Maybe<Person>;
  deleteSeason?: Maybe<Scalars['Int']>;
  deleteTelegramUser?: Maybe<Scalars['Boolean']>;
  disconnectPersonDoubles?: Maybe<PersonDoubleCouple>;
  downloadRefereeingSystem?: Maybe<Scalars['Int']>;
  downloadXlsxApplicationsListByCategory?: Maybe<Scalars['String']>;
  downloadXlsxTest?: Maybe<Scalars['String']>;
  generateWebJudgeUid?: Maybe<WebJudgeUidAndUrl>;
  interactWithTelegramBot?: Maybe<TelegramChatConnection>;
  isuCalcXml: Scalars['String'];
  judgingSystemResultsSaveEventCategories?: Maybe<Array<Maybe<EventCategory>>>;
  makeApplicationPayment?: Maybe<Scalars['Boolean']>;
  makeApplicationsDocument: Scalars['String'];
  makeSportRankRecommendation: Scalars['String'];
  mobActivateSubscription?: Maybe<Scalars['Boolean']>;
  mobAuth?: Maybe<Scalars['String']>;
  mobCancelSubscription?: Maybe<Scalars['Boolean']>;
  mobGetFreeSubscription?: Maybe<Scalars['Boolean']>;
  mobNewsSubscribe?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobNewsSubscribeFilter?: Maybe<Scalars['Boolean']>;
  mobNewsUnsubscribe?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobOAuth?: Maybe<NewsFeedItemObject>;
  pinPostwallPost?: Maybe<Scalars['Boolean']>;
  postPayments: Scalars['String'];
  removeAlertPublicationEventFlag?: Maybe<OrganizationAlerts>;
  removeVideostand?: Maybe<Scalars['ID']>;
  removeVideostandEvent?: Maybe<Scalars['ID']>;
  requestTelegramUserConfirmationCode?: Maybe<Scalars['Boolean']>;
  resendTelegramUserConfirmationCode?: Maybe<Scalars['Boolean']>;
  resetAthleteInspectionDateConfirmation?: Maybe<AthleteInspectionDate>;
  resetAthleteRankTestsConfirmation?: Maybe<Array<Maybe<AthleteRankTest>>>;
  restoreCanceledEvent?: Maybe<Scalars['Boolean']>;
  rewritePersonDoubles?: Maybe<Scalars['Boolean']>;
  saveAccomodation?: Maybe<Scalars['Boolean']>;
  saveAdvItem?: Maybe<Adv>;
  saveApplicationPayment?: Maybe<PaymentDetails>;
  saveCalendar?: Maybe<Calendar>;
  saveClientAppLog?: Maybe<Scalars['Boolean']>;
  saveEventAccomodation?: Maybe<EventAccomodationScheme>;
  saveEventApplication?: Maybe<Array<Maybe<Application>>>;
  saveEventApplicationSettings?: Maybe<Event>;
  saveEventCategories?: Maybe<Event>;
  saveEventCompetitor?: Maybe<Scalars['Int']>;
  saveEventCompetitor2?: Maybe<EventCompetitor2>;
  saveEventCompetitorJsonFile?: Maybe<Scalars['Int']>;
  saveEventCompetitorPhoto?: Maybe<Scalars['Boolean']>;
  saveEventCompetitorScoreDates?: Maybe<Scalars['Boolean']>;
  saveEventCompetitorScores?: Maybe<Scalars['Int']>;
  saveEventCompetitorScoresFromInterfaceCY?: Maybe<EventCompetitorScoresInterfaceCy>;
  saveEventCompetitorScoresFromInterfaceFS?: Maybe<EventCompetitorScoresInterfaceFs>;
  saveEventCompetitorScoresFromInterfaceRG?: Maybe<EventCompetitorScoresInterfaceRg>;
  saveEventCompetitorScoresV2?: Maybe<Scalars['Int']>;
  saveEventCompetitorVideo?: Maybe<Scalars['Boolean']>;
  saveEventConfidentiality?: Maybe<Event>;
  saveEventInfo?: Maybe<Event>;
  saveEventOrganizer?: Maybe<Event>;
  saveEventRgJudgingRulesEdition?: Maybe<Scalars['Boolean']>;
  saveEventSchedule?: Maybe<Event>;
  saveEventShowResults?: Maybe<Event>;
  saveEventTranslations?: Maybe<Event>;
  saveFsInspectionCommissionSeasons?: Maybe<Scalars['ID']>;
  saveOrganization?: Maybe<Organization>;
  saveOrganizationFederationRG?: Maybe<Organization>;
  saveOrganizationPublicationEvent?: Maybe<OrganizationPublicationEvent>;
  savePerson?: Maybe<Person>;
  savePostwall?: Maybe<Postwall>;
  saveRefereeingSystemVersion?: Maybe<RefereeingSystemVersion>;
  saveSiteSettings?: Maybe<Array<Maybe<SiteSettings>>>;
  saveSubscriptionPayment?: Maybe<PaymentDetails>;
  saveVideostand?: Maybe<Scalars['ID']>;
  saveVideostandEvent?: Maybe<Scalars['ID']>;
  saveVideostandStreamParams?: Maybe<Scalars['Boolean']>;
  sendEventToRevise?: Maybe<Scalars['Boolean']>;
  setAthleteInspectionDate?: Maybe<AthleteInspectionDate>;
  setEventApplicationStatus?: Maybe<Scalars['Boolean']>;
  setEventToParentCalendarRequestStatus?: Maybe<Scalars['Boolean']>;
  setFederationTeamSquad?: Maybe<Scalars['Boolean']>;
  setFederationTeamSquadMember?: Maybe<Scalars['Boolean']>;
  setFederationTeamSquadMemberStatus?: Maybe<Scalars['Boolean']>;
  subscribeTelegramUserToSport?: Maybe<Scalars['Boolean']>;
  transferCalendarAvatarsFromOldSiteToNewSite?: Maybe<Array<Maybe<FileType>>>;
  unitePersonDoubles: PersonDoublesConnection;
  unpinPostwallPost?: Maybe<Scalars['Boolean']>;
  unsubscribeTelegramUserFromSport?: Maybe<Scalars['Boolean']>;
  updateEventCompetitorPhotoPaymentRegistry?: Maybe<Scalars['String']>;
  updateJudgingSystemExerciseStateRG?: Maybe<JudgingSystemScoreRg>;
  updateJudgingSystemScoreRG?: Maybe<JudgingSystemScoreRg>;
  updatePayment?: Maybe<Scalars['Boolean']>;
  updatePaymentDate: Scalars['String'];
  updateRegistrationFee?: Maybe<SportSeason>;
  updateRegistrationFeePaymentRegistry?: Maybe<Scalars['String']>;
  updateSeason?: Maybe<SportSeason>;
  updateSeasonWithRegistrationFee?: Maybe<SportSeason>;
  updateWebJudgeScoreRG?: Maybe<WebJudgeScoreRg>;
  upload?: Maybe<FileType>;
  uploadAthletesXlsx?: Maybe<XlsxQueue>;
  uploadCalendarMedia?: Maybe<Calendar>;
  uploadEventMedia?: Maybe<Event>;
  uploadOrganizationMedia?: Maybe<Organization>;
  uploadOrganizationReportMedia?: Maybe<OrganizationReportMedia>;
  uploadPersonAvatar?: Maybe<Person>;
  uploadResultsFromIsucalc?: Maybe<Scalars['Boolean']>;
};


/** Mutation interface */
export type MutationAdjustEventCompetitiorPhotoDatesArgs = {
  competition_id: Scalars['Int'];
};


/** Mutation interface */
export type MutationAdvItemClickArgs = {
  id: Scalars['ID'];
  location: Scalars['String'];
};


/** Mutation interface */
export type MutationAdvItemViewArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** Mutation interface */
export type MutationApplicationDocumentsArgs = {
  app_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationAutoUnitePersonDoublesArgs = {
  sport_id: Scalars['Int'];
};


/** Mutation interface */
export type MutationCancelEventArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationCancelEventToParentCalendarRequestArgs = {
  competition_id: Scalars['ID'];
  parent_calendar_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationCancelRevisingArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationConfirmAthleteInspectionDateArgs = {
  athlete_id: Scalars['ID'];
  context: FsCommissionContextEnum;
  field_name: AthleteInspectionDateEnum;
  field_value: Scalars['DateType'];
  object_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationConfirmAthleteRankTestsArgs = {
  athlete_id: Scalars['ID'];
  context: FsCommissionContextEnum;
  object_id: Scalars['ID'];
  tests?: InputMaybe<Array<InputMaybe<AthleteRankTestEnum>>>;
};


/** Mutation interface */
export type MutationCreateEventCompetitorPhotoPaymentArgs = {
  data: EventCompetitorPhotoOrderInput;
};


/** Mutation interface */
export type MutationCreateEventToParentCalendarRequestArgs = {
  calendar_id: Scalars['ID'];
  competition_id: Scalars['ID'];
  parent_calendar_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationCreateRegistrationFeeArgs = {
  data: RegistrationFeeInput;
};


/** Mutation interface */
export type MutationCreateRegistrationFeePaymentArgs = {
  data: RegistrationFeeOrderInput;
};


/** Mutation interface */
export type MutationCreateSeasonArgs = {
  data: SportSeasonInput;
};


/** Mutation interface */
export type MutationCreateSeasonWithRegistrationFeeArgs = {
  data: SportSeasonWithRegistrationFeeInput;
};


/** Mutation interface */
export type MutationDeleteCalendarArgs = {
  action: ActionDeletion;
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteCalendarMediaArgs = {
  calendarId: Scalars['Int'];
  document?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationDeleteEventArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteEventApplicationArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceCyArgs = {
  data: EventCompetitorDeleteInputCy;
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceFsArgs = {
  data: EventCompetitorDeleteInputFs;
};


/** Mutation interface */
export type MutationDeleteEventCompetitorScoresFromInterfaceRgArgs = {
  data: EventCompetitorDeleteInputRg;
};


/** Mutation interface */
export type MutationDeleteEventMediaArgs = {
  document?: InputMaybe<Scalars['String']>;
  event_id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteFederationTeamSquadArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationDeleteFederationTeamSquadMemberArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationDeleteFileArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteOrganizationMediaArgs = {
  document?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteOrganizationReportMediaArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeletePersonAvatarArgs = {
  personId: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteSeasonArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDeleteTelegramUserArgs = {
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationDisconnectPersonDoublesArgs = {
  doubles: Scalars['Boolean'];
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationDownloadRefereeingSystemArgs = {
  federation_filter: Scalars['String'];
};


/** Mutation interface */
export type MutationDownloadXlsxApplicationsListByCategoryArgs = {
  event_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationGenerateWebJudgeUidArgs = {
  event_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationInteractWithTelegramBotArgs = {
  message?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<TelegramUserInput>;
};


/** Mutation interface */
export type MutationIsuCalcXmlArgs = {
  event_id: Scalars['ID'];
  titles: IsuCalcTitlesEnum;
  use_patronymic?: InputMaybe<Scalars['Boolean']>;
};


/** Mutation interface */
export type MutationJudgingSystemResultsSaveEventCategoriesArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCategoryInput>>>;
};


/** Mutation interface */
export type MutationMakeApplicationPaymentArgs = {
  application_payments?: InputMaybe<Array<InputMaybe<ApplicationPaymentInput>>>;
  ccdata: CreditCardDataInput;
  event_id: Scalars['ID'];
  phone_email: Scalars['String'];
};


/** Mutation interface */
export type MutationMakeApplicationsDocumentArgs = {
  director?: InputMaybe<Scalars['String']>;
  doc_type?: InputMaybe<Scalars['String']>;
  doctor?: InputMaybe<Scalars['String']>;
  event_id: Scalars['ID'];
  first_name_leader?: InputMaybe<Scalars['String']>;
  last_name_leader?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['ID']>;
  patronymic_leader?: InputMaybe<Scalars['String']>;
  phone_leader?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationMakeSportRankRecommendationArgs = {
  person_id: Scalars['ID'];
  sport_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationMobAuthArgs = {
  login: Scalars['String'];
  password: Scalars['String'];
};


/** Mutation interface */
export type MutationMobNewsSubscribeArgs = {
  object_id: Scalars['ID'];
  object_type: Scalars['String'];
};


/** Mutation interface */
export type MutationMobNewsSubscribeFilterArgs = {
  data?: InputMaybe<NewsFeedFiltersInput>;
};


/** Mutation interface */
export type MutationMobNewsUnsubscribeArgs = {
  object_id: Scalars['ID'];
  object_type: Scalars['String'];
};


/** Mutation interface */
export type MutationMobOAuthArgs = {
  access_code: Scalars['String'];
  service_name?: InputMaybe<OAuthServiceNameEnum>;
};


/** Mutation interface */
export type MutationPinPostwallPostArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationPostPaymentsArgs = {
  appids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** Mutation interface */
export type MutationRemoveAlertPublicationEventFlagArgs = {
  alert_to_moderator?: InputMaybe<Scalars['Boolean']>;
  alert_to_organizer?: InputMaybe<Scalars['Boolean']>;
  organization_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationRemoveVideostandArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationRemoveVideostandEventArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationRequestTelegramUserConfirmationCodeArgs = {
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationResendTelegramUserConfirmationCodeArgs = {
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationResetAthleteInspectionDateConfirmationArgs = {
  athlete_id: Scalars['ID'];
  context: FsCommissionContextEnum;
  field_name?: InputMaybe<AthleteInspectionDateEnum>;
  object_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationResetAthleteRankTestsConfirmationArgs = {
  athlete_id: Scalars['ID'];
  context: FsCommissionContextEnum;
  object_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationRestoreCanceledEventArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationSaveAccomodationArgs = {
  app_id?: InputMaybe<Scalars['ID']>;
  dt_end: Scalars['DateType'];
  dt_start: Scalars['DateType'];
  event_id: Scalars['ID'];
  hotel_id: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  phone: Scalars['String'];
  residents?: InputMaybe<Array<InputMaybe<AccomodationResidentInput>>>;
  room_accomodation_id: Scalars['ID'];
  room_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationSaveAdvItemArgs = {
  data: AdvInput;
};


/** Mutation interface */
export type MutationSaveApplicationPaymentArgs = {
  event_id: Scalars['ID'];
  fail_url?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LangEnum>;
  payments?: InputMaybe<Array<InputMaybe<ApplicationPaymentInput>>>;
  phone_email: Scalars['String'];
  success_url?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationSaveCalendarArgs = {
  data: CalendarInput;
};


/** Mutation interface */
export type MutationSaveClientAppLogArgs = {
  data: ClientAppLogInput;
};


/** Mutation interface */
export type MutationSaveEventAccomodationArgs = {
  data: EventAccomodationInput;
};


/** Mutation interface */
export type MutationSaveEventApplicationArgs = {
  applications?: InputMaybe<Array<InputMaybe<EventApplicationInput>>>;
  category_id?: InputMaybe<Scalars['ID']>;
  event_id: Scalars['ID'];
  translation_id?: InputMaybe<Scalars['ID']>;
};


/** Mutation interface */
export type MutationSaveEventApplicationSettingsArgs = {
  data: EventApplicationSettingsInput;
};


/** Mutation interface */
export type MutationSaveEventCategoriesArgs = {
  data: EventCategoriesInput;
};


/** Mutation interface */
export type MutationSaveEventCompetitorArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitor2Args = {
  data?: InputMaybe<EventCompetitorInput>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorJsonFileArgs = {
  file: Scalars['Upload'];
  mutation_type: MutationsForJsonFileEnum;
};


/** Mutation interface */
export type MutationSaveEventCompetitorPhotoArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorPhotoInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoreDatesArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreDatesInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresArgs = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInput>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceCyArgs = {
  data: EventCompetitorScoresInterfaceInputCy;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceFsArgs = {
  data: EventCompetitorScoresInterfaceInputFs;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresFromInterfaceRgArgs = {
  data: EventCompetitorScoresInterfaceInputRg;
};


/** Mutation interface */
export type MutationSaveEventCompetitorScoresV2Args = {
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreInputV2>>>;
};


/** Mutation interface */
export type MutationSaveEventCompetitorVideoArgs = {
  competition_id: Scalars['Int'];
  data?: InputMaybe<Array<InputMaybe<EventCompetitorScoreVideoInput>>>;
};


/** Mutation interface */
export type MutationSaveEventConfidentialityArgs = {
  data: EventConfidentialityInput;
};


/** Mutation interface */
export type MutationSaveEventInfoArgs = {
  data: EventInput;
};


/** Mutation interface */
export type MutationSaveEventOrganizerArgs = {
  data: EventOrganizerInput;
};


/** Mutation interface */
export type MutationSaveEventRgJudgingRulesEditionArgs = {
  competition_id: Scalars['ID'];
  judging_rules_rg: EventRgJudgingRulesEditionEnum;
};


/** Mutation interface */
export type MutationSaveEventScheduleArgs = {
  data: EventScheduleInputType;
};


/** Mutation interface */
export type MutationSaveEventShowResultsArgs = {
  event_id: Scalars['Int'];
  show_results: EventShowResultsEnum;
};


/** Mutation interface */
export type MutationSaveEventTranslationsArgs = {
  data: EventTranslationsInput;
};


/** Mutation interface */
export type MutationSaveFsInspectionCommissionSeasonsArgs = {
  seasons?: InputMaybe<Array<InputMaybe<FsInspectionCommissionSeasonInput>>>;
};


/** Mutation interface */
export type MutationSaveOrganizationArgs = {
  data: OrganizationInput;
};


/** Mutation interface */
export type MutationSaveOrganizationFederationRgArgs = {
  data: OrganizationFederationRg_Input;
};


/** Mutation interface */
export type MutationSaveOrganizationPublicationEventArgs = {
  data: OrganizationPublicationEventInput;
};


/** Mutation interface */
export type MutationSavePersonArgs = {
  data: PersonFormInput;
};


/** Mutation interface */
export type MutationSavePostwallArgs = {
  data: PostwallInput;
};


/** Mutation interface */
export type MutationSaveRefereeingSystemVersionArgs = {
  federation_filter: Scalars['String'];
  version: Scalars['String'];
};


/** Mutation interface */
export type MutationSaveSiteSettingsArgs = {
  data?: InputMaybe<Array<InputMaybe<SiteSettingsInput>>>;
};


/** Mutation interface */
export type MutationSaveSubscriptionPaymentArgs = {
  email?: InputMaybe<Scalars['String']>;
  fail_url?: InputMaybe<Scalars['String']>;
  success_url?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationSaveVideostandArgs = {
  data: VideostandInput;
};


/** Mutation interface */
export type MutationSaveVideostandEventArgs = {
  data: VideostandEventInput;
};


/** Mutation interface */
export type MutationSaveVideostandStreamParamsArgs = {
  params: VideostandStreamParamsInput;
  videostand_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationSendEventToReviseArgs = {
  id: Scalars['Int'];
};


/** Mutation interface */
export type MutationSetAthleteInspectionDateArgs = {
  athlete_id: Scalars['ID'];
  context: FsCommissionContextEnum;
  field_name: AthleteInspectionDateEnum;
  field_value: Scalars['DateType'];
  object_id: Scalars['ID'];
};


/** Mutation interface */
export type MutationSetEventApplicationStatusArgs = {
  id: Scalars['ID'];
  status: ApplicationStatusEnum;
};


/** Mutation interface */
export type MutationSetEventToParentCalendarRequestStatusArgs = {
  competition_id: Scalars['ID'];
  parent_calendar_id: Scalars['ID'];
  reject_reason?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
};


/** Mutation interface */
export type MutationSetFederationTeamSquadArgs = {
  data?: InputMaybe<FederationTeamSquadInput>;
};


/** Mutation interface */
export type MutationSetFederationTeamSquadMemberArgs = {
  data?: InputMaybe<FederationTeamSquadMemberInput>;
};


/** Mutation interface */
export type MutationSetFederationTeamSquadMemberStatusArgs = {
  id: Scalars['ID'];
  status: Scalars['String'];
};


/** Mutation interface */
export type MutationSubscribeTelegramUserToSportArgs = {
  sport_type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationUnitePersonDoublesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  state?: InputMaybe<Array<InputMaybe<PersonDoublesStateEnum>>>;
};


/** Mutation interface */
export type MutationUnpinPostwallPostArgs = {
  id: Scalars['ID'];
};


/** Mutation interface */
export type MutationUnsubscribeTelegramUserFromSportArgs = {
  sport_type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


/** Mutation interface */
export type MutationUpdateEventCompetitorPhotoPaymentRegistryArgs = {
  payment_id: Scalars['Int'];
};


/** Mutation interface */
export type MutationUpdateJudgingSystemExerciseStateRgArgs = {
  data: JudgingSystemExerciseStatusRgInput;
};


/** Mutation interface */
export type MutationUpdateJudgingSystemScoreRgArgs = {
  data: JudgingSystemScoreRgInput;
};


/** Mutation interface */
export type MutationUpdatePaymentArgs = {
  data: PaymentDataInput;
  status?: InputMaybe<Scalars['Int']>;
};


/** Mutation interface */
export type MutationUpdatePaymentDateArgs = {
  new_dt: Scalars['DateTimeType'];
  password?: InputMaybe<Scalars['String']>;
  payment_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


/** Mutation interface */
export type MutationUpdateRegistrationFeeArgs = {
  data: RegistrationFeeInput;
};


/** Mutation interface */
export type MutationUpdateRegistrationFeePaymentRegistryArgs = {
  payment_id: Scalars['Int'];
};


/** Mutation interface */
export type MutationUpdateSeasonArgs = {
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  id: Scalars['Int'];
  sport_id: Scalars['Int'];
  title: Scalars['String'];
};


/** Mutation interface */
export type MutationUpdateSeasonWithRegistrationFeeArgs = {
  data: SportSeasonWithRegistrationFeeInput;
};


/** Mutation interface */
export type MutationUpdateWebJudgeScoreRgArgs = {
  data: WebJudgeScoreRgInput;
};


/** Mutation interface */
export type MutationUploadArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadAthletesXlsxArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadCalendarMediaArgs = {
  calendarId: Scalars['Int'];
  document?: InputMaybe<Scalars['String']>;
  fileInput?: InputMaybe<FileInput>;
};


/** Mutation interface */
export type MutationUploadEventMediaArgs = {
  document?: InputMaybe<Scalars['String']>;
  event_id: Scalars['Int'];
  fileInput?: InputMaybe<FileInput>;
};


/** Mutation interface */
export type MutationUploadOrganizationMediaArgs = {
  document?: InputMaybe<Scalars['String']>;
  fileInput?: InputMaybe<FileInput>;
  organizationId: Scalars['Int'];
};


/** Mutation interface */
export type MutationUploadOrganizationReportMediaArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};


/** Mutation interface */
export type MutationUploadPersonAvatarArgs = {
  fileInput?: InputMaybe<FileInput>;
  personId: Scalars['Int'];
};


/** Mutation interface */
export type MutationUploadResultsFromIsucalcArgs = {
  fileInput?: InputMaybe<FileNonNullInput>;
};

/** Тип мутации для передачи участников и результатов из судейской системы на сайт через json файл */
export enum MutationsForJsonFileEnum {
  /** Сохранить участников соревнования */
  SaveEventCompetitor = 'saveEventCompetitor',
  /** Сохранить результаты участников соревнования */
  SaveEventCompetitorScores = 'saveEventCompetitorScores',
  /** Сохранить результаты участников соревнования по правилам 2022-2024 */
  SaveEventCompetitorScoresV2 = 'saveEventCompetitorScoresV2'
}

/** MyEvent type definition */
export type MyEvent = {
  __typename?: 'MyEvent';
  all_apps_count: Scalars['Int'];
  calendar_auser_id: Scalars['Int'];
  calendar_org_id?: Maybe<Scalars['Int']>;
  calendar_owner_name?: Maybe<Scalars['String']>;
  calendar_title?: Maybe<Scalars['String']>;
  dates: Scalars['String'];
  dt_begin: Scalars['String'];
  dt_end: Scalars['String'];
  id: Scalars['Int'];
  new_apps_count: Scalars['Int'];
  parent_calendar_requests?: Maybe<Array<Maybe<EventToParentCalendarRequest>>>;
  results_count: Scalars['Int'];
  status: Scalars['String'];
  table: Scalars['String'];
  title: Scalars['String'];
};

/** MyEventCalendar type definition */
export type MyEventCalendar = {
  __typename?: 'MyEventCalendar';
  calendar_auser_id: Scalars['Int'];
  calendar_id: Scalars['Int'];
  calendar_org_id?: Maybe<Scalars['Int']>;
  calendar_owner_name?: Maybe<Scalars['String']>;
  calendar_title?: Maybe<Scalars['String']>;
};

/** MyEventConnection type definition */
export type MyEventConnection = {
  __typename?: 'MyEventConnection';
  edges?: Maybe<Array<Maybe<MyEvent>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** MyEventRequest type definition */
export type MyEventRequest = {
  __typename?: 'MyEventRequest';
  allow_revise: Scalars['Boolean'];
  applicant_id: Scalars['ID'];
  applicant_name?: Maybe<Scalars['String']>;
  calendar_id: Scalars['ID'];
  dates: Scalars['String'];
  dt_begin: Scalars['String'];
  dt_end: Scalars['String'];
  id: Scalars['ID'];
  parent_calendar_id: Scalars['ID'];
  request_status: Scalars['String'];
  status: Scalars['String'];
  time: Scalars['String'];
  title: Scalars['String'];
};

/** MyEventRequestConnection type definition */
export type MyEventRequestConnection = {
  __typename?: 'MyEventRequestConnection';
  edges?: Maybe<Array<Maybe<MyEventRequest>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** NewsFeedFilter type definition */
export type NewsFeedFilter = {
  __typename?: 'NewsFeedFilter';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** NewsFeedFilterInput type definition */
export type NewsFeedFilterInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['ID']>;
};

/** NewsFeedFilterInput type definition */
export type NewsFeedFiltersInput = {
  filters?: InputMaybe<Array<InputMaybe<NewsFeedFilterInput>>>;
};

/** NewsFeedItem type definition */
export type NewsFeedItem = {
  __typename?: 'NewsFeedItem';
  attachment_date?: Maybe<Scalars['String']>;
  attachment_filename?: Maybe<Scalars['String']>;
  attachment_preview_url?: Maybe<Scalars['String']>;
  attachment_size?: Maybe<Scalars['String']>;
  attachment_url?: Maybe<Scalars['String']>;
  content_body?: Maybe<Scalars['String']>;
  content_head?: Maybe<Scalars['String']>;
  content_type: Scalars['String'];
  dt_create: Scalars['String'];
  id: Scalars['ID'];
  object_date?: Maybe<Scalars['String']>;
  object_id: Scalars['ID'];
  object_image?: Maybe<Scalars['String']>;
  object_location?: Maybe<Scalars['String']>;
  object_title?: Maybe<Scalars['String']>;
  object_type: Scalars['String'];
  object_url: Scalars['String'];
  pos: Scalars['Int'];
  subscribed: Scalars['Boolean'];
};

/** NewsFeedItemObject type definition */
export type NewsFeedItemObject = {
  __typename?: 'NewsFeedItemObject';
  service_user_id: Scalars['ID'];
  token: Scalars['String'];
};

/** NodeError type definition */
export type NodeError = NodeInterface & {
  __typename?: 'NodeError';
  dt_create?: Maybe<Scalars['DateTimeType']>;
  errors?: Maybe<Array<Maybe<NodeErrorError>>>;
  id: Scalars['ID'];
  request?: Maybe<Scalars['JSON']>;
  session?: Maybe<Scalars['JSON']>;
  table: Scalars['String'];
};

/** NodeErrorError type definition */
export type NodeErrorError = {
  __typename?: 'NodeErrorError';
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stacktrace?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type NodeInterface = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The name of the table in database */
  table: Scalars['String'];
};

/** Определяет имена сервисов для авторизации по протоколу OAuth. */
export enum OAuthServiceNameEnum {
  /** Facebook */
  Fb = 'fb',
  /** VKontakte */
  Vk = 'vk'
}

export type OrderBy = {
  direction: OrderByTypeEnum;
  field: Scalars['String'];
};

export enum OrderByTypeEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export enum OrgSortByEnum {
  DisplayName = 'display_name',
  ProtocolName = 'protocol_name',
  ShortTitle = 'short_title',
  Title = 'title'
}

export enum OrgTypeEnum {
  Federation = 'federation',
  Other = 'other',
  School = 'school',
  Service = 'service',
  Society = 'society'
}

/** Organization type definition */
export type Organization = NodeInterface & {
  __typename?: 'Organization';
  accreditation?: Maybe<OrganizationAccreditation>;
  /** @deprecated Address was splitted to address and address_legal in according with organization/federation form scheme. See "info" field. */
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Avatar>;
  background?: Maybe<Avatar>;
  calendars?: Maybe<Array<Maybe<Calendar>>>;
  child_org_count?: Maybe<Scalars['Int']>;
  /** @deprecated Now city is a part of "info" field in according with organization/federation form scheme. */
  city?: Maybe<City>;
  /** @deprecated Now contingent is a part of "info" field in according with organization/federation form scheme. */
  contingent?: Maybe<Array<Maybe<OrganizationContingentEnum>>>;
  count?: Maybe<OrganizationCounts>;
  country?: Maybe<Country>;
  /** @deprecated Now creator is a part of "info" field in according with organization/federation form scheme. */
  creator?: Maybe<Person>;
  current_publication_event?: Maybe<OrganizationPublicationEvent>;
  description?: Maybe<Scalars['String']>;
  /** @deprecated Now diciplines is a part of "info" field in according with organization/federation form scheme. */
  diciplines?: Maybe<Array<Maybe<OrganizationDiciplinesEnum>>>;
  display_name?: Maybe<Scalars['String']>;
  documents?: Maybe<OrganizationDocuments>;
  dt_foundation?: Maybe<Scalars['DateType']>;
  /** @deprecated Now egrul_file is a part of "documents" field in according with organization/federation form scheme. */
  egrul_file?: Maybe<FileType>;
  /** @deprecated Now email is a part of "info" field in according with organization/federation form scheme. */
  email?: Maybe<Scalars['String']>;
  executive?: Maybe<OrganizationExecutive>;
  /** @deprecated Now extra is a part of "info" field in according with organization/federation form scheme. */
  extra?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  info?: Maybe<OrganizationInfo>;
  is_closed?: Maybe<Scalars['String']>;
  is_in_my_calendar: Scalars['Boolean'];
  is_responsible: Scalars['Boolean'];
  /** true если статус организации not_in_registry. Ы будущем условия могут усложняться */
  is_restricted?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  leader?: Maybe<Scalars['String']>;
  longtitude?: Maybe<Scalars['Float']>;
  org_type?: Maybe<Scalars['String']>;
  parent_organization1?: Maybe<Organization>;
  person_id?: Maybe<Scalars['String']>;
  /** @deprecated Now phone is a part of "info" field in according with organization/federation form scheme. */
  phone?: Maybe<Scalars['String']>;
  /** Название организации для протокола */
  protocol_name?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
  /** @deprecated Now registration_file is a part of "documents" field in according with organization/federation form scheme. */
  registration_file?: Maybe<FileType>;
  requisites?: Maybe<OrganizationRequisites>;
  /** @deprecated Now responsable_contact is a part of "info" field in according with organization/federation form scheme. */
  responsable_contact?: Maybe<Scalars['String']>;
  /** @deprecated Now responsable_position is a part of "info" field in according with organization/federation form scheme. */
  responsable_position?: Maybe<Scalars['String']>;
  revise_state?: Maybe<Scalars['String']>;
  school_id?: Maybe<Scalars['String']>;
  short_title?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['Int']>;
  /** @deprecated Now statute_file is a part of "documents" field in according with organization/federation form scheme. */
  statute_file?: Maybe<FileType>;
  table: Scalars['String'];
  team_squad_actualization?: Maybe<Scalars['Boolean']>;
  team_squad_years?: Maybe<Array<Maybe<Scalars['Int']>>>;
  title?: Maybe<Scalars['String']>;
  type_school?: Maybe<Scalars['String']>;
  /** @deprecated use field revise_state instead */
  verification_status?: Maybe<Scalars['String']>;
};

/** OrganizationAccreditation type definition */
export type OrganizationAccreditation = {
  __typename?: 'OrganizationAccreditation';
  dt_end?: Maybe<Scalars['DateType']>;
  dt_start?: Maybe<Scalars['DateType']>;
  has_accreditation?: Maybe<Scalars['Boolean']>;
  number?: Maybe<Scalars['String']>;
};

/** OrganizationAlerts type definition */
export type OrganizationAlerts = {
  __typename?: 'OrganizationAlerts';
  moderation_organizations: Scalars['Int'];
  my_organizations: Scalars['Int'];
  total: Scalars['Int'];
};

/** OrganizationConnection type definition */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  edges?: Maybe<Array<Maybe<Organization>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum OrganizationContingentEnum {
  Adults = 'adults',
  Athletes = 'athletes',
  Boys = 'boys',
  Girls = 'girls',
  Lover = 'lover'
}

/** OrganizationCounts type definition */
export type OrganizationCounts = {
  __typename?: 'OrganizationCounts';
  athlete_count?: Maybe<Scalars['Int']>;
  coach_count?: Maybe<Scalars['Int']>;
};

export enum OrganizationDiciplinesEnum {
  Collective = 'collective',
  Dance = 'dance',
  Pair = 'pair',
  Single = 'single',
  Synchronous = 'synchronous'
}

/** OrganizationDocuments type definition */
export type OrganizationDocuments = {
  __typename?: 'OrganizationDocuments';
  accreditation_file?: Maybe<FileType>;
  contract_file?: Maybe<FileType>;
  egrul_file?: Maybe<FileType>;
  protocol_file?: Maybe<FileType>;
  registration_file?: Maybe<FileType>;
  regulations_file?: Maybe<FileType>;
  statute_accept_file?: Maybe<FileType>;
  statute_file?: Maybe<FileType>;
  tin_file?: Maybe<FileType>;
};

/** OrganizationExecutive type definition */
export type OrganizationExecutive = {
  __typename?: 'OrganizationExecutive';
  authority?: Maybe<Scalars['String']>;
  exec_chief_email?: Maybe<Scalars['String']>;
  exec_chief_name?: Maybe<Scalars['String']>;
  exec_chief_phone?: Maybe<Scalars['String']>;
};

/** OrganizationFederationRG_Input type definition */
export type OrganizationFederationRg_Input = {
  accreditation?: InputMaybe<OrganizationInputAccreditation>;
  display_name: Scalars['String'];
  documents: OrganizationFederationRg_InputDocuments;
  dt_foundation?: InputMaybe<Scalars['DateType']>;
  executive?: InputMaybe<OrganizationFederationRg_InputExecutive>;
  id?: InputMaybe<Scalars['ID']>;
  info: OrganizationFederationRg_InputInfo;
  org_type?: InputMaybe<OrganizationOrgtypesEnum>;
  parent_organization1: ParentOrganizationInput;
  protocol_name: Scalars['String'];
  requisites?: InputMaybe<OrganizationFederationRg_InputRequisites>;
  short_title?: InputMaybe<Scalars['String']>;
  sport_id: Scalars['Int'];
  title: Scalars['String'];
};

/** OrganizationFederationRG_InputDocuments type definition */
export type OrganizationFederationRg_InputDocuments = {
  accreditation_file?: InputMaybe<FileInfoInput>;
  contract_file?: InputMaybe<FileInfoInput>;
  egrul_file?: InputMaybe<FileInfoInput>;
  protocol_file?: InputMaybe<FileInfoInput>;
  registration_file?: InputMaybe<FileInfoInput>;
  regulations_file?: InputMaybe<FileInfoInput>;
  statute_accept_file?: InputMaybe<FileInfoInput>;
  statute_file?: InputMaybe<FileInfoInput>;
  tin_file?: InputMaybe<FileInfoInput>;
};

/** OrganizationFederationRG_InputExecutive type definition */
export type OrganizationFederationRg_InputExecutive = {
  authority?: InputMaybe<Scalars['String']>;
  exec_chief_email?: InputMaybe<Scalars['String']>;
  exec_chief_name?: InputMaybe<Scalars['String']>;
  exec_chief_phone?: InputMaybe<Scalars['String']>;
};

/** OrganizationFederationRG_InputInfo type definition */
export type OrganizationFederationRg_InputInfo = {
  address?: InputMaybe<Scalars['String']>;
  address_legal?: InputMaybe<Scalars['String']>;
  city: CityInput;
  contingent?: InputMaybe<Array<InputMaybe<OrganizationContingentEnum>>>;
  creator: PersonShortInput;
  current_publication_event?: InputMaybe<OrganizationPublicationEventInput>;
  diciplines?: InputMaybe<Array<InputMaybe<OrganizationDiciplinesEnum>>>;
  dt_entry?: InputMaybe<Scalars['DateType']>;
  email?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  press_secretary?: InputMaybe<Scalars['String']>;
  press_secretary_phone?: InputMaybe<Scalars['String']>;
  responsable_contact?: InputMaybe<Scalars['String']>;
  responsable_position?: InputMaybe<Scalars['String']>;
  responsible_users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  site?: InputMaybe<Scalars['String']>;
};

/** OrganizationFederationRG_InputRequisites type definition */
export type OrganizationFederationRg_InputRequisites = {
  chief: ChiefPersonInput;
  chief_phone?: InputMaybe<Scalars['String']>;
  chief_position?: InputMaybe<Scalars['String']>;
  iec?: InputMaybe<Scalars['String']>;
  psrn?: InputMaybe<Scalars['String']>;
  tin?: InputMaybe<Scalars['String']>;
};

/** OrganizationForLists type definition */
export type OrganizationForLists = {
  __typename?: 'OrganizationForLists';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  leader?: Maybe<Scalars['String']>;
  org_type?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  protocol_name?: Maybe<Scalars['String']>;
  region?: Maybe<Region>;
  short_title?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['String']>;
  type_school?: Maybe<Scalars['String']>;
};

/** OrganizationInfo type definition */
export type OrganizationInfo = {
  __typename?: 'OrganizationInfo';
  address?: Maybe<Scalars['String']>;
  address_legal?: Maybe<Scalars['String']>;
  city?: Maybe<City>;
  contingent?: Maybe<Array<Maybe<OrganizationContingentEnum>>>;
  creator?: Maybe<Person>;
  current_publication_event?: Maybe<OrganizationPublicationEvent>;
  diciplines?: Maybe<Array<Maybe<OrganizationDiciplinesEnum>>>;
  dt_entry?: Maybe<Scalars['DateType']>;
  email?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  press_secretary?: Maybe<Scalars['String']>;
  press_secretary_phone?: Maybe<Scalars['String']>;
  responsable_contact?: Maybe<Scalars['String']>;
  responsable_position?: Maybe<Scalars['String']>;
  responsible_users?: Maybe<Array<Maybe<Auser>>>;
  site?: Maybe<Scalars['String']>;
};

/** OrganizationInput type definition */
export type OrganizationInput = {
  display_name: Scalars['String'];
  documents: OrganizationInputDocuments;
  dt_foundation?: InputMaybe<Scalars['DateType']>;
  id?: InputMaybe<Scalars['ID']>;
  info: OrganizationInputInfo;
  org_type?: InputMaybe<OrganizationOrgtypesEnum>;
  parent_organization1: ParentOrganizationInput;
  protocol_name: Scalars['String'];
  short_title?: InputMaybe<Scalars['String']>;
  sport_id: Scalars['Int'];
  title: Scalars['String'];
};

/** OrganizationInputAccreditation type definition */
export type OrganizationInputAccreditation = {
  dt_end?: InputMaybe<Scalars['DateType']>;
  dt_start?: InputMaybe<Scalars['DateType']>;
  has_accreditation?: InputMaybe<Scalars['Boolean']>;
  number?: InputMaybe<Scalars['String']>;
};

/** OrganizationInputDocuments type definition */
export type OrganizationInputDocuments = {
  egrul_file?: InputMaybe<FileInfoInput>;
  registration_file?: InputMaybe<FileInfoInput>;
  statute_file?: InputMaybe<FileInfoInput>;
};

/** OrganizationInputInfo type definition */
export type OrganizationInputInfo = {
  address?: InputMaybe<Scalars['String']>;
  city: CityInput;
  contingent?: InputMaybe<Array<InputMaybe<OrganizationContingentEnum>>>;
  creator: PersonShortInput;
  current_publication_event?: InputMaybe<OrganizationPublicationEventInput>;
  diciplines?: InputMaybe<Array<InputMaybe<OrganizationDiciplinesEnum>>>;
  extra?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  responsable_contact?: InputMaybe<Scalars['String']>;
  responsable_position?: InputMaybe<Scalars['String']>;
  responsible_users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** OrganizationName type definition */
export type OrganizationName = {
  __typename?: 'OrganizationName';
  child_org_count?: Maybe<Scalars['Int']>;
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  protocol_name?: Maybe<Scalars['String']>;
  short_title?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export enum OrganizationOrgtypesEnum {
  Federation = 'federation',
  Other = 'other',
  School = 'school',
  Service = 'service',
  Society = 'society'
}

/** OrganizationPublicationEvent type definition */
export type OrganizationPublicationEvent = NodeInterface & {
  __typename?: 'OrganizationPublicationEvent';
  active?: Maybe<Scalars['Boolean']>;
  alert_to_moderator?: Maybe<Scalars['Boolean']>;
  alert_to_organizer?: Maybe<Scalars['Boolean']>;
  creator?: Maybe<Person>;
  creator_id?: Maybe<Scalars['Int']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  organization?: Maybe<Organization>;
  organization_id?: Maybe<Scalars['Int']>;
  short_title?: Maybe<Scalars['String']>;
  state?: Maybe<OrganizationPublicationEventStates>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  total_events_count?: Maybe<Scalars['Int']>;
};

/** OrganizationPublicationEventConnection type definition */
export type OrganizationPublicationEventConnection = {
  __typename?: 'OrganizationPublicationEventConnection';
  edges?: Maybe<Array<Maybe<OrganizationPublicationEvent>>>;
  total?: Maybe<Scalars['Int']>;
};

/** OrganizationPublicationEventInput type definition */
export type OrganizationPublicationEventInput = {
  message?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  state: OrganizationPublicationEventStates;
};

export enum OrganizationPublicationEventStates {
  Actualization = 'actualization',
  ActualizationCheck = 'actualization_check',
  ActualizationFailed = 'actualization_failed',
  Canceled = 'canceled',
  Created = 'created',
  Denied = 'denied',
  DoesNotExist = 'does_not_exist',
  InRegistry = 'in_registry',
  NotInRegistry = 'not_in_registry',
  WaitRevise = 'wait_revise'
}

/** OrganizationReportMedia type definition */
export type OrganizationReportMedia = {
  __typename?: 'OrganizationReportMedia';
  annual_activity_report?: Maybe<FileType>;
  developing_project?: Maybe<FileType>;
  events_info?: Maybe<FileType>;
  executive_authority_reference?: Maybe<FileType>;
  financial_source_reference?: Maybe<FileType>;
  id?: Maybe<Scalars['ID']>;
  members_info?: Maybe<FileType>;
  membership_payment_confirmation?: Maybe<FileType>;
  sponsor_list?: Maybe<FileType>;
  team_results_reference?: Maybe<FileType>;
};

/** OrganizationRequisites type definition */
export type OrganizationRequisites = {
  __typename?: 'OrganizationRequisites';
  chief?: Maybe<ChiefPerson>;
  chief_phone?: Maybe<Scalars['String']>;
  chief_position?: Maybe<Scalars['String']>;
  iec?: Maybe<Scalars['String']>;
  psrn?: Maybe<Scalars['String']>;
  tin?: Maybe<Scalars['String']>;
};

/** OrganizationStatistics type definition */
export type OrganizationStatistics = {
  __typename?: 'OrganizationStatistics';
  athlete_count: Scalars['Int'];
  coach_count: Scalars['Int'];
  school_count: Scalars['Int'];
};

/** ParentCalendar type definition */
export type ParentCalendar = {
  __typename?: 'ParentCalendar';
  parent_calendar_id: Scalars['ID'];
  parent_calendar_title: Scalars['String'];
  parent_organization_title: Scalars['String'];
};

/** ParentOrganizationInput type definition */
export type ParentOrganizationInput = {
  display_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  protocol_name?: InputMaybe<Scalars['String']>;
  short_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PaymentCommissionSettings = {
  __typename?: 'PaymentCommissionSettings';
  /** Комиссия за оплаты напрямую */
  commission_org_custom?: Maybe<Scalars['Float']>;
  /** Комиссия организатора в рублях за оплаты напрямую */
  commission_org_custom_fix?: Maybe<Scalars['Float']>;
  /** Комиссия для организатора в процентах */
  commission_org_system?: Maybe<Scalars['Float']>;
  /** комиссия для организатора в рублях */
  commission_org_system_fix?: Maybe<Scalars['Float']>;
  legalentity_id?: Maybe<Scalars['Int']>;
};

export type PaymentCommissionSettingsInput = {
  commission_org_custom?: InputMaybe<Scalars['Float']>;
  commission_org_custom_fix?: InputMaybe<Scalars['Float']>;
  commission_org_system?: InputMaybe<Scalars['Float']>;
  commission_org_system_fix?: InputMaybe<Scalars['Float']>;
};

/** SubscriptionConfig type definition */
export type PaymentConfig = {
  __typename?: 'PaymentConfig';
  commission_1?: Maybe<Scalars['Float']>;
  commission_2?: Maybe<Scalars['Float']>;
  counteragent_type?: Maybe<Scalars['String']>;
  dt_start?: Maybe<Scalars['String']>;
  id_payment_conf: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  published?: Maybe<Scalars['Boolean']>;
  season?: Maybe<Season>;
  table: Scalars['String'];
};

/** Данные для изменения записи в таблице "payment" */
export type PaymentDataInput = {
  additional_info?: InputMaybe<Scalars['String']>;
  amount_in_system?: InputMaybe<Scalars['Float']>;
  commission_in_system?: InputMaybe<Scalars['Float']>;
  pay_account_id?: InputMaybe<Scalars['String']>;
  payment_id: Scalars['Int'];
  status?: InputMaybe<Scalars['Int']>;
  without_commission_in_system?: InputMaybe<Scalars['Float']>;
};

/** Подробная информация об оплате заявки */
export type PaymentDetails = {
  __typename?: 'PaymentDetails';
  /** ИД платежа */
  id?: Maybe<Scalars['Int']>;
  /** Ссылка на виджет платежной системы */
  pay_widget_link?: Maybe<Scalars['String']>;
  /** Полная стоимость оплачиваемой суммы */
  total_amount?: Maybe<Scalars['Float']>;
  /** Полная стоимость оплачиваемой комисси */
  total_commission?: Maybe<Scalars['Float']>;
  /** Полная стоимость оплачиваемого стартового взноса */
  total_price?: Maybe<Scalars['Float']>;
};

/** Подробная информация об оплате заявки */
export type PaymentPart = {
  __typename?: 'PaymentPart';
  /** полная стоимость (с комиссией) */
  amount?: Maybe<Scalars['Float']>;
  /** сумма комиссии */
  commission?: Maybe<Scalars['Float']>;
  /** исходная стоимость (без комиссии) */
  price?: Maybe<Scalars['Float']>;
};

/** Оплачиваемая часть заявки */
export type PaymentPartInput = {
  amount: Scalars['Float'];
  commission: Scalars['Float'];
  price: Scalars['Float'];
};

/** Определяет возможные статусы оплаты заявок */
export enum PaymentStatusEnum {
  /** Оплачена полностью – заявка полностью оплачена */
  FullyPaid = 'fully_paid',
  /** переплата */
  OverPaid = 'over_paid',
  /** Оплачена частично – заявка оплачена частично */
  PartiallyPaid = 'partially_paid',
  /** Ожидает оплату – заявка не оплачена */
  Unpaid = 'unpaid'
}

/** Person type definition */
export type Person = NodeInterface & {
  __typename?: 'Person';
  allow_responsible_edit?: Maybe<Scalars['Boolean']>;
  auser_id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Avatar>;
  city?: Maybe<City>;
  city_id?: Maybe<Scalars['Int']>;
  /** информация о тренерской части персоны */
  coach?: Maybe<Coach>;
  country?: Maybe<Country>;
  /** направления в которых выступает спортсмен */
  discipline_title?: Maybe<Array<Maybe<PersonDisciplineTitle>>>;
  display_name?: Maybe<Scalars['String']>;
  dt_birthday?: Maybe<Scalars['DateType']>;
  email?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Error>>>;
  first_name?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender: Scalars['ID'];
  id: Scalars['ID'];
  is_verified?: Maybe<Scalars['String']>;
  judge?: Maybe<Array<Maybe<Judge>>>;
  last_name?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  /** информация о спортивной части персоны */
  sportsman?: Maybe<Sportsman>;
  table: Scalars['String'];
  team_squads?: Maybe<Array<Maybe<PersonTeamSquad>>>;
  united_person?: Maybe<Scalars['Int']>;
};


/** Person type definition */
export type PersonJudgeArgs = {
  sporttype_id?: InputMaybe<Scalars['Int']>;
};

/** PersonCoachInput type definition */
export type PersonCoachInput = {
  id?: InputMaybe<Scalars['ID']>;
  is_honored?: InputMaybe<Scalars['Boolean']>;
  organizations?: InputMaybe<Array<InputMaybe<PersonCoachOrganizationInput>>>;
};

/** PersonCoachOrganizationInput type definition */
export type PersonCoachOrganizationInput = {
  from_month?: InputMaybe<Scalars['MonthType']>;
  from_year?: InputMaybe<Scalars['YearType']>;
  non_active?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<ShortOrganizationInput>;
  to_month?: InputMaybe<Scalars['MonthType']>;
  to_year?: InputMaybe<Scalars['YearType']>;
};

/** PersonConnection type definition */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  edges?: Maybe<Array<Maybe<PersonForList>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** PersonForList type definition */
export type PersonDisciplineTitle = {
  __typename?: 'PersonDisciplineTitle';
  code?: Maybe<DisciplineTitleEnum>;
  person_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** PersonDoubleCouple type definition */
export type PersonDoubleCouple = {
  __typename?: 'PersonDoubleCouple';
  coincidence?: Maybe<Scalars['String']>;
  dt_update?: Maybe<Scalars['DateTimeType']>;
  id: Scalars['ID'];
  person1?: Maybe<PersonDoubleItem>;
  person2?: Maybe<PersonDoubleItem>;
  redactor?: Maybe<PersonDoubleRedactor>;
  state: PersonDoublesStateEnum;
};

/** PersonDoubleItem type definition */
export type PersonDoubleItem = {
  __typename?: 'PersonDoubleItem';
  dt_birthday?: Maybe<Scalars['DateType']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  patronymic?: Maybe<Scalars['String']>;
};

/** PersonDoubleRedactor type definition */
export type PersonDoubleRedactor = {
  __typename?: 'PersonDoubleRedactor';
  actual_name?: Maybe<Scalars['String']>;
  fi_actual_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_admin?: Maybe<Scalars['Boolean']>;
  is_moderator?: Maybe<Scalars['Boolean']>;
};

/** PersonDoublesConnection type definition */
export type PersonDoublesConnection = {
  __typename?: 'PersonDoublesConnection';
  edges?: Maybe<Array<Maybe<PersonDoubleCouple>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum PersonDoublesStateEnum {
  NotDouble = 'not_double',
  United = 'united',
  Waiting = 'waiting'
}

export type PersonFilterType = {
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  name?: InputMaybe<Scalars['String']>;
  only_adult?: InputMaybe<Scalars['Boolean']>;
};

/** PersonForList type definition */
export type PersonForList = NodeInterface & {
  __typename?: 'PersonForList';
  auser_id?: Maybe<Scalars['String']>;
  avatar?: Maybe<Avatar>;
  display_name?: Maybe<Scalars['String']>;
  dt_birthday?: Maybe<Scalars['DateType']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  last_name?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  organizations?: Maybe<Array<Maybe<OrganizationForLists>>>;
  patronymic?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** PersonFormInput type definition */
export type PersonFormInput = {
  coach?: InputMaybe<PersonCoachInput>;
  discipline_title?: InputMaybe<Array<InputMaybe<DisciplineTitleEnum>>>;
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
  sport_id: Scalars['ID'];
  sportsman?: InputMaybe<PersonSportsmanInput>;
};

/** Пол персоны */
export enum PersonGenderEnum {
  /** пол - женский */
  Female = 'female',
  /** пол - мужской */
  Male = 'male'
}

/** PersonShortDataInput type definition */
export type PersonShortDataInput = {
  display_name?: InputMaybe<Scalars['String']>;
  dt_birthday?: InputMaybe<Scalars['DateType']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
};

/** PersonShortInput type definition */
export type PersonShortInput = {
  auser_id?: InputMaybe<Scalars['Int']>;
  display_name?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: InputMaybe<Scalars['String']>;
  patronymic?: InputMaybe<Scalars['String']>;
};

export type PersonSportsmanCoachInput = {
  coach: PersonSportsmanCoachInputInner;
  from_month?: InputMaybe<Scalars['MonthType']>;
  from_year?: InputMaybe<Scalars['YearType']>;
  index_key?: InputMaybe<Scalars['Int']>;
  is_main?: InputMaybe<Scalars['Boolean']>;
  non_active?: InputMaybe<Scalars['Boolean']>;
  to_month?: InputMaybe<Scalars['MonthType']>;
  to_year?: InputMaybe<Scalars['YearType']>;
};

export type PersonSportsmanCoachInputInner = {
  id?: InputMaybe<Scalars['ID']>;
  person?: InputMaybe<PersonShortDataInput>;
};

/** PersonSportsmanInput type definition */
export type PersonSportsmanInput = {
  athlete_agreement_date?: InputMaybe<Scalars['DateType']>;
  athlete_rank_assign_date?: InputMaybe<Scalars['DateType']>;
  id?: InputMaybe<Scalars['ID']>;
  id_ias_sport?: InputMaybe<Scalars['String']>;
  insurance_exp_date?: InputMaybe<Scalars['DateType']>;
  medcert_exp_date?: InputMaybe<Scalars['DateType']>;
  organizations?: InputMaybe<Array<InputMaybe<PersonSportsmanOrganizationItemInput>>>;
  rank: Scalars['Int'];
  rank_tests?: InputMaybe<Array<InputMaybe<AthleteRankTestEnum>>>;
};

/** PersonSportsmanOrganizationItemInput type definition */
export type PersonSportsmanOrganizationItemInput = {
  coaches?: InputMaybe<Array<InputMaybe<PersonSportsmanCoachInput>>>;
  organization?: InputMaybe<ShortOrganizationInput>;
};

/** PersonTeamSquad type definition */
export type PersonTeamSquad = {
  __typename?: 'PersonTeamSquad';
  id: Scalars['ID'];
  organization_id: Scalars['ID'];
  squad_title: Scalars['String'];
  status: Scalars['String'];
  team_title: Scalars['String'];
  year_active_from: Scalars['Int'];
  year_active_to?: Maybe<Scalars['Int']>;
};

/** Postwall type definition */
export type Postwall = NodeInterface & {
  __typename?: 'Postwall';
  author_actual_name?: Maybe<Scalars['String']>;
  author_id?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Avatar>;
  content?: Maybe<Scalars['String']>;
  count_children?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  dt_deletion?: Maybe<Scalars['DateTimeType']>;
  dt_fixing?: Maybe<Scalars['DateTimeType']>;
  dt_update?: Maybe<Scalars['DateTimeType']>;
  entity?: Maybe<PostwallEntity>;
  entity_id?: Maybe<Scalars['Int']>;
  fixed?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  mailing8_planned_count?: Maybe<Scalars['Int']>;
  mailing_option?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
  photo?: Maybe<FileType>;
  published?: Maybe<Scalars['Boolean']>;
  remover_id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  sport_id?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
  thread_id?: Maybe<Scalars['Int']>;
};

/** PostwallConnection type definition */
export type PostwallConnection = {
  __typename?: 'PostwallConnection';
  edges?: Maybe<Array<Maybe<Postwall>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export enum PostwallEntity {
  Event = 'event',
  Organization = 'organization',
  Person = 'person',
  Sportvokrug = 'sportvokrug'
}

export type PostwallInput = {
  content: Scalars['String'];
  deleted?: InputMaybe<Scalars['Boolean']>;
  entity: PostwallEntity;
  entity_id?: InputMaybe<Scalars['Int']>;
  fixed: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  mailing_option?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<FileInfoInput>;
  published: Scalars['Boolean'];
  sport_id?: InputMaybe<Scalars['Int']>;
};

/** Query interface */
export type Query = {
  __typename?: 'Query';
  accommodationsForPayment?: Maybe<EventAccomodationsConnection>;
  advManagerInList: AdvConnection;
  advManagerInListItem?: Maybe<Adv>;
  appUserAlerts: OrganizationAlerts;
  applicationPaymentInfoByPaymentId?: Maybe<Array<Maybe<ApplicationPaymentInfoByPaymentId>>>;
  applicationsForPayment?: Maybe<EventApplicationsConnection>;
  ausers: AuserConnection;
  calendars?: Maybe<CalendarConnection>;
  checkToken?: Maybe<UserInfo>;
  checkWebJudgingUid?: Maybe<Scalars['Boolean']>;
  cities?: Maybe<Array<Maybe<City>>>;
  coachSportsmans?: Maybe<Array<Maybe<Sportsman>>>;
  coaches?: Maybe<CoachConnection>;
  coachesByOrganization?: Maybe<CoachByOrganizationConnection>;
  countries?: Maybe<Array<Maybe<Country>>>;
  disciplines: DisciplineConnection;
  eventAccomodationScheme?: Maybe<EventAccomodationScheme>;
  eventAccomodatons?: Maybe<EventAccomodationsConnection>;
  eventAdvertising?: Maybe<Array<Maybe<EventAdvertising>>>;
  eventApplicationOrganizations?: Maybe<OrganizationConnection>;
  eventApplicationPersons?: Maybe<ApplicationPersonsConnection>;
  eventApplications?: Maybe<EventApplicationsConnection>;
  eventApplicationsByCategory?: Maybe<EventApplicationByCategoryConnection>;
  eventCompetitorPhotoGroups?: Maybe<EventCompetitorGroupPhotoConnection>;
  eventCompetitorPhotos?: Maybe<EventCompetitorPhotoConnection>;
  eventCompetitorScoresForInterfaceCY?: Maybe<EventCompetitorScoresInterfaceCy>;
  eventCompetitorScoresForInterfaceFS?: Maybe<EventCompetitorScoresInterfaceFs>;
  eventCompetitorScoresForInterfaceRG?: Maybe<EventCompetitorScoresInterfaceRg>;
  eventCompetitorVideoGroups?: Maybe<EventVideoGroupsConnection>;
  eventOlympicoDocuments?: Maybe<DocumentOlympico>;
  eventPersonResultsApparatusScoresRG?: Maybe<Array<Maybe<EventResultApparatusScoresRg>>>;
  eventPersonResultsApparatusesRG?: Maybe<Array<Maybe<EventResultApparatusRg>>>;
  eventPersonResultsByCategoryCY?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsByCategoryFS?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsByCategoryRG?: Maybe<EventPersonResultsByCategoryConnection>;
  eventPersonResultsProgramScoresFS?: Maybe<Array<Maybe<EventResultProgramScoresFs>>>;
  eventPersonResultsProgramsFS?: Maybe<Array<Maybe<EventResultProgramFs>>>;
  eventResultBySportsmanCY?: Maybe<Array<Maybe<EventCompetitorScoreCy>>>;
  eventResultBySportsmanFS?: Maybe<Array<Maybe<EventCompetitorScoreFs>>>;
  eventResultBySportsmanRG?: Maybe<EventCompetitorScoreCardRg>;
  eventResultsBycategoryCY?: Maybe<EventResultByCategoryConnection>;
  eventResultsBycategoryFS?: Maybe<EventResultByCategoryConnection>;
  eventResultsBycategoryRG?: Maybe<EventResultByCategoryConnection>;
  eventResultsQueue?: Maybe<Array<Maybe<EventCompetitorQueueStatus>>>;
  eventVideos?: Maybe<Array<Maybe<EventVideo>>>;
  events?: Maybe<EventConnection>;
  federationTeamSquad?: Maybe<FederationTeamSquad>;
  federationTeamSquadMember?: Maybe<FederationTeamSquadMember>;
  federationTeamSquads?: Maybe<FederationTeamSquads>;
  formScheme?: Maybe<Array<Maybe<FormSchemeField>>>;
  fsCommissionAccessLevel?: Maybe<FsCommissionAccessLevelEnum>;
  fsCommissionSeasons?: Maybe<Array<Maybe<FsInspectionCommissionSeason>>>;
  geocoder: Geocoder;
  geocoder_load_organizations?: Maybe<Scalars['Boolean']>;
  getSportsman?: Maybe<Sportsman>;
  getUserInfo?: Maybe<UserInfo>;
  getUserSportType?: Maybe<Array<Maybe<SportType>>>;
  isFfkmResponsible?: Maybe<Scalars['Boolean']>;
  judgingSystemExerciseRG?: Maybe<JudgingSystemExerciseRg>;
  legalentities?: Maybe<LegalentityConnection>;
  mailingQueueList: MailingQueueConnection;
  media?: Maybe<Media>;
  mobileNewsFeed?: Maybe<Array<Maybe<NewsFeedItem>>>;
  mobileSubscription?: Maybe<MobileAppSubscription>;
  myEventCalendars?: Maybe<Array<Maybe<MyEventCalendar>>>;
  myEventNewAppsCount?: Maybe<Scalars['Int']>;
  myEventRequests?: Maybe<MyEventRequestConnection>;
  myEvents?: Maybe<MyEventConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<NodeInterface>;
  nodeError?: Maybe<NodeError>;
  /** Fetches objects given their IDs */
  nodes: Array<Maybe<NodeInterface>>;
  organizationCalendars?: Maybe<CalendarConnection>;
  organizationPublicationEventHistory?: Maybe<Array<Maybe<OrganizationPublicationEvent>>>;
  organizationPublicationEvents?: Maybe<OrganizationPublicationEventConnection>;
  organizationReportYears?: Maybe<Array<Maybe<Scalars['Int']>>>;
  organizationReportsMedia?: Maybe<OrganizationReportMedia>;
  organizationStatistics?: Maybe<OrganizationStatistics>;
  organizations?: Maybe<OrganizationConnection>;
  parentCalendars?: Maybe<Array<Maybe<ParentCalendar>>>;
  paymentConfig?: Maybe<Array<Maybe<PaymentConfig>>>;
  personDoubles: PersonDoublesConnection;
  personEvents?: Maybe<Array<Maybe<SportsmanApplication>>>;
  persons?: Maybe<PersonConnection>;
  postwalls?: Maybe<PostwallConnection>;
  programs?: Maybe<Array<Maybe<SportProgram>>>;
  ranks: RankConnection;
  refereeingSystemVersion?: Maybe<RefereeingSystemVersion>;
  regions?: Maybe<Array<Maybe<Region>>>;
  rgEventRulesEdition?: Maybe<EventRgJudgingRulesEditionEnum>;
  saveEventCompetitorQueueStatus?: Maybe<EventCompetitorQueueStatus>;
  scoreNames?: Maybe<Array<Maybe<ScoreName>>>;
  seasons?: Maybe<SportSeasonConnection>;
  siteSettings?: Maybe<Array<Maybe<SiteSettings>>>;
  sportRank?: Maybe<Array<Maybe<SportRank>>>;
  sportType?: Maybe<SportType>;
  sportTypes: SportTypeConnection;
  sportsmanEventCompetitorPhotoGroups?: Maybe<SportsmanEventCompetitorGroupPhotoConnection>;
  sportsmanEventResults?: Maybe<Array<Maybe<EventCategoryResults>>>;
  sportsmanEvents?: Maybe<Array<Maybe<SportsmanApplication>>>;
  sportsmans?: Maybe<SportsmanConnection>;
  sportsmansOrganizationFlatList?: Maybe<SportsmanConnection>;
  sportsmenForInspectionCommission?: Maybe<SportsmanConnection>;
  telegramUserSubscriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  uploadAthletesXlsxQueue?: Maybe<XlsxQueue>;
  uploadAthletesXlsxTemplate?: Maybe<FileType>;
  userFederations?: Maybe<Array<Maybe<UserFederation>>>;
  videostandById?: Maybe<Videostand>;
  videostandBySid?: Maybe<Videostand>;
  videostandEvents?: Maybe<VideostandEvents>;
  videostandVideo?: Maybe<Scalars['JSON']>;
  videostands?: Maybe<Array<Maybe<Videostand>>>;
  webjudgingScoresRG?: Maybe<Array<Maybe<WebJudgeScoreRg>>>;
};


/** Query interface */
export type QueryAccommodationsForPaymentArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<ApplicationListFilter>;
};


/** Query interface */
export type QueryAdvManagerInListArgs = {
  adv_block?: InputMaybe<AdvBlockEnum>;
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<AdvListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  random?: InputMaybe<Scalars['Boolean']>;
  show_off_status?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryAdvManagerInListItemArgs = {
  adv_block?: InputMaybe<AdvBlockEnum>;
  id: Scalars['Int'];
  show_off_status?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryAppUserAlertsArgs = {
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryApplicationPaymentInfoByPaymentIdArgs = {
  payment_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryApplicationsForPaymentArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<ApplicationListFilter>;
};


/** Query interface */
export type QueryAusersArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QueryCalendarsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<SearchStringFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryCheckTokenArgs = {
  token: Scalars['String'];
};


/** Query interface */
export type QueryCheckWebJudgingUidArgs = {
  event_id: Scalars['ID'];
  judging_uid: Scalars['String'];
};


/** Query interface */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryCoachSportsmansArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryCoachesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CoachListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']>;
  only_past_in_org?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QueryCoachesByOrganizationArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<CoachListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryDisciplinesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryEventAccomodationSchemeArgs = {
  event_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventAccomodatonsArgs = {
  app_payment_status?: InputMaybe<Array<InputMaybe<PaymentStatusEnum>>>;
  app_status?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
  event_id: Scalars['ID'];
  filter?: InputMaybe<AccomodationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryEventAdvertisingArgs = {
  event_id?: InputMaybe<Scalars['Int']>;
  place: EventAdvertisingPlaceEnum;
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryEventApplicationOrganizationsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  event_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QueryEventApplicationPersonsArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<ApplicationPersonsFilter>;
  skip_statuses?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
};


/** Query interface */
export type QueryEventApplicationsArgs = {
  always_show_applications?: InputMaybe<Scalars['Boolean']>;
  app_payment_status?: InputMaybe<Array<InputMaybe<PaymentStatusEnum>>>;
  app_status?: InputMaybe<Array<InputMaybe<ApplicationStatusEnum>>>;
  event_id: Scalars['ID'];
  filter?: InputMaybe<ApplicationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
  show_empty_categories?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryEventApplicationsByCategoryArgs = {
  always_show_applications?: InputMaybe<Scalars['Boolean']>;
  app_status?: InputMaybe<ApplicationStatusEnum>;
  event_id: Scalars['ID'];
  filter?: InputMaybe<ApplicationListFilter>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
  show_empty_categories?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryEventCompetitorPhotoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  event_id: Scalars['ID'];
  filter?: InputMaybe<EventCompetitorPhotoFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryEventCompetitorPhotosArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  group_hash: Scalars['String'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceCyArgs = {
  competitor_id: Scalars['String'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceFsArgs = {
  competitor_id: Scalars['String'];
};


/** Query interface */
export type QueryEventCompetitorScoresForInterfaceRgArgs = {
  competitor_id: Scalars['String'];
  event_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventCompetitorVideoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sportsman_id: Scalars['Int'];
};


/** Query interface */
export type QueryEventOlympicoDocumentsArgs = {
  event_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventPersonResultsApparatusScoresRgArgs = {
  apparatus?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sportsman_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventPersonResultsApparatusesRgArgs = {
  sportsman_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryCyArgs = {
  event_id: Scalars['Int'];
  person_id: Scalars['Int'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryFsArgs = {
  event_id: Scalars['Int'];
  person_id: Scalars['Int'];
};


/** Query interface */
export type QueryEventPersonResultsByCategoryRgArgs = {
  event_id: Scalars['ID'];
  person_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventPersonResultsProgramScoresFsArgs = {
  dates?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  program?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sportsman_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventPersonResultsProgramsFsArgs = {
  sportsman_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventResultBySportsmanCyArgs = {
  competitor_id: Scalars['Int'];
};


/** Query interface */
export type QueryEventResultBySportsmanFsArgs = {
  competitor_id: Scalars['Int'];
};


/** Query interface */
export type QueryEventResultBySportsmanRgArgs = {
  apparatus: Scalars['String'];
  competitor_id: Scalars['String'];
  rg_rules_edition: EventRgJudgingRulesEditionEnum;
};


/** Query interface */
export type QueryEventResultsBycategoryCyArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean'];
};


/** Query interface */
export type QueryEventResultsBycategoryFsArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean'];
};


/** Query interface */
export type QueryEventResultsBycategoryRgArgs = {
  event_id: Scalars['ID'];
  filter?: InputMaybe<SearchStringFilter>;
  showEmptyCategories: Scalars['Boolean'];
};


/** Query interface */
export type QueryEventResultsQueueArgs = {
  ids: Array<InputMaybe<Scalars['Int']>>;
};


/** Query interface */
export type QueryEventVideosArgs = {
  event_id: Scalars['ID'];
};


/** Query interface */
export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  calendar_id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<EventsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryFederationTeamSquadArgs = {
  id: Scalars['ID'];
};


/** Query interface */
export type QueryFederationTeamSquadMemberArgs = {
  id: Scalars['ID'];
};


/** Query interface */
export type QueryFederationTeamSquadsArgs = {
  filter?: InputMaybe<TeamSquadsFilter>;
  sort_order?: InputMaybe<OrderByTypeEnum>;
  sort_type?: InputMaybe<TeamSquadsSortTypeEnum>;
};


/** Query interface */
export type QueryFormSchemeArgs = {
  form: FormSchemeEnum;
  sport_id: Scalars['Int'];
};


/** Query interface */
export type QueryFsCommissionAccessLevelArgs = {
  context: FsCommissionContextEnum;
  object_id: Scalars['ID'];
};


/** Query interface */
export type QueryFsCommissionSeasonsArgs = {
  organization_id?: InputMaybe<Scalars['ID']>;
};


/** Query interface */
export type QueryGeocoderArgs = {
  geocode?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QueryGetSportsmanArgs = {
  id?: InputMaybe<Scalars['Int']>;
  person_id?: InputMaybe<Scalars['Int']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryGetUserInfoArgs = {
  sid: Scalars['String'];
  uid: Scalars['String'];
};


/** Query interface */
export type QueryJudgingSystemExerciseRgArgs = {
  event_id: Scalars['ID'];
  judge_team: Scalars['Int'];
  judge_type: RgJudgeTypeEnum;
};


/** Query interface */
export type QueryLegalentitiesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  calendar_id?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryMailingQueueListArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<MailingQueueListFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryMediaArgs = {
  owner_id?: InputMaybe<Scalars['Int']>;
  owner_type?: InputMaybe<MediaOwnerTypeEnum>;
  parent_type?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<MediaActionTypeEnum>;
};


/** Query interface */
export type QueryMobileNewsFeedArgs = {
  feed_type: Scalars['String'];
  object_id?: InputMaybe<Scalars['Int']>;
  object_type?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  page_add?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryMyEventRequestsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventToParentCalendarRequestsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort_key?: InputMaybe<Scalars['String']>;
  sort_order?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['ID']>;
};


/** Query interface */
export type QueryMyEventsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventsListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  sort_key?: InputMaybe<Scalars['String']>;
  sort_order?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['ID']>;
};


/** Query interface */
export type QueryNodeArgs = {
  filter?: InputMaybe<NodeFilter>;
  id: Scalars['ID'];
  table: Scalars['String'];
};


/** Query interface */
export type QueryNodeErrorArgs = {
  id: Scalars['Int'];
};


/** Query interface */
export type QueryNodesArgs = {
  filter?: InputMaybe<NodeFilter>;
  ids: Array<Scalars['ID']>;
  table: Scalars['String'];
};


/** Query interface */
export type QueryOrganizationCalendarsArgs = {
  organization_id: Scalars['ID'];
};


/** Query interface */
export type QueryOrganizationPublicationEventHistoryArgs = {
  after?: InputMaybe<Scalars['Int']>;
  event_id?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  organization_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryOrganizationPublicationEventsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  archive?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  parentless?: InputMaybe<Scalars['Boolean']>;
  sport_id: Scalars['Int'];
};


/** Query interface */
export type QueryOrganizationReportsMediaArgs = {
  organization_id?: InputMaybe<Scalars['ID']>;
  report_year?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryOrganizationStatisticsArgs = {
  organization_id: Scalars['ID'];
};


/** Query interface */
export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  coach_id?: InputMaybe<Scalars['ID']>;
  exclude_organizations?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  exclude_organizations_and_its_subordinates?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  exclude_revise_state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filter_fields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  only_active?: InputMaybe<Scalars['Boolean']>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
  org_type?: InputMaybe<Array<InputMaybe<OrgTypeEnum>>>;
  page?: InputMaybe<Scalars['Int']>;
  parent_organization1?: InputMaybe<Scalars['ID']>;
  region_id?: InputMaybe<Scalars['ID']>;
  revise_state?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sort_by?: InputMaybe<OrgSortByEnum>;
  sort_order?: InputMaybe<Scalars['String']>;
  sporttype_id: Scalars['Int'];
  subordinate_only?: InputMaybe<Scalars['Boolean']>;
};


/** Query interface */
export type QueryParentCalendarsArgs = {
  calendar_id: Scalars['ID'];
};


/** Query interface */
export type QueryPersonDoublesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sport_id?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Array<InputMaybe<PersonDoublesStateEnum>>>;
};


/** Query interface */
export type QueryPersonEventsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventPersonEventsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  person_id: Scalars['ID'];
};


/** Query interface */
export type QueryPersonsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<PersonFilterType>;
  first?: InputMaybe<Scalars['Int']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryPostwallsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  entity?: InputMaybe<Array<InputMaybe<PostwallEntity>>>;
  entity_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  parent_id: Scalars['ID'];
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QueryProgramsArgs = {
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QueryRanksArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QueryRefereeingSystemVersionArgs = {
  federation_filter: Scalars['String'];
};


/** Query interface */
export type QueryRgEventRulesEditionArgs = {
  event_id: Scalars['ID'];
};


/** Query interface */
export type QuerySaveEventCompetitorQueueStatusArgs = {
  queue_id: Scalars['Int'];
};


/** Query interface */
export type QueryScoreNamesArgs = {
  sport_id: Scalars['Int'];
};


/** Query interface */
export type QuerySeasonsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QuerySiteSettingsArgs = {
  title?: InputMaybe<Array<InputMaybe<SiteSettingsEnum>>>;
};


/** Query interface */
export type QuerySportRankArgs = {
  sport_id?: InputMaybe<Scalars['Int']>;
};


/** Query interface */
export type QuerySportTypeArgs = {
  federation_filter?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['ID']>;
};


/** Query interface */
export type QuerySportTypesArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QuerySportsmanEventCompetitorPhotoGroupsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sportsman_id: Scalars['ID'];
};


/** Query interface */
export type QuerySportsmanEventResultsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  event_id: Scalars['Int'];
  first?: InputMaybe<Scalars['Int']>;
  sportsman_id: Scalars['Int'];
};


/** Query interface */
export type QuerySportsmanEventsArgs = {
  after?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  sportsman_id: Scalars['Int'];
};


/** Query interface */
export type QuerySportsmansArgs = {
  after?: InputMaybe<Scalars['Int']>;
  coach_id?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  is_widget?: InputMaybe<Scalars['Boolean']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
  only_past_in_org?: InputMaybe<Scalars['Boolean']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  parent_organization1?: InputMaybe<Scalars['Int']>;
  sort_order?: InputMaybe<Scalars['String']>;
  sort_type?: InputMaybe<Scalars['String']>;
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QuerySportsmansOrganizationFlatListArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  only_active?: InputMaybe<Scalars['Boolean']>;
  only_mine?: InputMaybe<Scalars['Boolean']>;
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QuerySportsmenForInspectionCommissionArgs = {
  after?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<SportsmanListFilter>;
  first?: InputMaybe<Scalars['Int']>;
  only_current_in_org?: InputMaybe<Scalars['Boolean']>;
  organization_id: Scalars['Int'];
  sporttype_id: Scalars['Int'];
};


/** Query interface */
export type QueryTelegramUserSubscriptionsArgs = {
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
};


/** Query interface */
export type QueryUploadAthletesXlsxQueueArgs = {
  id: Scalars['ID'];
};


/** Query interface */
export type QueryUserFederationsArgs = {
  sport_id?: InputMaybe<Scalars['ID']>;
};


/** Query interface */
export type QueryVideostandByIdArgs = {
  id: Scalars['ID'];
};


/** Query interface */
export type QueryVideostandBySidArgs = {
  sid: Scalars['String'];
};


/** Query interface */
export type QueryVideostandEventsArgs = {
  videostand_id: Scalars['ID'];
};


/** Query interface */
export type QueryVideostandVideoArgs = {
  videostand_sid: Scalars['String'];
};


/** Query interface */
export type QueryWebjudgingScoresRgArgs = {
  event_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** Статусы выступлений в ХГ */
export enum RgExerciseStatusEnum {
  /** DNF */
  Dnf = 'dnf',
  /** DNS */
  Dns = 'dns',
  /** DSQ */
  Dsq = 'dsq',
  /** Статус выступления не определен */
  None = 'none',
  /** Участник на ковре */
  Oncarpet = 'oncarpet',
  /** Оценка за выступление выставлена */
  Scored = 'scored',
  /** Участник ушел с ковра, получает ценки */
  Scoring = 'scoring',
  /** Оценка за выступление утверждена */
  Signed = 'signed'
}

/** Состояние выступления в ХГ при сохранении нового состояния выступления */
export enum RgExerciseStatusInputEnum {
  /** DNF */
  Dnf = 'dnf',
  /** DNS */
  Dns = 'dns',
  /** DSQ */
  Dsq = 'dsq',
  /** Участник на ковре */
  Oncarpet = 'oncarpet',
  /** Участник ушел с ковра */
  Outcarpet = 'outcarpet',
  /** Оценка за выступление выставлена */
  Scored = 'scored',
  /** Оценка за выступление утверждена */
  Signed = 'signed'
}

/** Роли судей по ХГ */
export enum RgJudgeTypeEnum {
  JudgeA1 = 'judge_a1',
  JudgeA2 = 'judge_a2',
  JudgeA3 = 'judge_a3',
  JudgeA4 = 'judge_a4',
  JudgeD1 = 'judge_d1',
  JudgeD2 = 'judge_d2',
  JudgeD3 = 'judge_d3',
  JudgeD4 = 'judge_d4',
  JudgeE1 = 'judge_e1',
  JudgeE2 = 'judge_e2',
  JudgeE3 = 'judge_e3',
  JudgeE4 = 'judge_e4',
  JudgeE5 = 'judge_e5',
  JudgeE6 = 'judge_e6',
  JudgeL1 = 'judge_l1',
  JudgeL2 = 'judge_l2',
  JudgeT = 'judge_t',
  SjDa = 'sj_da',
  SjDb = 'sj_db',
  SjEa = 'sj_ea',
  SjEt = 'sj_et'
}

/** Rank type definition */
export type Rank = NodeInterface & {
  __typename?: 'Rank';
  id: Scalars['ID'];
  required_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  short_title?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

/** RankConnection type definition */
export type RankConnection = {
  __typename?: 'RankConnection';
  edges?: Maybe<Array<Maybe<Rank>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** RefereeingSystemVersion type definition */
export type RefereeingSystemVersion = {
  __typename?: 'RefereeingSystemVersion';
  count_downloads?: Maybe<Scalars['Int']>;
  count_downloads_all?: Maybe<Scalars['Int']>;
  creator_id?: Maybe<Scalars['Int']>;
  dt_create?: Maybe<Scalars['DateTimeType']>;
  filter: Scalars['String'];
  id: Scalars['Int'];
  is_actual?: Maybe<Scalars['Boolean']>;
  version?: Maybe<Scalars['String']>;
};

/** Region type definition */
export type Region = NodeInterface & {
  __typename?: 'Region';
  cities?: Maybe<Array<Maybe<City>>>;
  country?: Maybe<Country>;
  country_id?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['String']>;
  shortname?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** RegistrationFee type definition */
export type RegistrationFee = NodeInterface & {
  __typename?: 'RegistrationFee';
  active: Scalars['Boolean'];
  commission_inner: Scalars['Float'];
  commission_inner_percent: Scalars['Float'];
  commission_outer: Scalars['Float'];
  commission_outer_percent: Scalars['Float'];
  dt_due_payment?: Maybe<Scalars['DateType']>;
  dt_start_payment?: Maybe<Scalars['DateType']>;
  id: Scalars['ID'];
  legalentity_id: Scalars['Int'];
  price: Scalars['Float'];
  subject: RegistrationFeeSubjectEnum;
  table: Scalars['String'];
};

export type RegistrationFeeInput = {
  active: Scalars['Boolean'];
  commission_inner_percent: Scalars['Float'];
  commission_outer_percent: Scalars['Float'];
  dt_due_payment?: InputMaybe<Scalars['DateType']>;
  dt_start_payment?: InputMaybe<Scalars['DateType']>;
  legalentity_id: Scalars['Int'];
  price: Scalars['Float'];
  season_id?: InputMaybe<Scalars['ID']>;
  subject: RegistrationFeeSubjectEnum;
};

export type RegistrationFeeOrderInput = {
  after_redirect: Scalars['String'];
  amount: Scalars['Float'];
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  persons?: InputMaybe<Array<InputMaybe<RegistrationFeeOrderPersonsInput>>>;
  season_id: Scalars['Int'];
};

export type RegistrationFeeOrderPersonsInput = {
  amount: Scalars['Float'];
  subject: RegistrationFeeSubjectEnum;
  subject_id: Scalars['Int'];
};

/** RegistrationFeePaymentURL type definition */
export type RegistrationFeePaymentUrl = {
  __typename?: 'RegistrationFeePaymentURL';
  amount?: Maybe<Scalars['Float']>;
  amount_with_commission?: Maybe<Scalars['Float']>;
  commission?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  payment_url?: Maybe<Scalars['String']>;
};

export enum RegistrationFeeSubjectEnum {
  Athlete = 'athlete',
  Coach = 'coach'
}

/** Roles */
export type Roles = {
  __typename?: 'Roles';
  has_active_organizations?: Maybe<Scalars['Boolean']>;
  has_calendars?: Maybe<Scalars['Boolean']>;
  has_organizations?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isFinanceAdmin?: Maybe<Scalars['Boolean']>;
  isModerator?: Maybe<Scalars['Boolean']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  is_federator?: Maybe<Scalars['Boolean']>;
  is_finance_admin?: Maybe<Scalars['Boolean']>;
  is_moderator?: Maybe<Scalars['Boolean']>;
  is_super_federator?: Maybe<Scalars['Boolean']>;
  /** "дерево" организаций пользователя начиная от организции(ий), за которую пользователь отвечает и все подчиненные */
  organization_tree?: Maybe<Array<Maybe<UserOrganizationTreeItem>>>;
};

/** ScoreName type definition */
export type ScoreName = {
  __typename?: 'ScoreName';
  char_id: Scalars['String'];
  id: Scalars['Int'];
  manual_char_id?: Maybe<Scalars['String']>;
  recommended: Scalars['Int'];
  short_title: Scalars['String'];
  show_as_popup: Scalars['Int'];
  title: Scalars['String'];
};

export type SearchStringFilter = {
  search_string?: InputMaybe<Scalars['String']>;
};

/** Season type definition */
export type Season = {
  __typename?: 'Season';
  dt_end?: Maybe<Scalars['String']>;
  dt_start?: Maybe<Scalars['String']>;
  id_season: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  table: Scalars['String'];
};

/** ShortOrganizationInput type definition */
export type ShortOrganizationInput = {
  display_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  protocol_name?: InputMaybe<Scalars['String']>;
  short_title?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** SiteSettings type definition */
export type SiteSettings = {
  __typename?: 'SiteSettings';
  comment?: Maybe<Scalars['String']>;
  title: SiteSettingsEnum;
  value: Scalars['String'];
};

/** Настройки сайта из таблицы site_settings */
export enum SiteSettingsEnum {
  /** on/off */
  AdvStatus = 'adv_status',
  /** как отображать удаленного пользователя */
  DeletedUserDisplayName = 'deleted_user_display_name'
}

export type SiteSettingsInput = {
  comment?: InputMaybe<Scalars['String']>;
  title: SiteSettingsEnum;
  value: Scalars['String'];
};

/** SportProgram type definition */
export type SportProgram = {
  __typename?: 'SportProgram';
  id: Scalars['ID'];
  is_custom?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  sort_order?: Maybe<Scalars['String']>;
  sporttype_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
};

/** SportType type definition */
export type SportRank = NodeInterface & {
  __typename?: 'SportRank';
  id: Scalars['ID'];
  short_title?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

/** Определяет группы спортивных разрядов. */
export enum SportRankRangeEnum {
  /** КМС и выше */
  KmsAndHigher = 'kms_and_higher',
  /** 1С - 2С */
  S1S2 = 's1_s2',
  /** 3С и ниже */
  S3AndLower = 's3_and_lower'
}

/** SportSeason type definition */
export type SportSeason = NodeInterface & {
  __typename?: 'SportSeason';
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  has_payments: Scalars['Boolean'];
  id: Scalars['ID'];
  registration_fee?: Maybe<RegistrationFee>;
  sport_id: Scalars['Int'];
  table: Scalars['String'];
  title: Scalars['String'];
};


/** SportSeason type definition */
export type SportSeasonRegistration_FeeArgs = {
  subject: Scalars['String'];
};

/** SportSeasonConnection type definition */
export type SportSeasonConnection = {
  __typename?: 'SportSeasonConnection';
  edges?: Maybe<Array<Maybe<SportSeason>>>;
  total?: Maybe<Scalars['Int']>;
};

export type SportSeasonInput = {
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  id?: InputMaybe<Scalars['Int']>;
  sport_id: Scalars['Int'];
  title: Scalars['String'];
};

/** SportSeasonSubjectPayment type definition */
export type SportSeasonSubjectPayment = {
  __typename?: 'SportSeasonSubjectPayment';
  amount_to_pay: Scalars['Float'];
  balance: Scalars['Float'];
  balance_commission: Scalars['Float'];
  commission_to_pay: Scalars['Float'];
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  full_commission: Scalars['Float'];
  full_price: Scalars['Float'];
  paid: Scalars['Float'];
  paid_commission: Scalars['Float'];
  season_id: Scalars['ID'];
  season_title: Scalars['String'];
  sport_id: Scalars['Int'];
};

export type SportSeasonWithRegistrationFeeInput = {
  dt_begin: Scalars['DateType'];
  dt_end: Scalars['DateType'];
  id?: InputMaybe<Scalars['ID']>;
  sport_id: Scalars['Int'];
  sportsman_fee: RegistrationFeeInput;
  title: Scalars['String'];
};

/**
 *
 *   Метаинформация по виду спорта.
 *   Можно запрашивать как по цифровому ID так и по текстовому ключу.
 */
export type SportType = NodeInterface & {
  __typename?: 'SportType';
  displayName?: Maybe<Scalars['String']>;
  /** Буквенный код вида спорта. Используется в адресах веб-страниц. */
  federation_filter?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  is_as_is?: Maybe<Scalars['Boolean']>;
  is_published?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
  table: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

/** SportTypeConnection type definition */
export type SportTypeConnection = {
  __typename?: 'SportTypeConnection';
  edges?: Maybe<Array<Maybe<SportType>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** Sportsman type definition */
export type Sportsman = NodeInterface & {
  __typename?: 'Sportsman';
  achievements?: Maybe<Scalars['String']>;
  /** @deprecated использовать поле "coaches" */
  coach?: Maybe<Array<Maybe<Coach>>>;
  /** Тренеры спортсмена */
  coaches?: Maybe<Array<Maybe<Coach>>>;
  current_season_flags?: Maybe<SportsmanCurrentSeasonPayFlags>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  documents?: Maybe<SportsmanDocuments>;
  id: Scalars['ID'];
  id_ias_sport?: Maybe<Scalars['String']>;
  inspection_dates?: Maybe<AthleteInspectionDates>;
  inspection_ranks?: Maybe<Array<Maybe<AthleteRankTest>>>;
  is_verified?: Maybe<Scalars['Int']>;
  not_in_school: Scalars['Boolean'];
  /** организации, в которых спортсмен занимался / занимается */
  organizations?: Maybe<Array<Maybe<SportsmanOrganizationItem>>>;
  over_time_editing: Scalars['Boolean'];
  /** Персона спортсмена */
  person?: Maybe<Person>;
  /** ИД персоны (person_id) */
  person_id?: Maybe<Scalars['Int']>;
  photos_available: Scalars['Boolean'];
  rank?: Maybe<Scalars['Int']>;
  rank_tests?: Maybe<Array<Maybe<AthleteRankTestEnum>>>;
  rating_rank?: Maybe<Scalars['Int']>;
  rating_result?: Maybe<Scalars['String']>;
  /** ИД вида спорта */
  sport_id?: Maybe<Scalars['Int']>;
  sportrank?: Maybe<Rank>;
  sportrank_id?: Maybe<Scalars['Int']>;
  /** ИД спортсмена (athlete_id) */
  sportsman_id: Scalars['ID'];
  /**
   * статус спортсмена (проверен / на проверке и прочее...)
   * @deprecated Статус спортсмена больше не используется
   */
  sportsman_status?: Maybe<Scalars['String']>;
  /** ИД вида спорта */
  sporttype_id?: Maybe<Scalars['Int']>;
  table: Scalars['String'];
  unpaidSeasons?: Maybe<Array<Maybe<SportSeasonSubjectPayment>>>;
};


/** Sportsman type definition */
export type SportsmanCoachesArgs = {
  only_active?: InputMaybe<Scalars['Boolean']>;
  organization_id?: InputMaybe<Scalars['ID']>;
  use_query_filter_organization_id?: InputMaybe<Scalars['Boolean']>;
  use_source_organization_id?: InputMaybe<Scalars['Boolean']>;
};


/** Sportsman type definition */
export type SportsmanOrganizationsArgs = {
  current?: InputMaybe<Scalars['Boolean']>;
  use_query_filter_organization_id?: InputMaybe<Scalars['Boolean']>;
  use_query_only_mine?: InputMaybe<Scalars['Boolean']>;
  use_source?: InputMaybe<Scalars['Boolean']>;
};

/** SportsmanApplication is shows applications of a concrete person */
export type SportsmanApplication = {
  __typename?: 'SportsmanApplication';
  city?: Maybe<Scalars['String']>;
  city_id?: Maybe<Scalars['String']>;
  coach?: Maybe<Coach>;
  coach_id?: Maybe<Scalars['Int']>;
  coach_name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['String']>;
  dt_begin?: Maybe<Scalars['String']>;
  dt_end?: Maybe<Scalars['String']>;
  has_scores?: Maybe<Scalars['Boolean']>;
  has_video?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organization_id?: Maybe<Scalars['Int']>;
  organization_title?: Maybe<Scalars['String']>;
  region_id?: Maybe<Scalars['String']>;
};

/** SportsmanApplicationResults */
export type SportsmanApplicationResults = {
  __typename?: 'SportsmanApplicationResults';
  category_title?: Maybe<Scalars['String']>;
  categoty_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  score_extra_value?: Maybe<Scalars['String']>;
  score_position?: Maybe<Scalars['Int']>;
  score_title?: Maybe<Scalars['String']>;
  score_value?: Maybe<Scalars['Float']>;
  total_position?: Maybe<Scalars['String']>;
  total_value?: Maybe<Scalars['String']>;
};

/** SportsmanConnection type definition */
export type SportsmanConnection = {
  __typename?: 'SportsmanConnection';
  edges?: Maybe<Array<Maybe<Sportsman>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  overview?: Maybe<SportsmanStatusOverview>;
  parent_organization1?: Maybe<Organization>;
  total?: Maybe<Scalars['Int']>;
};

/** SportsmanCurrentSeasonPayFlags type definition */
export type SportsmanCurrentSeasonPayFlags = {
  __typename?: 'SportsmanCurrentSeasonPayFlags';
  is_exist_current_season?: Maybe<Scalars['Boolean']>;
  is_paid_current_season?: Maybe<Scalars['Boolean']>;
};

/** SportsmanDeletingProhibits type definition */
export type SportsmanDeletingProhibits = {
  __typename?: 'SportsmanDeletingProhibits';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

/** SportsmanDocuments type definition */
export type SportsmanDocuments = {
  __typename?: 'SportsmanDocuments';
  athlete_agreement?: Maybe<FileType>;
  athlete_insurance?: Maybe<FileType>;
  athlete_medcert?: Maybe<FileType>;
  id_birth_cert?: Maybe<FileType>;
  id_passport?: Maybe<FileType>;
  record_book?: Maybe<SportsmanDocumentsRecordBook>;
};

/** SportsmanDocumentsRecordBook type definition */
export type SportsmanDocumentsRecordBook = {
  __typename?: 'SportsmanDocumentsRecordBook';
  hi?: Maybe<Array<Maybe<FileType>>>;
  low?: Maybe<Array<Maybe<FileType>>>;
};

/** SportsmanEventCompetitorGroupPhotoConnection type definition */
export type SportsmanEventCompetitorGroupPhotoConnection = {
  __typename?: 'SportsmanEventCompetitorGroupPhotoConnection';
  edges?: Maybe<Array<Maybe<SportsmanEventCompetitorNameGroupPhoto>>>;
  filtered_total?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** SportsmanEventCompetitorNameGroupPhoto type definition */
export type SportsmanEventCompetitorNameGroupPhoto = {
  __typename?: 'SportsmanEventCompetitorNameGroupPhoto';
  event_city?: Maybe<Scalars['String']>;
  event_dt_begin?: Maybe<Scalars['DateType']>;
  event_dt_end?: Maybe<Scalars['DateType']>;
  event_id?: Maybe<Scalars['String']>;
  event_sport_federation_filter?: Maybe<Scalars['String']>;
  event_title?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<EventCompetitorGroupPhoto>>>;
  photo_count?: Maybe<Scalars['Int']>;
};

/** SportsmanEventVideo type definition */
export type SportsmanEventVideo = {
  __typename?: 'SportsmanEventVideo';
  apparatus?: Maybe<Scalars['String']>;
  apparatus_title?: Maybe<Scalars['String']>;
  category_title?: Maybe<Scalars['String']>;
  day_action?: Maybe<Scalars['DateType']>;
  duration_on_carpet?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  link: Scalars['String'];
  preview_link: Scalars['String'];
  time_start_on_carpet?: Maybe<Scalars['Int']>;
};

export type SportsmanListFilter = {
  athlete_status?: InputMaybe<AthleteStatusEnum>;
  dt_birthday?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<PersonGenderEnum>;
  name?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['Int']>;
  parent_organization1?: InputMaybe<Scalars['Int']>;
  region_id?: InputMaybe<Scalars['String']>;
  sportrank_id?: InputMaybe<Scalars['ID']>;
  sportrank_range?: InputMaybe<SportRankRangeEnum>;
  status?: InputMaybe<ContingentSportsmanStatusTypeEnum>;
};

/** SportsmanOrganizationCoach type definition */
export type SportsmanOrganizationCoach = {
  __typename?: 'SportsmanOrganizationCoach';
  active: Scalars['Boolean'];
  coach?: Maybe<Coach>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  from_month?: Maybe<Scalars['MonthType']>;
  from_year?: Maybe<Scalars['Int']>;
  is_main: Scalars['Boolean'];
  non_active: Scalars['Boolean'];
  over_time_editing: Scalars['Boolean'];
  to_month?: Maybe<Scalars['MonthType']>;
  to_year?: Maybe<Scalars['Int']>;
};

/** SportsmanOrganizationItem type definition */
export type SportsmanOrganizationItem = {
  __typename?: 'SportsmanOrganizationItem';
  coaches?: Maybe<Array<Maybe<SportsmanOrganizationCoach>>>;
  deleting_prohibits?: Maybe<Array<Maybe<SportsmanDeletingProhibits>>>;
  organization: Organization;
  over_time_editing: Scalars['Boolean'];
};

/** SportsmanStatusOverview type definition */
export type SportsmanStatusOverview = {
  __typename?: 'SportsmanStatusOverview';
  expired?: Maybe<Scalars['Int']>;
  inspect?: Maybe<Scalars['Int']>;
};

/** Subscription interface */
export type Subscription = {
  __typename?: 'Subscription';
  webJudgeExerciseStateRGSubscribe?: Maybe<JudgingSystemExerciseRg>;
  webJudgeScoreRGSubscribe?: Maybe<WebJudgeScoreRg>;
};


/** Subscription interface */
export type SubscriptionWebJudgeExerciseStateRgSubscribeArgs = {
  event_id: Scalars['ID'];
  judge_team: Scalars['Int'];
  judge_type: RgJudgeTypeEnum;
};


/** Subscription interface */
export type SubscriptionWebJudgeScoreRgSubscribeArgs = {
  event_id?: InputMaybe<Scalars['ID']>;
};

export type TeamSquadsFilter = {
  display_out_members?: InputMaybe<Scalars['Boolean']>;
  member_name?: InputMaybe<Scalars['String']>;
  organization_id?: InputMaybe<Scalars['ID']>;
  year_active_from?: InputMaybe<Scalars['Int']>;
};

export enum TeamSquadsSortTypeEnum {
  Name = 'name'
}

/** TelegramChatConnection type definition */
export type TelegramChatConnection = {
  __typename?: 'TelegramChatConnection';
  site_user?: Maybe<AUser>;
  status?: Maybe<Scalars['String']>;
};

/** TelegramUserInput type definition */
export type TelegramUserInput = {
  first_name?: InputMaybe<Scalars['String']>;
  is_bot?: InputMaybe<Scalars['Boolean']>;
  language_code?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Float']>;
  user_type?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** UserFederation type definition */
export type UserFederation = {
  __typename?: 'UserFederation';
  id: Scalars['ID'];
  sport_id: Scalars['ID'];
  title: Scalars['String'];
};

/** UserInfo */
export type UserInfo = {
  __typename?: 'UserInfo';
  self?: Maybe<AUser>;
  user?: Maybe<AUser>;
};

/** Элемент дерева организаций пользователя */
export type UserOrganizationTreeItem = {
  __typename?: 'UserOrganizationTreeItem';
  /** Уровень организации. 0 - пользователь является непосредственным ответственным, <Number> - пользователь отвечает за вышестоящую организацию */
  level: Scalars['Int'];
  /** ИД организации */
  organization_id: Scalars['Int'];
  /** ИД вышестоящей организации (куратора) */
  parent_organization1_id: Scalars['Int'];
  /** Вид спорта */
  sport_type: Scalars['String'];
};

/** Videostand type definition */
export type Videostand = {
  __typename?: 'Videostand';
  active: Scalars['Boolean'];
  auser_id: Scalars['ID'];
  current_and_upcoming_event_count: Scalars['Int'];
  dt_create: Scalars['DateTimeType'];
  dt_modify?: Maybe<Scalars['DateTimeType']>;
  finished_event_count: Scalars['Int'];
  id: Scalars['ID'];
  sid: Scalars['String'];
  stream_params: VideostandParams;
  stream_summary: VideostandSummary;
  table: Scalars['String'];
  title: Scalars['String'];
};

/** VideostandEvent type definition */
export type VideostandEvent = {
  __typename?: 'VideostandEvent';
  dt_create: Scalars['DateTimeType'];
  dt_end?: Maybe<Scalars['DateTimeType']>;
  dt_start?: Maybe<Scalars['DateTimeType']>;
  id: Scalars['ID'];
  is_main: Scalars['Boolean'];
  table: Scalars['String'];
  title: Scalars['String'];
  videostand_id: Scalars['ID'];
};

/** VideostandEventInput type definition */
export type VideostandEventInput = {
  dt_end: Scalars['DateTimeType'];
  dt_start: Scalars['DateTimeType'];
  id?: InputMaybe<Scalars['ID']>;
  is_main: Scalars['Boolean'];
  title: Scalars['String'];
  videostand_id: Scalars['ID'];
};

/** VideostandEvents type definition */
export type VideostandEvents = {
  __typename?: 'VideostandEvents';
  current_and_upcoming?: Maybe<Array<Maybe<VideostandEvent>>>;
  finished?: Maybe<Array<Maybe<VideostandEvent>>>;
  table: Scalars['String'];
};

/** VideostandInput type definition */
export type VideostandInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  sid?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** VideostandParams type definition */
export type VideostandParams = {
  __typename?: 'VideostandParams';
  country?: Maybe<Array<Maybe<Scalars['ID']>>>;
  sport?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** VideostandStreamParamsInput type definition */
export type VideostandStreamParamsInput = {
  country?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sport?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** VideostandSummary type definition */
export type VideostandSummary = {
  __typename?: 'VideostandSummary';
  duration?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

/** Оценка судьи для модуля веб-судья */
export type WebJudgeScoreRg = {
  __typename?: 'WebJudgeScoreRG';
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_id: Scalars['ID'];
  event_id: Scalars['ID'];
  is_accepted?: Maybe<Scalars['Boolean']>;
  judge_type: RgJudgeTypeEnum;
  score?: Maybe<Scalars['Float']>;
};

/** Оценка за выступление из модуля web-судья (ХГ) */
export type WebJudgeScoreRgInput = {
  apparatus: Scalars['String'];
  category_id: Scalars['ID'];
  competitor_id: Scalars['ID'];
  event_id: Scalars['ID'];
  judge_type: RgJudgeTypeEnum;
  score?: InputMaybe<Scalars['Float']>;
};

/** XlsxQueue type definition */
export type XlsxQueue = {
  __typename?: 'XlsxQueue';
  entity: Scalars['String'];
  entity_id: Scalars['Int'];
  file?: Maybe<FileType>;
  id: Scalars['Int'];
  last_error?: Maybe<Scalars['String']>;
  operation_type?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type NodeFilter = {
  person_id?: InputMaybe<Scalars['String']>;
  sport_id?: InputMaybe<Scalars['Int']>;
};

/** Данные для доступа к веб-судье. */
export type WebJudgeUidAndUrl = {
  __typename?: 'webJudgeUidAndUrl';
  uid: Scalars['String'];
  url: Scalars['String'];
};
