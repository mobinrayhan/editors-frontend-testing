import { Fragment } from "react";

const SmoothShadows = () => {
    return (
        <Fragment>
            <div className="smooth-shadow-sm p-3 mb-5 bg-white rounded">Smooth regular shadow</div>
            <div className="smooth-shadow-md p-3 mb-5 bg-white rounded">Smooth medium shadow</div>
            <div className="smooth-shadow-lg p-3 bg-white rounded">Smooth larger shadow</div>
        </Fragment>
    )
}

export const SmoothShadowsCode = `
<Fragment>
    <div className="smooth-shadow-sm p-3 mb-5 bg-white rounded">Smooth regular shadow</div>
    <div className="smooth-shadow-md p-3 mb-5 bg-white rounded">Smooth medium shadow</div>
    <div className="smooth-shadow-lg p-3 bg-white rounded">Smooth larger shadow</div>
</Fragment>
`.trim();

export default SmoothShadows