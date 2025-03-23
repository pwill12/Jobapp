import { Link } from "react-router-dom";

const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                {/* <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr> */}
                {data.map((data) => (
                    <tr key={data._id}>
                        <Link to={"/jobinfo/" + data._id} className="tdlink">
                            <td>{data.title}</td>
                        </Link>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;