// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
/**
 * Removes key __K__ from type __T__
 *
```typescript
  type MyProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick"
  >
```
 *
 * Doesn't have an onClick property
 */
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
