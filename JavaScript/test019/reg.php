<?php
$usrs = array('张三', '李四', '王五');
$usr = $_GET['un'];
if (in_array($usr, $usrs)) {
  echo 1;
} else {
  echo 0;
}