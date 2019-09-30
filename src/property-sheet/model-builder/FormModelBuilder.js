import { OrderedMap } from 'immutable';

export function FieldModelBuilder(opts) {
    const model = Object.assign({ errors: [] }, opts);
    return {
        setLabel(label) {
            model.label = label;
            return this;
        },
        setValue(value) {
            model.value = value;
            return this;
        },
        setVisible(visible) {
            model.visible = visible;
            return this;
        },
        setRequired(required) {
            model.required = required;
            return this;
        },
        setReadOnly(readOnly) {
            model.readOnly = readOnly;
            return this;
        },
        setErrors(errors) {
            model.errors = errors;
            return this;
        },
        build() {
            return model;
        }
    };
}

export default function FormModelBuilder(opts = {}) {
    const model = Object.assign({ fields: OrderedMap() }, opts);
    return {
        action(action) {
            model.action = action;
            return this;
        },
        fields(fields) {
            model.fields = OrderedMap(fields.map((field) => [field.id, field]));
            return this;
        },
        heading(heading) {
            model.heading = heading;
            return this;
        },
        sectionHeader(id, title) {
            model.fields = model.fields.set(id, { section: true, id, title, visibility: true });
            return this;
        },
        build() {
            return model;
        }
    };
}
