<?php

class AddRecord extends DataBaseModel
{
    /**
     * @param string $newTitle
     * @param string $newDescription
     */
    public function getNewRecord(string $newTitle, string $newDescription): void
    {
        $this->insertNewRecord($newTitle, $newDescription);
    }
}
