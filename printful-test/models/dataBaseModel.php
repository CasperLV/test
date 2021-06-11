<?php

class DataBaseModel extends DataBaseConnection
{
    /**
     * @return array
     */
    protected function getAllTodoRecords(): array
    {
        $sql = "SELECT * FROM records";
        $response = $this->openConnection()->query($sql);
        $this->closeConnection();
        return $response->num_rows > 0 ? $response->fetch_all(MYSQLI_ASSOC) : [];
    }

    /**
     * @param string $newTitle
     * @param string $newDescription
     */
    protected function insertNewRecord(string $newTitle, string $newDescription): void
    {
        $sql = "INSERT INTO records (title, description) VALUES ( '{$newTitle}', '{$newDescription}') ";
        $this->openConnection()->query($sql);
        $this->closeConnection();
    }

    /**
     * @param int $id
     * @param string $updatedTitle
     * @param string $updatedDescription
     */
    protected function updateThisRecord(int $id, string $updatedTitle, string $updatedDescription): void
    {
        $sql = "UPDATE records SET `title` = '{$updatedTitle}', `description` = '{$updatedDescription}' WHERE `id` = '{$id}' ";
        $this->openConnection()->query($sql);
        $this->closeConnection();
    }

    /**
     * @param int $id
     */
    protected function deleteExistingRecord(int $id):void
    {
        $sql= "DELETE FROM records WHERE `id` = '{$id}'";
        $this->openConnection()->query($sql);
        $this->closeConnection();
    }

    /**
     * @param int $id
     * @param int $checked
     */
    protected function updateRecordChecks(int $id, int $checked):void
    {
        $sql= "UPDATE records SET `checked` = '{$checked}' WHERE `id` = '{$id}'";
        var_dump($sql);
        $this->openConnection()->query($sql);
        $this->closeConnection();
    }
}
