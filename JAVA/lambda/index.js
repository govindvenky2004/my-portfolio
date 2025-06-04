import { S3Client } from '@aws-sdk/client-s3';
import mysql from 'mysql2/promise';

const s3Client = new S3Client({ region: "us-east-1" });

export const handler = async (event, context) => {
    try {
        // Establish MySQL connection
        const connection = await mysql.createConnection({
            host: 'supplierdb.cluster-cva5onq0dshr.us-east-1.rds.amazonaws.com',
            user: 'nodeapp',
            password: 'coffee',
            database: 'COFFEE'
        });

        // Query suppliers
        const [suppliers] = await connection.query('SELECT * FROM suppliers');

        // Query beans
        const [beans] = await connection.query('SELECT * FROM beans');

        // Close connection
        await connection.end();

        // Merge data
        const mergedData = mergeData(suppliers, beans);

        // Return the merged result
        return {
            statusCode: 200,
            body: JSON.stringify({
                my_json_arr: mergedData
            })
        };
    } catch (err) {
        console.error("Error executing query:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Failed to retrieve data from MySQL',
                details: err.message
            })
        };
    }
};

// Function to merge suppliers and beans data
function mergeData(suppliers_arr, beans_arr) {
    const fine_tunes_data_arr = [];

    for (const supplier of suppliers_arr) {
        const o = {
            suppliers_id_int: supplier.id,
            supplier_name_str: supplier.name,
            supplier_address_str: supplier.address,
            supplier_phone_str: supplier.phone,
            bean_info_obj_arr: []
        };

        for (const bean of beans_arr) {
            if (supplier.id === bean.supplier_id) {
                const b = {
                    type_str: bean.type,
                    product_name_str: bean.product_name,
                    quantity_int: bean.quantity
                };
                o.bean_info_obj_arr.push(b);
            }
        }

        fine_tunes_data_arr.push(o);
    }

    return fine_tunes_data_arr;
}