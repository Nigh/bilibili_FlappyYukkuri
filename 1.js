

// <d p="8.4379997253418,8,25,16777215,1396975077,2,a4abbc3c,434173881">
var tf = $.createComment("由于鼠标松开时才会触发事件，因此在游戏过程中请轻击鼠标", {x:0, y:100, lifeTime:13, color:0xffff00, 
	motion:
	{
		alpha:{fromValue: 1, toValue: 0, lifeTime: 3, startDelay:10000, easing:"None"}
	}});
tf.background = true;
tf.backgroundColor = 0x0000ff;
tf.wordWrap = true;
tf.width = 200;
var format = tf.getTextFormat();
format.color = 0xff0000;
tf.setTextFormat(format, 23, 27);
// </d>

