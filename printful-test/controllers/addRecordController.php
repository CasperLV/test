<?php
class AddRecord extends DataBaseModel {

        public function getNewRecord($newTitle, $newDescription) {
            $this->insertNewRecord($newTitle, $newDescription);
    }
}
