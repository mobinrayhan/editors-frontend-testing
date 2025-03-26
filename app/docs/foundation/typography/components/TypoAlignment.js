const TypoAlignmentCenter = () => {
    return (
        <figure className="text-center">
            <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
    )
}

export const TypoAlignmentEnd = () => {
    return (
        <figure className="text-end">
            <blockquote className="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>
    )
}

export const TypoAlignmentCenterCode = `
<figure className="text-center">
    <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption className="blockquote-footer">
        Someone famous in
        <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
`.trim();


export const TypoAlignmentEndCode = `
<figure className="text-end">
    <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption className="blockquote-footer">
        Someone famous in
        <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
`.trim();

export default TypoAlignmentCenter