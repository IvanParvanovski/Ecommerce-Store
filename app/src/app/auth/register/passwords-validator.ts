import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchingPasswords(firstControl: string, secondControl: string): ValidatorFn {
    return (control) => { 
        const group = control as FormGroup;
        return group.get(firstControl)?.value === group.get(secondControl)?.value ? null : { matchingPasswords: true };
    };
}