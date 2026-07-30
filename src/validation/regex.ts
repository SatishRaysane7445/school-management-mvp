export const REGEX = {
  NAME: /^[A-Za-z]+(?: [A-Za-z]+)*$/,

  SCHOOL_NAME: /^[A-Za-z0-9 '&-]+$/,

  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,

  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/,

  MOBILE: /^[6-9]\d{9}$/,
};