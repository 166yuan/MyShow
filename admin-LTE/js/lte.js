/**
 * 判断元素是否有给class
 * @param obj
 * @param clazz
 */
function hasClass(obj, clazz) {
    if(obj && obj.className) {
        return obj.className.match(new RegExp("(\\s|^)" + clazz + "(\\s|$)")) != null;
    } else {
        return false;
    }
}

/**
 * 根据class name获取元素
 * @param obj 获取元素的父元素
 * @param clazz 类名
 * @returns {Array}
 */
function getByClassName(obj, clazz) {
    var elements = obj.getElementsByTagName("*");
    var result = [];
    for(var i = 0; i < elements.length; i++) {
        if(hasClass(elements[i], clazz)) {
            result.push(elements[i]);
        }
    }
    return result;
}

function removeClass(obj, clazz) {
    if(hasClass(obj, clazz)) {
        var regExp = new RegExp("(\\s|^)" + clazz + "(\\s|$)");
        obj.className = obj.className.replace(regExp, "");
    }
}

function addClass(obj, clazz) {
	alert(obj.className);
    if(!hasClass(obj, clazz)) {
        obj.className += (" " + clazz);
    }
}

window.onload = function (){
	var tree = getByClassName(document.getElementById('wraper'),"submenu");
	for (var i = 0; i <tree.length ; i++) {
		var that =tree[i];
		that.addEventListener('click',function(){
			addClass(that,"sildedowns");
		},false);
	};
}