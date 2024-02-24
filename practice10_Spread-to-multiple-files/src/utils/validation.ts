//* Validation *//
export interface ValidationRule {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(ValidationRule: ValidationRule): boolean {
  let isValid = true;

  if (ValidationRule.required != null) {
    isValid = isValid && ValidationRule.value.toString().length > 0;
  }
  if (
    ValidationRule.maxLength != null &&
    typeof ValidationRule.value === "string"
  ) {
    isValid =
      isValid &&
      ValidationRule.value.toString().length <= ValidationRule.maxLength;
  }
  if (
    ValidationRule.minLength != null &&
    typeof ValidationRule.value === "string"
  ) {
    isValid =
      isValid &&
      ValidationRule.value.toString().length >= ValidationRule.minLength;
  }
  if (ValidationRule.max != null && typeof ValidationRule.value === "number") {
    isValid = isValid && ValidationRule.value <= ValidationRule.max;
  }
  if (ValidationRule.min != null && typeof ValidationRule.value === "number") {
    isValid = isValid && ValidationRule.value >= ValidationRule.min;
  }

  return isValid;
}
