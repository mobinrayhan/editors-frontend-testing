const NamingASource = () => {
    return (
        <figure>
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

export const NamingASourceCode = `
<figure>
    <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
    </blockquote>
    <figcaption className="blockquote-footer">
        Someone famous in
        <cite title="Source Title">Source Title</cite>
    </figcaption>
</figure>
`.trim();

export default NamingASource