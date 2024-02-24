//* AutoBind Decorator *//
export function AutoBind(
  _target: any,
  _methodName: string | Symbol,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value as Function;

  return {
    get() {
      const boundFn = originalMethod?.bind(this);
      return boundFn;
    },
  };
}
