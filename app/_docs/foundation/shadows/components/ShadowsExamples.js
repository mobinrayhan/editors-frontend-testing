import { Fragment } from "react";

const ShadowsExamples = () => {
    return (
        <Fragment>
            <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
            <div className="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
        </Fragment>
    )
}
export const ShadowsExamplesCode = `
<Fragment>
    <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
    <div className="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
    <div className="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
    <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
</Fragment>
`.trim();

export default ShadowsExamples