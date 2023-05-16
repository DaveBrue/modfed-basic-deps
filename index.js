import { version } from './package.json' assert { type: 'json '};

export const version = version;

let _calls = 0;
export function foo() {
    return ++_calls;
}