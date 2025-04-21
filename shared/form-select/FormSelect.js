// import node module libraries
import { Fragment } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormSelect = (
  props = {
    placeholder: "",
    defaultselected: "",
    required: false,
    id: "",
    name: "",
  }
) => {
  const {
    placeholder,
    defaultselected,
    options,
    id,
    name,
    onChange,
    required,
  } = props;

  return (
    <Fragment>
      <Form.Select
        defaultValue={defaultselected}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
      >
        {placeholder ? (
          <option value="" className="text-muted">
            {placeholder}
          </option>
        ) : (
          ""
        )}
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value} className="text-dark">
              {item.label}
            </option>
          );
        })}
      </Form.Select>
    </Fragment>
  );
};

FormSelect.propTypes = {
  placeholder: PropTypes.string,
  defaultselected: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default FormSelect;
