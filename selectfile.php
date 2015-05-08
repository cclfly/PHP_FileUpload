<?php
	header("Contype:text/html;charset=utf-8");
	date_default_timezone_set("Asia/Chongqing");
	
	$arr=[];
	$i=0;
	$dirpath=iconv("utf-8", "gb2312", "./file/".$_POST['dir']);
	$dir=opendir($dirpath);
	while($file=@readdir($dir))
	{
		if($file!='.'&&$file!='..')
		{
			$filesrc=iconv("gb2312", "utf-8", $dirpath."/".$file);
			$filetime=date("Y年n月j日 G:i:s",filemtime($dirpath."/".$file));
			$filestamp=filemtime($dirpath."/".$file);
			$filetype=mime_content_type($dirpath."/".$file);
			$filesize=filesize($dirpath."/".$file);
			$filesize=$filesize<1024?"<1 KB":(($filesize/=1024)<1024?number_format($filesize,2)." KB":(($filesize/=1024)<1024?number_format($filesize,2)." MB":(($filesize/=1024)<1024?number_format($filesize,2)." GB":(">1 TB"))));
			
			$arr[$i++]=json_encode(array(
				"name"=>iconv("gb2312", "utf-8", $file),
				"src"=>$filesrc,
				"time"=>$filetime,
				"stamp"=>$filestamp,
				"type"=>$filetype,
				"size"=>$filesize
			));
		}
	}
	@closedir($dir);
	echo json_encode($arr);
?>