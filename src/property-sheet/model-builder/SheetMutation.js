/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import FormModelBuilder from './FormModelBuilder';

export default function SheetMutation(sheet = {}) {
    const newSheet = FormModelBuilder(sheet).build();
    return {
        loadValues(values) {
            const fields = newSheet.fields;
            for (const key in values) {
                if (fields.has(key)) {
                    const newField = Object.assign({}, fields.get(key));
                    newField.value = values[key];
                    fields.set(key, newField);
                }
            }
            return this;
        },
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
            return this.setFieldProps(id, 'visibility', visibility);
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
