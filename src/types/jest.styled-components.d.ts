/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValueOf } from 'next/dist/shared/lib/constants'
import { Plugin, NewPlugin } from 'pretty-format'

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol
      sample?: string | RegExp | object | Array<any> | Function
    }

    type Value = string | RegExp | number | AsymmetricMatcher | undefined

    interface Options {
      media?: string
      modifier?: string
      supports?: string
    }
  }

  interface Matchers<R, T> {
    toHaveStyleRule(property: string, value?: ValueOf, options?: Options): R
  }
}

export declare const styledSheetSerializer: Exclude<Plugin, NewPlugin>
