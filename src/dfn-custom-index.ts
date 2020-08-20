import {NgModule} from '@angular/core';
import {NgbDatepickerModule} from './datepicker/datepicker.module';

export {
  NgbCalendar,
  NgbCalendarGregorian,
  NgbCalendarHebrew,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbCalendarPersian,
  NgbDate,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateNativeUTCAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDatepickerConfig,
  NgbInputDatepickerConfig,
  NgbDatepickerContent,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDatepickerKeyboardService,
  NgbDatepickerModule,
  NgbDatepickerMonth,
  NgbDatepickerNavigateEvent,
  NgbDatepickerState,
  NgbDateStruct,
  NgbInputDatepicker,
  NgbPeriod,
  NgbCalendarHijri,
  NgbDatepickerI18nDefault
} from './datepicker/datepicker.module';

@NgModule({imports: [NgbDatepickerModule], exports: [NgbDatepickerModule]})
export class NgbModule {
}
