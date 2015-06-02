String.prototype.spacify = function() {
    var result = '';
    var len = this.length;
    for (var i=0; i < len; i++) {
        result = result + this.charAt(i) +  (len-1 !==i ? ' ': '') ;
    }
    return result;
}