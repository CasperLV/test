<?php
class TodoListController extends DataBaseModel {
    public function showTodoList() {
       return $this->getAllTodoRecords();
    }
}




