<?php

class CheckedRecord extends DataBaseModel
{
    public  function updateRecordCheck(int $id, int $checked )
    {
        $this->updateRecordChecks($id, $checked);
    }
}
