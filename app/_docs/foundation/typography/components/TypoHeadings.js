const TypoHeadings = () => {
    return (
        <table className="table">
            <thead className="table-light">
                <tr>
                    <th>Heading</th>
                    <th>Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>  </td>
                    <td><span className="h1">h1. Bootstrap heading</span></td>
                </tr>
                <tr>
                    <td>  <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p> </td>
                    <td><span className="h2">h2. Bootstrap heading</span></td>
                </tr>
                <tr>
                    <td> <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>  </td>
                    <td><span className="h3">h3. Bootstrap heading</span></td>
                </tr>
                <tr>
                    <td>  <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p> </td>
                    <td><span className="h4">h4. Bootstrap heading</span></td>
                </tr>
                <tr>
                    <td> <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p> </td>
                    <td><span className="h5">h5. Bootstrap heading</span></td>
                </tr>
                <tr>
                    <td> <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p> </td>
                    <td><span className="h6">h6. Bootstrap heading</span></td>
                </tr>
            </tbody>
        </table>
    )
}

export const TypoHeadingsCode = `
<table className="table">
    <thead className="table-light">
        <tr>
            <th>Heading</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>  </td>
            <td><span className="h1">h1. Bootstrap heading</span></td>
        </tr>
        <tr>
            <td>  <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p> </td>
            <td><span className="h2">h2. Bootstrap heading</span></td>
        </tr>
        <tr>
            <td> <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>  </td>
            <td><span className="h3">h3. Bootstrap heading</span></td>
        </tr>
        <tr>
            <td>  <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p> </td>
            <td><span className="h4">h4. Bootstrap heading</span></td>
        </tr>
        <tr>
            <td> <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p> </td>
            <td><span className="h5">h5. Bootstrap heading</span></td>
        </tr>
        <tr>
            <td> <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p> </td>
            <td><span className="h6">h6. Bootstrap heading</span></td>
        </tr>
    </tbody>
</table>
`.trim();

export default TypoHeadings