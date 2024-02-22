use diesel::pg::PgConnection;

#[database("diesel_postgres_pool")]
pub struct DbConnect(diesel::PgConnection);

// use diesel::pg::Pg;
// use diesel::prelude::*;
// use diesel::query_builder::*;
// use diesel::query_dsl::methods::LoadQuery;
// use diesel::sql_types::BigInt;
