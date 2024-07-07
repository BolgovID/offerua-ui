export interface IProperty<TValue> {
    [property: string]: TValue,
}

export interface IPropertyAny extends IProperty<any> { }

export interface IPropertyString extends IProperty<string> { }