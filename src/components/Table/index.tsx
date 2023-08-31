import './table.scss'
const Table = () => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Kaung</td>
                        <td>25</td>
                        <td>25</td>
                        <td>25</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>

                    </tr>
                    <tr>
                        <td>Kaung</td>
                        <td>25</td>
                        <td>25</td>
                        <td>25</td>

                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Myat</td>

                        <td>25</td>
                        <td>25</td>

                        <td>25</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
