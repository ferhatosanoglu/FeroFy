import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import Storage from './storage';

export const userAtom = atomWithStorage(
    'user',
    {},
    createJSONStorage(() => Storage),
);

export const introAtom = atomWithStorage(
    'intro',
    false,
    createJSONStorage(() => Storage),
);