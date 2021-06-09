<?php
include 'dataBaseConnection.php';
include 'models/dataBaseModel.php';
include 'controllers/todoListController.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Test</title>
    <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
    <script src="./vue/vue-router.js"></script>
</head>
<body>
<div id="app" class="container">
    <h1>Darāmo lietu saraksts</h1>
    <router-view
            v-for="element in todo_list"
            :key="element.id"
            :id="element.id"
            :title="element.title"
            :description="element.description"
            :date="element.date"
            :checked="false"
    ></router-view>
    <router-view name="edit"></router-view>
    <router-view name="add"></router-view>
</div>
<script src="vue/pages/list.vue.js"></script>
<script src="vue/pages/add.vue.js"></script>
<script src="vue/pages/edit.vue.js"></script>
<script src="./vue/app.js"></script>

</body>
</html>
