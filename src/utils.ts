export type EnumType = string | object;
type ArmArgs<T extends string | object> = T extends object
  ? { [K in keyof T]: [key: K, val: T[K]] }[keyof T]
  : [key: T, val: undefined];
type EnumMatch<T extends EnumType> = T extends object ? keyof T : T;

export const matchEnum = <T extends EnumType, RT>(
  enm: T,
  arm: (...args: ArmArgs<T>) => RT
): RT => {
  if (typeof enm == "string") {
    // @ts-expect-error This produces the correct type, need to figure out why
    // this check fails.
    return arm(enm);
  } else {
    const k = Object.keys(enm)[0];
    // @ts-expect-error This produces the correct type, need to figure out why
    // this check fails.
    return arm(k, enm[k]);
  }
};

export const matches = <T extends EnumType>(
  enm: T,
  m: EnumMatch<T>
): boolean => {
  if (typeof enm == "string") {
    return enm == m;
  } else {
    const k = Object.keys(enm)[0];
    return k === m;
  }
};

export const invariant = <T>(v: T, message?: string): NonNullable<T> => {
  if (v === undefined || v === null) {
    throw new Error(message || "invariant violated");
  }
  return v;
};
