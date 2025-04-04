
const DisplayHeadings = () => {
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td className="border-top-0 ps-0"><span className="display-1">Display 1</span></td>
                </tr>
                <tr>
                    <td className="ps-0"><span className="display-2">Display 2</span></td>
                </tr>
                <tr>
                    <td className="ps-0"><span className="display-3">Display 3</span></td>
                </tr>
                <tr>
                    <td className="ps-0"><span className="display-4">Display 4</span></td>
                </tr>
                <tr>
                    <td className="ps-0"><span className="display-5">Display 5</span></td>
                </tr>
                <tr>
                    <td className="ps-0 border-bottom-0"><span className="display-6">Display 6</span></td>
                </tr>
            </tbody>
        </table>
    )
}

export const DisplayHeadingsCode = `
<table className="table">
    <tbody>
        <tr>
            <td className="border-top-0 ps-0"><span className="display-1">Display 1</span></td>
        </tr>
        <tr>
            <td className="ps-0"><span className="display-2">Display 2</span></td>
        </tr>
        <tr>
            <td className="ps-0"><span className="display-3">Display 3</span></td>
        </tr>
        <tr>
            <td className="ps-0"><span className="display-4">Display 4</span></td>
        </tr>
        <tr>
            <td className="ps-0"><span className="display-5">Display 5</span></td>
        </tr>
        <tr>
            <td className="ps-0 border-bottom-0"><span className="display-6">Display 6</span></td>
        </tr>
    </tbody>
</table>
`.trim();

export default DisplayHeadings
