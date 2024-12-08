 package expo.modules.sql

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet
import java.sql.Statement

class ExpoSqlModule : Module() {

    override fun definition() = ModuleDefinition {
        Name("ExpoSql")

        Function("connect") { host: String, user: String, password: String, database: String ->
            try {
                // Load the MySQL driver
                Class.forName("com.mysql.cj.jdbc.Driver")

                // Create the connection URL
                val url = "jdbc:mysql://$host:3306/$database"

                // Establish the connection
                val connection: Connection = DriverManager.getConnection(url, user, password)
                connection
            } catch (e: Exception) {
                throw Exception("Database connection failed: ${e.message}")
            }
        }

        Function("query") { query: String, host: String, user: String, password: String, database: String ->
            val results = mutableListOf<Map<String, Any?>>()
            try {
                // Load the MySQL driver
                Class.forName("com.mysql.cj.jdbc.Driver")

                // Create the connection URL
                val url = "jdbc:mysql://$host:3306/$database"

                // Establish the connection
                val connection: Connection = DriverManager.getConnection(url, user, password)
                val statement: Statement = connection.createStatement()
                val resultSet: ResultSet = statement.executeQuery(query)

                // Process the results
                val metaData = resultSet.metaData
                val columnCount = metaData.columnCount
                while (resultSet.next()) {
                    val row = mutableMapOf<String, Any?>()
                    for (i in 1..columnCount) {
                        row[metaData.getColumnName(i)] = resultSet.getObject(i)
                    }
                    results.add(row)
                }

                resultSet.close()
                statement.close()
                connection.close()
            } catch (e: Exception) {
                throw Exception("Query execution failed: ${e.message}")
            }
            results
        }
    }
}
