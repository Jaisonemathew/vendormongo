import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VendorList() {
    const [vendors, setVendors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/Vendors/')
            .then(response => {
                setVendors(response.data.response);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []);

    return (
        <div>
            {vendors.map(vendor => (
                <div key={vendor.VendorID}>
                
                    <h2>{vendor.Vendor_name}</h2>
                    <p>{vendor.VendorID}</p>
                    <p>{vendor.Account_no}</p>
                    <p>{vendor.Bank_name}</p>
                    <p>{vendor.Address_Line1}</p>
                    <p>{vendor.Address_Line2}</p>
                    <p>{vendor.Zip_Code}</p>    
                </div>
            ))}
        </div>
    );
}

export default VendorList;