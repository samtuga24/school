import React from 'react'

export const ViewUsers = () => {
    return (
        <div className='view-container'>
            <div className='login-header'>Users</div>
            <div className='result-table'>
                <table className='table-width'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>

                    <tr className='table-row'>
                        <td className='t-data'></td>
                        <td className='t-data'></td>
                        <td className='t-data'></td>
                        <td className='t-data'></td>
                        <td className='t-data'>
                            
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    )
}
