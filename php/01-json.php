<?php
header("Content-type: text/html; charset=utf-8");

function createHtml ($tags = "") {
	echo "<h1>$tags</h1><br/>";
}

$arr = array("username", "age");

$jsonObj = json_encode($arr);
$serializeObj = serialize($arr);

createHtml($jsonObj);
createHtml($serializeObj);
