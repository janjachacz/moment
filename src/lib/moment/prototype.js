import { Moment } from './constructor';
import { wrap } from '../utils/wrap';

var proto = Moment.prototype;

import { add, subtract } from './add-subtract';
import { calendar, getCalendarFormat } from './calendar';
import { clone } from './clone';
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

proto.add            = wrap(add);
proto.calendar       = calendar;
proto.diff           = diff;
proto.endOf          = wrap(endOf);
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
proto.lang           = wrap(lang);
proto.locale         = wrap(locale);
proto.localeData     = localeData;
proto.parsingFlags   = parsingFlags;
proto.set            = wrap(stringSet);
proto.startOf        = wrap(startOf);
proto.subtract       = wrap(subtract);
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
proto.year       = wrap(getSetYear);
proto.isLeapYear = getIsLeapYear;

// Week Year
import { getSetWeekYear, getSetISOWeekYear, getWeeksInYear, getISOWeeksInYear } from '../units/week-year';
proto.weekYear    = wrap(getSetWeekYear);
proto.isoWeekYear = wrap(getSetISOWeekYear);

// Quarter
import { getSetQuarter } from '../units/quarter';
proto.quarter = proto.quarters = wrap(getSetQuarter);

// Month
import { getSetMonth, getDaysInMonth } from '../units/month';
proto.month       = wrap(getSetMonth);
proto.daysInMonth = getDaysInMonth;

// Week
import { getSetWeek, getSetISOWeek } from '../units/week';
proto.week    = proto.weeks    = wrap(getSetWeek);
proto.isoWeek = proto.isoWeeks = wrap(getSetISOWeek);
proto.weeksInYear              = getWeeksInYear;
proto.isoWeeksInYear           = getISOWeeksInYear;

// Day
import { getSetDayOfMonth } from '../units/day-of-month';
import { getSetDayOfWeek, getSetISODayOfWeek, getSetLocaleDayOfWeek } from '../units/day-of-week';
import { getSetDayOfYear } from '../units/day-of-year';
proto.date             = wrap(getSetDayOfMonth);
proto.day = proto.days = wrap(getSetDayOfWeek);
proto.weekday          = wrap(getSetLocaleDayOfWeek);
proto.isoWeekday       = wrap(getSetISODayOfWeek);
proto.dayOfYear        = wrap(getSetDayOfYear);

// Hour
import { getSetHour } from '../units/hour';
proto.hour = proto.hours = wrap(getSetHour);

// Minute
import { getSetMinute } from '../units/minute';
proto.minute = proto.minutes = wrap(getSetMinute);

// Second
import { getSetSecond } from '../units/second';
proto.second = proto.seconds = wrap(getSetSecond);

// Millisecond
import { getSetMillisecond } from '../units/millisecond';
proto.millisecond = proto.milliseconds = wrap(getSetMillisecond);

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
proto.utcOffset            = wrap(getSetOffset);
proto.utc                  = wrap(setOffsetToUTC);
proto.local                = wrap(setOffsetToLocal);
proto.parseZone            = wrap(setOffsetToParsedOffset);
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
proto.clone  = deprecate('clone does nothing in Moment v3.x because the API is now immutable. Use moment(instance) to make a copy.', function() { return this; });
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', wrap(getSetDayOfMonth));
proto.max    = deprecate('moment().max() is deprecated. Use moment.min() instead (notice lack of parentheses).', prototypeMax);
proto.min    = deprecate('moment().min() is deprecated. Use moment.max() instead (notice lack of parentheses).', prototypeMin);
proto.months = deprecate('months accessor is deprecated. Use month instead', wrap(getSetMonth));
proto.years  = deprecate('years accessor is deprecated. Use year instead', wrap(getSetYear));
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', wrap(getSetZone));
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

export default proto;
