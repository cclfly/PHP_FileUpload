<?php
	if(unlink(iconv("utf-8", "gb2312", $_POST['target'])))
	{
		echo "成功";
	}
	else
	{
		echo "失败";
	}
?>