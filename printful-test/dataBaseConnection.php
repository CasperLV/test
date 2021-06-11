<?php

class DataBaseConnection
{
    private static $db_connection;

    protected static function openConnection()
    {
        $db_host = 'localhost:3306';
        $db_user = 'root';
        $db_pass = '';
        $db_name = 'todo';


        static::$db_connection = @new mysqli($db_host, $db_user, $db_pass, $db_name);

        if (static::$db_connection->connect_error) {
            exit("Database connection failure!!!");
        }

        return static::$db_connection;
    }

    protected function closeConnection()
    {
        static::$db_connection->close();
        static::$db_connection = null;
    }
}
