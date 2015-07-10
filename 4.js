
var tf = $.createComment("更新：新增WASD控制功能", {x:Player.width * 0.7, y:Player.height * 0.4, lifeTime:9, color:0xffff00, 
	motion:
	{
		alpha:{fromValue: 1, toValue: 0, lifeTime: 3, startDelay:6000, easing:"None"}
	}});
tf.background = true;
tf.backgroundColor = 0x0000ff;
tf.wordWrap = true;
tf.width = 200;
var format = tf.getTextFormat();
format.color = 0xff0000;
tf.setTextFormat(format, 5, 9);
