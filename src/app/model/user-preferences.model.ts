import { Language } from "../enums/language-code.enum";
import { LengthUnit } from "../enums/length-unit.enum";

export interface UserPreferences {
    lan: Language,
    preferred_length_unit: LengthUnit
}