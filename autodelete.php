<?php
	date_default_timezone_set("Asia/Chongqing");
	
	@mkdir(iconv("utf-8", "gb2312", "file/临时文件"));
	@mkdir(iconv("utf-8", "gb2312", "file/永久文件"));
	
	function hours_min($start_time,$end_time){ 
		if (strtotime($start_time) > strtotime($end_time)) 
			list($start_time, $end_time) = array($end_time, $start_time);
		$sec = $start_time - $end_time;
		$sec = round($sec/60);
		$min = str_pad($sec%60, 2, 0, STR_PAD_LEFT);
		$hours_min = floor($sec/60);
		$min != 0 && $hours_min .= ':'.$min;
		return $hours_min;
	}
	
	$dirpath=iconv("utf-8", "gb2312", "./file/临时文件/");
	$dir=opendir($dirpath);
	while($file=readdir($dir))
	{
		if(filetype($dirpath.$file)=="file")
		{
			if(explode(":",hours_min(time(),filemtime($dirpath.$file)))[0]>24)
			{
				unlink($dirpath.$file);
			}
		}
	}
	closedir($dir);
?>