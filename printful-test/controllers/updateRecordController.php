<?php

class UpdateRecord extends DataBaseModel
{
    /**
     * @param int $id
     * @param string $updatedTitle
     * @param string $updatedDescription
     */
    public function updatedRecord(int $id, string $updatedTitle, string $updatedDescription): void
    {
        $this->updateThisRecord($id, $updatedTitle, $updatedDescription);
    }
}
