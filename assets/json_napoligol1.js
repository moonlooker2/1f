$(function(){$.ajax({type:"GET",jsonp:"jsonp",url:"http://www.napoligol.it/news/Json_mrss1primopiano.php?callback=?",success:function(b){$.each(b.title,function(b,a){var c=a.locale,d=a.image,e=a.guid;$("#mrss1tutto").append('<div class="flashapp1"><img src='+d+'></><div class="titoloapp1"><a href='+e+"><h2>"+c+"</h2></a></div></div>")})}})});
$(function(){$.ajax({type:"GET",jsonp:"jsonp",url:"http://www.napoligol.it/news/Json_mrss2tutto.php?callback=?",success:function(b){$.each(b.title,function(b,a){var c=a.locale,d=a.image,e=a.categoria,f=a.pubDate,g=a.guid;$("#mrss2tutto").append('<div class="flashapp"><img src='+d+'></><div class="titoloapp"><span class="data">'+f+"</span><a href="+g+"><h2>"+c+'</h2></a></div><div class="category">'+e+"</div></div>")})}})});
$(function(){$.ajax({type:"GET",jsonp:"jsonp",url:"http://www.napoligol.it/news/Json_mrss3tutto.php?callback=?",success:function(b){$.each(b.title,function(b,a){var c=a.locale,d=a.image,e=a.categoria,f=a.pubDate,g=a.guid;$("#mrss3tutto").append('<div class="flashapp"><img src='+d+'></><div class="titoloapp"><span class="data">'+f+"</span><a href="+g+"><h2>"+c+'</h2></a></div><div class="category">'+e+"</div></div>")})}})});