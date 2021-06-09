<?php

class DataBaseModel extends DataBaseConnection {

    protected  function getAllTodoRecords() {
        $sql= "SELECT * FROM records";
        $response = $this->openConnection()->query($sql);
        $this->closeConnection();
        return $response->num_rows > 0 ? $response->fetch_all(MYSQLI_ASSOC): [];
    }

    protected function insertNewRecord($newTitle, $newDescription) {
        $sql= "INSERT INTO records (title, description) VALUES ( '$newTitle', '$newDescription') ";
        $this->openConnection()->query($sql);
        $this->closeConnection();
    }
}
