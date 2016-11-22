var duration = 5;
var loaded = null;
varloadlistener = funcation ()
{
	document.body.className += "loaded";
}
windoe.setTimeout (function (){
	if (loaded ==true) loadListener ();
}, duration*1000);
window.addEventListener("load", function (){
	if (loaded == null) loaded = true;
	else loadListener ();
})