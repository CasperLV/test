<?php

class CheckedRecord extends DataBaseModel
{
    /**
     * @param int $id
     * @param int $checked
     */
    public  function updateRecordCheck(int $id, int $checked ):void
    {
        $this->updateRecordChecks($id, $checked);
    }
}

