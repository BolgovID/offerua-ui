import { FormGroup, Validators } from "@angular/forms"

export const usernameValidator = [Validators.required, Validators.minLength(8)]
export const passwordValidator = [Validators.required, Validators.minLength(8)]

export const addQuestionValidator = [Validators.required, Validators.minLength(8)]

export const isValid = (form: FormGroup, field: string) => {
    return form.get(field)?.invalid && form.get(field)?.touched
}