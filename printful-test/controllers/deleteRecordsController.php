<?php

class DeleteRecords extends DataBaseModel {
    /**
     * @param int $id
     */
    public function deleteThisRecord(int $id):void
    {
        $this->deleteExistingRecord($id);
    }
}

