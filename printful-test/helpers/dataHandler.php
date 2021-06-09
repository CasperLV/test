<?php
require_once __DIR__."/../dataBaseConnection.php";
require_once __DIR__ . "/../models/dataBaseModel.php";
require_once __DIR__."/../controllers/todoListController.php";
require_once __DIR__."/../controllers/addRecordController.php";



$list = new TodoListController();
$list = $list->showTodoList();


if (!empty($_POST['range']))
{
if ($_POST['range'] == 'all')
{
$jsonList = json_encode($list);
echo $jsonList;
}
} elseif
($_POST['action'] == 'create_record'){
    if (!empty($_POST['new_record'])) {
        if (!empty($_POST['new_record']['title'])) {
            $newTitle = ($_POST['new_record']['title']);
            $newDescription = ($_POST['new_record']['description']);
            $obj = new AddRecord();
            $obj->getNewRecord($newTitle, $newDescription);
        }
    }
}

