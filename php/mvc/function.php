<?php
	function C ($name, $methods) {
		require_once('/libs/Controller/' . $name . 'Controller.class.php');
		$testController = new testController();
		eval('$obj = new' . $name . 'Controller(); $obj ->' . $methods . '();');
	}
	C('test', 'show');

	function M ($name) {
		require_once('/libs/Model/' . $name . 'Model.class.php');
		$testModel = new testModel();
		eval('$obj = new' . $name . 'Model();');
		return $obj;
	}

	function V ($name) {
		require_once('/libs/View/' . $name . 'View.class.php');
		eval('$obj = new' . $name . 'View();');
		return $obj;
	}
?>