import FormModelBuilder from './FormModelBuilder';

export default function SheetMutation(sheet = {}) {
    const newSheet = FormModelBuilder(sheet).build();
    return {
        setFieldProps(id, props, value) {
            const { fields } = newSheet;
            const newField = Object.assign({}, fields.get(id));
            newField[props] = value;
            fields.set(id, newField);
            return this;
        },
        setValue(id, value) {
            return this.setFieldProps(id, 'value', value);
        },
        setErrors(id, errors) {
            return this.setFieldProps(id, 'errors', errors);
        },
        setVisibility(id, visibility) {
            return this.setFieldProps(id, 'visible', visibility);
        },
        setRequired(id, required) {
            return this.setFieldProps(id, 'required', required);
        },
        setReadOnly(id, readOnly) {
            return this.setFieldProps(id, 'readOnly', readOnly);
        },
        save() {
            return newSheet;
        }
    };
}
