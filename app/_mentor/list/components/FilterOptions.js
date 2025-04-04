// import node module libraries
import { useState } from 'react'
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import Select, { components } from 'react-select';
import RangeSlider from 'react-range-slider-input';

// import hooks
import useMounted from 'hooks/useMounted';

const FilterOptions = () => {

    const hasMounted = useMounted();

    // For Skill selection dropdown
    const options = [
        { value: 'Figma', label: 'Figma' },
        { value: 'SQL', label: 'SQL' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'ERP', label: 'ERP' },
        { value: 'React', label: 'React' },
        { value: 'Vuejs', label: 'Vuejs' },
        { value: 'AWS', label: 'AWS' },
        { value: 'NextJS', label: 'NextJS' }
    ];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };
    const Option = (props) => {
        return (
            <components.Option {...props}>
                <Form.Check
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                    label={props.label}
                />
            </components.Option>
        );
    };

    // For Price range selection dropdown
    const [rangeValue, setRangeValue] = useState([0, 1500]);

    // For Experience range selection dropdown
    const [experienceValue, setExperienceValue] = useState([0, 15]);

    const handleResetFilter = () => {
        setSelectedOptions([]);
        setRangeValue([0, 1500]);
        setExperienceValue([0, 15]);
    }
    return (
        <Row className="align-items-center g-3">
            <Col xl={3} xs={12}>
                {hasMounted && <Form.Group>
                    <Select
                        isMulti
                        name="options"
                        options={options}
                        className="geeks-multi-select"
                        classNamePrefix="geeks"
                        onChange={handleChange}
                        value={selectedOptions}
                        defaultValue={selectedOptions}
                        components={{ Option }}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                        placeholder="Skills"
                    />
                </Form.Group>}
            </Col>
            <Col xl={3} xs={12}>
                <Dropdown className='d-grid' >
                    <Dropdown.Toggle as="button" id="dropdown-basic-button" className='btn btn-outline-white text-start w-100'>
                        Price: ${rangeValue[0]} - ${rangeValue[1]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='range-slider-wrap'>
                        <Dropdown.Item as="div" bsPrefix='ps-3 py-1'  >
                            <Row className='w-100'>
                                <Col xs={12} className='mb-4'>
                                    <RangeSlider
                                        min={0}
                                        max={1500}
                                        value={rangeValue}
                                        onInput={setRangeValue}
                                        onRangeDragEnd={(e) => setShowDropdown(true)}
                                    />
                                </Col>
                                <Col xs={12}>
                                    ${rangeValue[0]} - ${rangeValue[1]}
                                </Col>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col xl={3} xs={12}>
                <Dropdown className='d-grid' >
                    <Dropdown.Toggle as="button" id="dropdown-basic-button" className='btn btn-outline-white text-start w-100'>
                        Price: {experienceValue[0]} - {experienceValue[1]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='range-slider-wrap'>
                        <Dropdown.Item as="div" bsPrefix='ps-3 py-1'  >
                            <Row className='w-100'>
                                <Col xs={12} className='mb-4'>
                                    <RangeSlider
                                        min={0}
                                        max={15}
                                        value={experienceValue}
                                        onInput={setExperienceValue}
                                        onRangeDragEnd={(e) => setShowDropdown(true)}
                                    />
                                </Col>
                                <Col xs={12}>
                                    {experienceValue[0]} - {experienceValue[1]}
                                </Col>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col xl={3} xs={12}>
                <div className="d-flex align-items-center">
                    <Button type="reset" value="reset" bsPrefix=' ' onClick={handleResetFilter} className="btn btn-outline-white">
                        <span className="me-2">
                            <svg className="bi bi-x-circle" fill="currentColor" height="14" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg>
                        </span>
                        Reset all filters
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default FilterOptions