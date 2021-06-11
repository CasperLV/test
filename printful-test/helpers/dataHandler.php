<?php
require_once __DIR__ . "/../dataBaseConnection.php";
require_once __DIR__ . "/../models/dataBaseModel.php";
require_once __DIR__ . "/../controllers/todoListController.php";
require_once __DIR__ . "/../controllers/addRecordController.php";
require_once __DIR__ . "/../controllers/updateRecordController.php";
require_once __DIR__ . "/../controllers/deleteRecordsController.php";
require_once __DIR__ . "/../controllers/checkedRecordController.php";


$list = new TodoListController();
$list = $list->showTodoList();

if (!empty($_POST['range'])) {
    if ($_POST['range'] == 'all') {
        $jsonList = json_encode($list);
        echo $jsonList;
    }
} elseif ($_POST['action'] == 'create_record') {
    if (!empty($_POST['new_record'])) {
        if (!empty($_POST['new_record']['title'])) {
            $newTitle = ($_POST['new_record']['title']);
            $newDescription = ($_POST['new_record']['description']);

            $obj = new AddRecord();
            $obj->getNewRecord($newTitle, $newDescription);
        }
    }
} elseif ($_POST['action'] == 'update_record') {
    if (!empty($_POST['updated_record'])) {
        if (!empty($_POST['updated_record']['id']) && !empty($_POST['updated_record']['title'])) {
            $id = ($_POST['updated_record']['id']);
            $updatedTitle = ($_POST['updated_record']['title']);
            $updatedDescription = ($_POST['updated_record']['description']);

            $obj = new UpdateRecord();
            $obj->updatedRecord($id, $updatedTitle, $updatedDescription);
        }
    }
} elseif($_POST['action'] == 'delete_record') {
    if(!empty($_POST['id'])) {
        $id = ($_POST['id']);

        $obj = new DeleteRecords();
        $obj->deleteThisRecord($id);
    }
} elseif ($_POST['action'] == 'check_record') {
        if (!empty($_POST['id'])) {
            $id = ($_POST['id']);
            $checkedRecord = filter_var($_POST['checked'], FILTER_VALIDATE_BOOLEAN);

            $obj = new CheckedRecord();
            $obj->updateRecordCheck($id, $checkedRecord);
        }
}
