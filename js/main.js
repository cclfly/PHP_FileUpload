function onDirChange()
{
	$('#filelist').empty();
	
	$.ajax({
		type:"post",
		url:"selectfile.php",
		data:"dir="+$('#seldir').val(),
		success:function(data){
			var aDatas=new Array();
			
			data.sort(function(a,b){return JSON.parse(a)['stamp']<JSON.parse(b)['stamp']?1:-1;});
			for(var i=0;i<data.length;i++)
			{
				aDatas=JSON.parse(data[i]);
				
				$('#filelist').append("<tr><td><div id='manage'><a href='"+aDatas['src']+"'><img class='open' src='./img/open-1.gif' title='打开' oncontextmenu='return false;' onselectstart='return false;' /></a><a href='"+aDatas['src']+"' download='download'><img class='download' src='./img/download-1.gif' title='下载' oncontextmenu='return false;' onselectstart='return false;' /></a><a href='javascript:;'><img class='delete' src='./img/delete-1.gif' title='删除' oncontextmenu='return false;' onselectstart='return false;' /></a></div></td><td>"+aDatas['name']+"</td><td>"+aDatas['time']+"</td><td>"+(mime_type[aDatas['type'].toLowerCase()]?mime_type[aDatas['type'].toLowerCase()]:aDatas['type'].toLowerCase())+"</td><td class='filesize'>"+aDatas['size']+"</td></tr>");
			}
			
			var aOpen=document.getElementsByClassName('open');
			var aDown=document.getElementsByClassName('download');
			var aDele=document.getElementsByClassName('delete');
			for(var i=0;i<aOpen.length;i++)
			{
				aDown[i].onmouseover=function(){
					this.src="./img/download-0.png";
				};
				aDown[i].onmouseout=function(){
					this.src="./img/download-1.gif";
				};
				aOpen[i].onmouseover=function(){
					this.src="./img/open-0.png";
				};
				aOpen[i].onmouseout=function(){
					this.src="./img/open-1.gif";
				};
				aDele[i].onmouseover=function(){
					this.src="./img/delete-0.png";
				};
				aDele[i].onmouseout=function(){
					this.src="./img/delete-1.gif";
				};
				
				aDele[i].onclick=function(){
					var str="./file/"+$('#seldir').val()+"/"+this.parentNode.parentNode.parentNode.nextSibling.innerText;
					$.post("deletefile.php",{target:str},function(data){
						alert(data);
						onDirChange();
					},"text");
					return false;
				};
			}
		},
		dataType:"json"
	});
}

function MessageOnConsole()
{
	console.clear();
	console.log("欢迎访问！");
	console.log("计算机技术交流群 321302602");
	console.log("　　学习计算机技术，培养创造性思维。让自己变得更聪明。\n");
	console.log("请先到<http://goo.gl/c8RRP6 >(可能需要梯子) 回答问题，获取注册码，将注册码填到验证消息中，方可加群。");
}

$(document).ready(function(){
	$.ajax({
		type:"post",
		url:"autodelete.php",
		async:false
	});
	
	MessageOnConsole();
	
	$(document).click(function(){
		$('#dir').hide();
	});
	
	onDirChange();
	var timer=setInterval(onDirChange,1000*30*5);
	
	$('#dir').click(function(){
		return false;
	});
	$('#dir span:nth-child(1)').click(function(){
		$('#seldir').val($(this).text());
		sDir2=$('#seldir').val();
		$('#dir').hide();
		if(sDir1!==sDir2)
		{
			onDirChange();
		}
	});
	$('#dir span:nth-child(2)').click(function(){
		$('#seldir').val($(this).text());
		sDir2=$('#seldir').val();
		$('#dir').hide();
		if(sDir1!==sDir2)
		{
			onDirChange();
		}
	});
	
	var sDir1,sDir2;
	
	$('#seldir').click(function(){
		sDir1=sDir2=$('#seldir').val();
		
		$('#dir').toggle();
		return false;
	});
	$('#btnfile').click(function(){
		$('#file').click();
	});
	$('#file').change(function(){
		$('#txtfile').val($('#file').val().split('\\').pop());
	});
	
	$('#subfile').click(function(){
		if($('#file').val()=="")
		{
			//$('#txtfile').css("border-color","red");
			return false;
		}
		$.ajaxFileUpload({
			url:"./upload.php",
			type:"post",
			data:{"dir":$('#seldir').val()},
			fileElementId:"file",
			secureuri:false,
			dataType:"TEXT",
			success:function(data){
				alert(data);
				onDirChange();
			},
			error:function(){}
		});
		
		$('#txtfile').val("");
		$('#file').change(function(){
			$('#txtfile').val($('#file').val().split('\\').pop());
		});
	});
	
	
});
