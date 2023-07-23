const sql = require('mssql');
const sqlConfig = {
 server:"localhost\\PRAVIN_LAPTOP\SQLEXPRESS",
 port:1433,
 user:"sa",
 password:"pass@word1",
 database:"UserManagementProcess",
 options:{
   enableArithAbort:true,
 },
 connectionTimeout:15000,
 pool:{
   max:10,
   min:0,
   ideleTimeoutMillis:30000,
 },
}

sql.on('error',err=>{
  console.log(err.message)
})

async function getDetails(){
  try{
    let pool = await sql.connect(sqlConfig)
   let result =  await pool.request().query('select * from tbl_psg_usr_details')
   console.log(result);
   sql.close()
  }
  catch(error){
    console.log(err.message)
    sql.close()
  }
}
