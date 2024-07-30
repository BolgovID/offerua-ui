import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomAutocompleteComponent } from "./autocomplete/autocomplete.component";

const customInputs = [
    CustomAutocompleteComponent
]

@NgModule({
    declarations: customInputs,
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        MatIcon,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: customInputs,
})
export class CustomInputsModule { }
