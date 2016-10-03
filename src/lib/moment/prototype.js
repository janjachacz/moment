import { Moment } from './constructor';
import wrap from '../utils/wrap';

var proto = Moment.prototype;

import { add, subtract } from './add-subtract';
import { calendar, getCalendarFormat } from './calendar';
import { isBefore, isBetween, isSame, isAfter, isSameOrAfter, isSameOrBefore } from './compare';
import { diff } from './diff';
import { format, toString, toISOString } from './format';
import { from, fromNow } from './from';
import { to, toNow } from './to';
import { stringGet, stringSet } from './get-set';
import { locale, localeData, lang } from './locale';
import { prototypeMin, prototypeMax } from './min-max';
import { startOf, endOf } from './start-end-of';
import { valueOf, toDate, toArray, toObject, toJSON, unix } from './to-type';
import { isValid, parsingFlags, invalidAt } from './valid';
import { creationData } from './creation-data';

proto.add            = wrap(Moment, add);
proto.calendar       = calendar;
proto.diff           = diff;
proto.endOf          = wrap(Moment, endOf);
proto.format         = format;
proto.from           = from;
proto.fromNow        = fromNow;
proto.to             = to;
proto.toNow          = toNow;
proto.get            = stringGet;
proto.invalidAt      = invalidAt;
proto.isAfter        = isAfter;
proto.isBefore       = isBefore;
proto.isBetween      = isBetween;
proto.isSame         = isSame;
proto.isSameOrAfter  = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid        = isValid;
proto.lang           = wrap(Moment, lang);
proto.locale         = wrap(Moment, locale);
proto.localeData     = localeData;
proto.parsingFlags   = parsingFlags;
proto.set            = wrap(Moment, stringSet);
proto.startOf        = wrap(Moment, startOf);
proto.subtract       = wrap(Moment, subtract);
proto.toArray        = toArray;
proto.toObject       = toObject;
proto.toDate         = toDate;
proto.toISOString    = toISOString;
proto.toJSON         = toJSON;
proto.toString       = toString;
proto.unix           = unix;
proto.valueOf        = valueOf;
proto.creationData   = creationData;

// Year
import { getSetYear, getIsLeapYear } from '../units/year';
proto.year       = wrap(Moment, getSetYear);
proto.isLeapYear = getIsLeapYear;

// Week Year
import { getSetWeekYear, getSetISOWeekYear, getWeeksInYear, getISOWeeksInYear } from '../units/week-year';
proto.weekYear    = wrap(Moment, getSetWeekYear);
proto.isoWeekYear = wrap(Moment, getSetISOWeekYear);

// Quarter
import { getSetQuarter } from '../units/quarter';
proto.quarter = proto.quarters = wrap(Moment, getSetQuarter);

// Month
import { getSetMonth, getDaysInMonth } from '../units/month';
proto.month       = wrap(Moment, getSetMonth);
proto.daysInMonth = getDaysInMonth;

// Week
import { getSetWeek, getSetISOWeek } from '../units/week';
proto.week    = proto.weeks    = wrap(Moment, getSetWeek);
proto.isoWeek = proto.isoWeeks = wrap(Moment, getSetISOWeek);
proto.weeksInYear              = getWeeksInYear;
proto.isoWeeksInYear           = getISOWeeksInYear;

// Day
import { getSetDayOfMonth } from '../units/day-of-month';
import { getSetDayOfWeek, getSetISODayOfWeek, getSetLocaleDayOfWeek } from '../units/day-of-week';
import { getSetDayOfYear } from '../units/day-of-year';
proto.date             = wrap(Moment, getSetDayOfMonth);
proto.day = proto.days = wrap(Moment, getSetDayOfWeek);
proto.weekday          = wrap(Moment, getSetLocaleDayOfWeek);
proto.isoWeekday       = wrap(Moment, getSetISODayOfWeek);
proto.dayOfYear        = wrap(Moment, getSetDayOfYear);

// Hour
import { getSetHour } from '../units/hour';
proto.hour = proto.hours = wrap(Moment, getSetHour);

// Minute
import { getSetMinute } from '../units/minute';
proto.minute = proto.minutes = wrap(Moment, getSetMinute);

// Second
import { getSetSecond } from '../units/second';
proto.second = proto.seconds = wrap(Moment, getSetSecond);

// Millisecond
import { getSetMillisecond } from '../units/millisecond';
proto.millisecond = proto.milliseconds = wrap(Moment, getSetMillisecond);

// Offset
import {
    getSetOffset,
    setOffsetToUTC,
    setOffsetToLocal,
    setOffsetToParsedOffset,
    hasAlignedHourOffset,
    isDaylightSavingTime,
    isDaylightSavingTimeShifted,
    getSetZone,
    isLocal,
    isUtcOffset,
    isUtc
} from '../units/offset';
proto.utcOffset            = wrap(Moment, getSetOffset);
proto.utc                  = wrap(Moment, setOffsetToUTC);
proto.local                = wrap(Moment, setOffsetToLocal);
proto.parseZone            = wrap(Moment, setOffsetToParsedOffset);
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
import { getZoneAbbr, getZoneName } from '../units/timezone';
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
import { deprecate } from '../utils/deprecate';
proto.clone  = deprecate('clone does nothing in Moment v3.x because the API is now immutable. Use moment(instance) to make a copy.', function clone() { return this; });
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', wrap(Moment, getSetDayOfMonth));
proto.max    = deprecate('moment().max() is deprecated. Use moment.min() instead (notice lack of parentheses).', prototypeMax);
proto.min    = deprecate('moment().min() is deprecated. Use moment.max() instead (notice lack of parentheses).', prototypeMin);
proto.months = deprecate('months accessor is deprecated. Use month instead', wrap(Moment, getSetMonth));
proto.years  = deprecate('years accessor is deprecated. Use year instead', wrap(Moment, getSetYear));
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', wrap(Moment, getSetZone));
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

export default proto;
