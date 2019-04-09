<?php

$data = array(
    array('id'=>1, 'title'=>'锄禾日当午，'),
    array('id'=>2, 'title'=>'汗滴禾下土。'),
    array('id'=>3, 'title'=>'谁知盘中餐，'),
    array('id'=>4, 'title'=>'粒粒皆辛苦。')
);

foreach ($data as $v) {
  echo '<li><a href="news.php?id=', $v['id'], '">';
  echo $v['title'];
  echo '</a></li>';
}