import './table.scss'
const Table = () => {
    return (
        <div>
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
                    </tr>
                    <tr>
                        <td>Kaung</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>Myat</td>
                        <td>27</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
