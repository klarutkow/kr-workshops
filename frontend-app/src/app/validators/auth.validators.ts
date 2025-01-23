import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const valid = passwordRegex.test(password);

  return valid ? null : { passwordInvalid: true };
};
