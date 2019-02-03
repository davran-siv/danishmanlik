export class Languages {
  static RU = 'RU'
  static EN = 'EN'
  static TR = 'TR'
}

export type LanguageTypes = typeof Languages.RU | typeof Languages.EN | typeof Languages.TR
