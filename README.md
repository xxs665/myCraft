# myCraft

#CGI列表

##首页

###页面授权
`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=http%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect`

###默认地区
-名称: `getCurrentDistrict`
-参数: lat lng
-返回: {code: '11', name: '深圳'}

###工艺列表
-名称: `getAllCraft`
-参数：
-返回：[
	{craftPhotoUrl : "", craftName:"", artistsAmount:1, star:"", craftID:""}
]