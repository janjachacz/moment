import { Duration } from './constructor';
import { durationWrap as wrap } from '../utils/wrap';

var proto = Duration.prototype;

import { abs } from './abs';
import { add, subtract } from './add-subtract';
import { as, asMilliseconds, asSeconds, asMinutes, asHours, asDays, asWeeks, asMonths, asYears, valueOf } from './as';
import { bubble } from './bubble';
import { get, milliseconds, seconds, minutes, hours, days, months, years, weeks } from './get';
import { humanize } from './humanize';
import { toISOString } from './iso-string';
import { lang, locale, localeData } from '../moment/locale';

proto.abs            = abs;
proto.add            = wrap(add);
proto.subtract       = wrap(subtract);
proto.as             = as;
proto.asMilliseconds = asMilliseconds;
proto.asSeconds      = asSeconds;
proto.asMinutes      = asMinutes;
proto.asHours        = asHours;
proto.asDays         = asDays;
proto.asWeeks        = asWeeks;
proto.asMonths       = asMonths;
proto.asYears        = asYears;
proto.valueOf        = valueOf;
proto._bubble        = bubble;
proto.get            = get;
proto.milliseconds   = wrap(milliseconds);
proto.seconds        = wrap(seconds);
proto.minutes        = wrap(minutes);
proto.hours          = wrap(hours);
proto.days           = wrap(days);
proto.weeks          = wrap(weeks);
proto.months         = wrap(months);
proto.years          = wrap(years);
proto.humanize       = humanize;
proto.toISOString    = toISOString;
proto.toString       = toISOString;
proto.toJSON         = toISOString;
proto.locale         = wrap(locale);
proto.localeData     = localeData;

// Deprecations
import { deprecate } from '../utils/deprecate';

proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString);
proto.lang = deprecate('duration.lang() is deprecated. Use locale() or localeData() instead.', wrap(lang));
