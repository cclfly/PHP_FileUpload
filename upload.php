<?php
	$dir=$_POST['dir'];
	$file=@$_FILES['file'];
	$filepath="./file/".$dir."/".$file['name'];
	
	if(@move_uploaded_file($file['tmp_name'], iconv("UTF-8","gb2312",$filepath)))
	{
		echo "上传成功！";
	}
	else
	{
		echo "上传失败！请检查后重试。";
	}
?>