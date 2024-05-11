import PropTypes from 'prop-types';

const TableBody = ({job, handleDelete}) => {
    const {_id, jobTitle, minSalary, maxSalary, deadline} = job;
    return (

        <tr className="border-b border-blue-gray-50 py-4">
            <td className="p-4">
                <h2>{jobTitle}</h2>
            </td>
            <td className="flex gap-3 p-4">
                <h1>Min Salary : $ {minSalary}</h1>
                <h1>Max Salary : $ {maxSalary}</h1>
            </td>
            <td className="p-4">
                <p>10/10/2024</p>
            </td>
            <td className="p-4">
                <p>{new Date(deadline).toLocaleDateString()}</p>
            </td>
            <td className="p-4">
                <button onClick={() => handleDelete(_id)}>Delete</button>
                <button>View Details</button>
            </td>
        </tr>

    );
};
TableBody.propTypes = {
    job: PropTypes.object,
    handleDelete: PropTypes.func
}
export default TableBody;