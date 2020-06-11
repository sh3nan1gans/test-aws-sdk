import { DOMParser } from 'xmldom';
global.window = {
  DOMParser,
};
global.DOMParser = DOMParser;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      DOMParser: typeof DOMParser;
      window: {
        DOMParser: typeof DOMParser;
      };
    }
  }
}
