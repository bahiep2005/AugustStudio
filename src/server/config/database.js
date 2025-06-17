const sql = require('mssql');

const sqlConfig = {
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'Hieppc123@',
  database: process.env.DB_NAME || 'NewAugustDB',
  server: process.env.DB_SERVER || 'localhost',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

const connectDB = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log('Kết nối SQL Server thành công!');
    return pool;
  } catch (err) {
    console.error('Kết nối SQL Server thất bại:', err.message);
    // Không thoát process, chỉ throw error để xử lý ở nơi gọi
    throw err;
  }
};

module.exports = { sqlConfig, connectDB }; 