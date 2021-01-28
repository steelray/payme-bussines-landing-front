import { APP_LANGUAGES } from "../enums/app-languages.enum";
import { IAppLanguage } from "../interfaces/app-languages.interface";

export const appLanguages: IAppLanguage[] = [
  {
    locale: APP_LANGUAGES.RU,
    title: 'Русский',
    isDefault: true,
  },
  {
    locale: APP_LANGUAGES.UZ,
    title: 'O’zbekcha',
    isDefault: false
  },
  {
    locale: APP_LANGUAGES.EN,
    title: 'English',
    isDefault: false
  }
];