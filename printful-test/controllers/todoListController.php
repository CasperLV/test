<?php

class TodoListController extends DataBaseModel
{
    /**
     * @return array
     */
    public function showTodoList(): array
    {
        return $this->getAllTodoRecords();
    }
}

