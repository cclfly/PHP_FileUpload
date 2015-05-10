<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>文件上传</title>
		<link rel="stylesheet" href="css/style.css" />
		<script type="text/javascript" src="js/jquery-1.11.0.js" ></script>
		<script type="text/javascript" src="js/ajaxfileupload.js" ></script>
		<script type="text/javascript" src="js/mime_type.js" ></script>
		<script type="text/javascript" src="js/main.js" ></script>
	</head>
	<body>
		<div id="up"></div>
		<div id="middle">
			<div id="upfile">
				<input type="button" id="seldir" value="临时文件" />
				<div id="dir">
					<span>临时文件</span>
					<span>永久文件</span>
				</div>
				<input type="text" id="txtfile" readonly="readonly" />
				<input type="button" id="btnfile" value="浏览..." />
				<input type="file" id="file" name="file" />
				<input type="button" id="subfile" value="上传" />
			</div>
			<div id="selfile">
				<table cellspacing="0">
					<thead>
						<tr>
							<td width="7%"></td><td width="51%">名称</td><td width="20%">上传时间</td><td width="12%">类型</td><td width="10%">大小</td>
						</tr>
					</thead>
					<tbody id="filelist"></tbody>
				</table>
			</div>
		</div>
		<div id="down"></div>
	</body>
</html>